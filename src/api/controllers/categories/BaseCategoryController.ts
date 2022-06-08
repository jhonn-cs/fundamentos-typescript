import { BaseHttpController, interfaces } from "inversify-express-utils";

const ROUTE_PREFIX: string = "/categories";

export default class BaseCategoryController extends BaseHttpController implements interfaces.Controller { }

export { ROUTE_PREFIX };
