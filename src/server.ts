import 'reflect-metadata'
import 'dotenv/config'
import express,{Request,Response,NextFunction} from 'express'
import router from '@routes/routes'



const app = express()
const port = 3333

app.use(router)

app.get('/',(request:Request,response:Response) =>{
    return response.json({
        message: 'OK'
    })
})


app.listen(port,()=>{
    if( !process.env.APP_ENVIRONMENT||process.env.APP_ENVIRONMENT.toLowerCase() === 'dev'){
        console.log(`Running on port ${port} 🚀`)
        return
    }
    console.log('Running')
        
})