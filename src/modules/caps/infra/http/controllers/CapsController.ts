import {Request,Response} from 'express'

export default class CapsController{

    public async create(request:Request, response:Response): Promise<Response>{

        return response.json()
    }

}