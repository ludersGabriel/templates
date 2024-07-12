import xml2js from 'xml2js'
import { AlunoMatr } from './types/alunos'

let alunosData: AlunoMatr[] = []
export let alunosByMatr: { [key: string]: AlunoMatr[] } = {}

export async function loadAlunos(): Promise<void> {
  try {
    const parser = new xml2js.Parser({
      explicitArray: false,
      explicitRoot: false,
      mergeAttrs: true,
    })

    const response = await fetch('/alunos.xml')
    const xmlText = await response.text()
    const result = await parser.parseStringPromise(xmlText)

    alunosData = result.ALUNO as AlunoMatr[]
    alunosByMatr = groupByMatrAluno(alunosData)
  } catch (e) {
    console.error('Error loading alunos:', e)
  }
}

function groupByMatrAluno(alunos: AlunoMatr[]): {
  [key: string]: AlunoMatr[]
} {
  return alunos.reduce(
    (acc, aluno) => {
      const { MATR_ALUNO } = aluno
      if (!acc[MATR_ALUNO]) {
        acc[MATR_ALUNO] = []
      }
      acc[MATR_ALUNO].push(aluno)
      return acc
    },
    {} as { [key: string]: AlunoMatr[] }
  )
}

function groupByCode(alunoMatr: AlunoMatr[]): {
  [key: string]: AlunoMatr[]
} {
  return alunoMatr.reduce(
    (acc, aluno) => {
      const { COD_ATIV_CURRIC } = aluno
      if (!acc[COD_ATIV_CURRIC]) {
        acc[COD_ATIV_CURRIC] = []
      }
      acc[COD_ATIV_CURRIC].push(aluno)
      return acc
    },
    {} as { [key: string]: AlunoMatr[] }
  )
}

await loadAlunos()

export const matrByCode: {
  [key: string]: { [key: string]: AlunoMatr[] }
} = {}

for (const matr in alunosByMatr) {
  matrByCode[matr] = groupByCode(alunosByMatr[matr])
}

console.log(alunosByMatr)
