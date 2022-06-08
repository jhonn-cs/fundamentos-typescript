import { BaseHttpController, interfaces } from "inversify-express-utils";

const ROUTE_PREFIX: string = "/specifications";

export default class BaseSpecificationController extends BaseHttpController implements interfaces.Controller { }

export { ROUTE_PREFIX }