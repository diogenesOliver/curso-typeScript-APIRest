import {Router, Request, Response} from 'express'
import { createMovie } from './controllers/movieController'

const router = Router()

export default router.get('/teste', (req: Request, res: Response) => {

    res.status(200).send('API Funcionando até então')

}).post('/movie', createMovie)