import { Router } from "express";
import { Department } from "../../Core/Entities/Department";
import { BaseController } from "./BaseController";
export class DepartmentsController extends BaseController<Department>{
    constructor() {
        super(Department);
    }
}