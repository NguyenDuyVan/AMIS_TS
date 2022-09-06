import { IBaseRepository } from "../../Core/Interfaces/Base/IBaseRepository";
import { connection } from "../Connection/mysql/connection";

export class BaseRepository<T> implements IBaseRepository<T> {
    // /**
    // * Lấy tên của generic type
    // * @param value : giá trị khởi tạo
    // * CreatedBy VanND (06/09/2022)
    // */
    // private tableName: string;
    // constructor(value) {
    //     this.tableName = value;
    // }

    /**
    * Chuỗi kết nối
    * CreatedBy VanND (06/09/2022)
    */
    protected ConnectionString: string = "Server=13.229.200.157;Database=MISA.WEB01.NDVAN;Uid=dev;Pwd=12345678;Character Set=utf8";

    async Get(): Promise<T[]> {
        const rows = connection.query('SELECT * FROM Employees') as any;
        return rows;
    }
    GetById(entityId: string): T {
        throw new Error("Method not implemented.");
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
