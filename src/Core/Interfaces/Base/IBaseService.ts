export interface IBaseService<T> {
    /**
    * Thêm đối tượng mới
    * @param data : dữ liệu của đối tượng cần thêm
    * CreatedBy VanND (05/09/2022)
    */
    Insert(data: T): number

    /**
    * Sửa thông tin nhân viên theo Id
    * @param entityId: id đối tượng cần sửa
    * @param data: dữ liệu đối tượng cần sửa
    * CreatedBy VanND (05/09/2022)
    */
    Update(entityId: string, data: T): number
}