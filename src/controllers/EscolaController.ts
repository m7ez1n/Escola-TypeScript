import { Request, Response } from 'express'

import Escola from '../models/Escola'

class EscolaController {
  public async index (req: Request, res: Response): Promise<Response> {
    const escolas = await Escola.find()

    return res.json(escolas)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const escola = await Escola.create(req.body)

    return res.json(escola)
  }
}

export default new EscolaController()
