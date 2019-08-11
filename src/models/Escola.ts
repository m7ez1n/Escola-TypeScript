import { Schema, model, Document } from 'mongoose'

interface EscolaInterface extends Document {
  name: string,
  alunos: Schema.Types.ObjectId
}

const EscolaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  alunos: {
    type: [Schema.Types.ObjectId],
    ref: 'Aluno',
    required: true
  }
})

export default model<EscolaInterface>('Escola', EscolaSchema)
