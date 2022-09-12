import { FilterParams, IBaseRepository } from "../../Core/Interfaces/Base/IBaseRepository";
import { connection } from "../Connection/mysql/connection";

export class BaseRepository<T> implements IBaseRepository<T> {
    async Get(): Promise<T[]> {
        const [rows] = await (await connection).query('SELECT * FROM Employees');
        return rows as T[];
    }
    async GetById(entityId: string): Promise<T[]> {
        const [rows] = await (await connection).query(String(`SELECT * FROM Employees WHERE EmployeeId = "${entityId}"`));
        return rows as T[];
    }
    async Filter(param: FilterParams): Promise<T[]> {
        const text = String(param.text) || ""
        const pageSize = Number(param.pageSize) || 20
        const numberOffset = Number(param.pageSize * (param.pageNumber - 1)) || 0
        const [rows] = await (await connection).query(`SELECT * FROM Employees WHERE EmployeeCode LIKE "%${param.text}%" OR EmployeeName LIKE "%${param.text}%" OR PhoneNumber LIKE "%${param.text}%" LIMIT ${pageSize} OFFSET ${numberOffset}`);
        return rows as T[];
    }
    Insert(data: T): T {
        throw new Error("Method not implemented.");
    }
    Update(entityId: string, data: T): T {
        throw new Error("Method not implemented.");
    }
    Delete(entityId: string): number {
        throw new Error("Method not implemented.");
    }
}
