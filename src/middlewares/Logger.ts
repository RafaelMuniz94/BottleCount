import {Request,Response,NextFunction} from 'express'


export default function Logger(
    request:Request,
    response:Response,
    next:NextFunction,
){
    let who = `${request.method} - ${request.url}`
    let params = request.params
    let query = request.query
    let body = request.body


    let log = {
        date: new Date(),
        method: who,
        //params: params,
        queryString: query,
        body: body
    }

    console.log(log)

    next()
}