import {Router,json} from 'express'
import Logger from '@middlewares/Logger'
import capsRouter from '@caps/infra/http/routes/caps.routes'

const router = Router()

router.use(Logger)
router.use(json())
router.use("/caps",capsRouter)

export default router