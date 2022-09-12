export interface IBaseRepository<T> {
    /**
    * Lấy danh sách đối tượng
    * CreatedBy VanND (05/09/2022)
    */
    Get(): Promise<T[]>

    /**
    * Lấy thông tin theo Id
    * @param entityId : id của đối tượng cần lấy
    * CreatedBy VanND (05/09/2022)
    */
    GetById(entityId: string): Promise<T[]>

    /**
     * Lọc bản ghi theo text, số  trang, số bản ghi trên trang
     * @param text Giá trị cần tìm kiếm
     * @param pageSize Số bản ghi trên trang
     * @param pageNumber Thứ tự trang
     * CreatedBy Vannd (09/09/2022)
     */
    Filter(param: FilterParams): Promise<T[]>

    /**
    * Thêm đối tượng mới
    * @param data : dữ liệu của đối tượng cần thêm
    * CreatedBy VanND (05/09/2022)
    */
    Insert(data: T): T

    /**
    * Sửa thông tin nhân viên theo Id
    * @param entityId: id đối tượng cần sửa
    * @param data: dữ liệu đối tượng cần sửa
    * CreatedBy VanND (05/09/2022)
    */
    Update(entityId: string, data: T): T

    /**
    * Xóa đối tượng theo Id
    * @param entityId: id đối tượng cần xóa
    * CreatedBy VanND (05/09/2022)
    */
    Delete(entityId: string): number
}

export interface FilterParams {
    text: string
    pageSize: number
    pageNumber: number
}