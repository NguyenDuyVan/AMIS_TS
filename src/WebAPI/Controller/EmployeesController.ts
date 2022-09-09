import { Router } from "express";
import { BaseController } from "./BaseController";
import { BaseRepository } from "../../Infrastructure/Repository/BaseRepository";
import { Employee } from "../../Core/Entities/Employee";
export class EmployeesController extends BaseController<Employee>{
    constructor() {
        super(Employee);
    }
}
