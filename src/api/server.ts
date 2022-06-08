import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json"
import { InversifyExpressServer } from "inversify-express-utils";
import { interfaces } from "inversify";
import bodyParser from "body-parser";
import "./controllers/categories/CreateCategoryController"
import "./controllers/categories/ImportCategoryController"
import "./controllers/categories/ListCategoryController"
import "./controllers/specifications/CreateSpecificationController"

export default function configureServer(container: interfaces.Container) {
    const server: InversifyExpressServer = new InversifyExpressServer(container, null, { rootPath: "/api" });
    server.setConfig((app) => {
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(bodyParser.json());

        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    });

    server.setErrorConfig((app) => {
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
    });

    const port = 3333;

    server
        .build()
        .listen(port, () => console.log(`Server is running on port: ${port}`));
}