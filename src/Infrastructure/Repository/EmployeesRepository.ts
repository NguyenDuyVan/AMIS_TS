import { Employee } from "../../Core/Entities/Employee";
import { IEmployeeRepository } from "../../Core/Interfaces/IEmployeeRepository";
import { BaseRepository } from "./BaseRepository";

export class EmployeesRepository extends BaseRepository<Employee> implements IEmployeeRepository{
    GetPaging(employeeFilter: string, pageSize: number, pageNumber: number): Employee[] {
        throw new Error("Method not implemented.");
    }
    GetAllEmployeesId(): string[] {
        throw new Error("Method not implemented.");
    }
    CheckEmployeeCode(employeeCode: string): Boolean {
        throw new Error("Method not implemented.");
    }
    DeleteMulti(entitiesIdText: string): { employeeEffect: number; } {
        throw new Error("Method not implemented.");
    }
    GetNewEmployeeCode(): string {
        throw new Error("Method not implemented.");
    }
    
}