import { Request, Response, Router } from "express";
import { app } from '../../../index'
import { BaseRepository } from "../../Infrastructure/Repository/BaseRepository";
export class BaseController<T> {
    protected _baseRepository = new BaseRepository<T>()
    path: string

    constructor(obj: { name: string; }) {
        this.path = obj.name
        this.initRouter()
    }

    /**
     * Khai báo các route chung ở class cha
     * CreatedBy VanND (08/09/2022)
     */
    initRouter() {
        const router = Router()
        app.use(`/api/v1/${this.path}`, router)

        router.get('/', this.GetAll.bind(this))
        router.get('/:id', this.GetById.bind(this))
    }

    /**
    * Lấy danh sách đối tượng
    * CreatedBy VanND (08/09/2022)
    */
    async GetAll(req: Request, res: Response) {
        try {
            res.status(200).json(await this._baseRepository.Get())
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    /**
    * Lấy thông tin theo Id
    * CreatedBy VanND (08/09/2022)
    */
    async GetById(req: Request, res: Response) {
        try {
            res.status(200).json(await this._baseRepository.GetById(req.params.id))
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    async Filter(req: Request, res: Response) {
        try {
            res.status(200).json(await this._baseRepository.GetById(req.params.id))
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

