import { IBaseService } from "../Interfaces/Base/IBaseService";

export class BaseService<T> implements IBaseService<T> {
    /**
    * Biến cờ trạng thái thêm mới
    * CreatedBy VanND (05/09/2022)
    */
    private isInsert: Boolean

    /**
    * Kiểm tra thông tin đối tượng cần thêm có hợp lệ không
    * @param data : dữ liệu của đối tượng cần thêm
    * CreatedBy VanND (05/09/2022)
    */
    Insert(data: T): number {
        // this.isInsert = true;
        // var isValid = ValidateObject(entity);
        // if (isValid)
        // {
        //     isInsert = false;
        //     var entities = _baseRepository.Insert(entity);
        //     return entities;
        // }
        // else
        // {
        //     isInsert = false;
        //     throw new Exception();
        // }
        throw new Error("Method not implemented.");
    }


    Update(entityId: string, data: T): number {
        throw new Error("Method not implemented.");
    }

    // ValidateObject(entity : T) {
    //     var isValid = true;
    //     //  1. Quét toàn bộ các property của đối tượng có đánh dấu vào validate chung: 
    //     var properties = entity.GetType().GetProperties();
    // }

}