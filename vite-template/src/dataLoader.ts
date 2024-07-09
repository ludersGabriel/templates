import { ALUNO } from 'types/alunos'
import { xml2json } from 'xml-js'

let alunosData: ALUNO[] = []

export async function loadAlunos(): Promise<void> {
  const response = await fetch('/alunos.xml')
  const xmlText = await response.text()
  alunosData = JSON.parse(
    xml2json(xmlText, { compact: true, spaces: 4 })
  ).ALUNOS_CURSO.ALUNO as ALUNO[]
}

await loadAlunos()

function getAlunos(): ALUNO[] {
  return alunosData
}

export { getAlunos }
