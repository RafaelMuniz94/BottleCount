import {Router,Request,Response} from 'express'



const capsRouter = Router()



capsRouter.get('/:name',(request:Request,response:Response) =>{
    return response.json({
        message: 'caps route'
    })
})


export default capsRouter