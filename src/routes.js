import { Router } from 'express'

import AlunoController from './controllers/AlunoController'
import EscolaController from './controllers/EscolaController'

const routes = Router()

// Student CRUD routes
routes.get('/alunos', AlunoController.index)
routes.get('/alunos/:id', AlunoController.show)
routes.post('/alunos', AlunoController.store)
routes.put('/alunos/:id', AlunoController.update)
routes.delete('/alunos/:id', AlunoController.destroy)

// School routes
routes.get('/escola', EscolaController.index)
routes.post('/escola', EscolaController.store)

export default routes
