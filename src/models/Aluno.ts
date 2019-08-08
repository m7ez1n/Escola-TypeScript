import { Schema, model, Document } from 'mongoose'

interface AlunoInterface extends Document {
  name: string
  nascimento: Date
  responsavel: string
  endereco: string
  telefone?: string
  observacoes?: string
}

const AlunoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nascimento: {
    type: Date,
    required: true
  },
  responsavel: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  telefone: String,
  observacoes: String
}, {
  timestamps: true
})

export default model<AlunoInterface>('Aluno', AlunoSchema)
