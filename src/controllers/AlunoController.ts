import { Request, Response } from 'express'

import Aluno from '../models/Aluno'

class AlunoController {
  public async index (req: Request, res: Response): Promise<Response> {
    const alunos = await Aluno.find()

    return res.json(alunos)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const aluno = await Aluno.findById(req.params.id)

    return res.json(aluno)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const aluno = await Aluno.create(req.body)

    return res.json(aluno)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(aluno)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await Aluno.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new AlunoController()
