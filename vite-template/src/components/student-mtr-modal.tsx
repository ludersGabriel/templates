import { AlunoMatr } from '@/types/alunos'
import Modal from './modal.component'

type Props = {
  matr: AlunoMatr
  onClose: () => void
}

export default function StudentMtrModal({ matr, onClose }: Props) {
  return (
    <Modal
      title={`Última matrícula de ${matr.NOME_ALUNO} em ${matr.COD_ATIV_CURRIC}`}
      onClose={onClose}
    >
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>{matr.NOME_ALUNO}</td>
          </tr>
          <tr>
            <td>Curso</td>
            <td>{matr.NOME_CURSO}</td>
          </tr>
          <tr>
            <td>Código</td>
            <td>{matr.COD_ATIV_CURRIC}</td>
          </tr>
          <tr>
            <td>Nome</td>
            <td>{matr.NOME_ATIV_CURRIC}</td>
          </tr>
          <tr>
            <td>Ano</td>
            <td>{matr.ANO}</td>
          </tr>
          <tr>
            <td>Período</td>
            <td>{matr.PERIODO}</td>
          </tr>
          <tr>
            <td>Nota</td>
            <td>{matr.MEDIA_FINAL}</td>
          </tr>
          <tr>
            <td>Frequência</td>
            <td>{matr.FREQUENCIA}</td>
          </tr>
          <tr>
            <td>Situação</td>
            <td>{matr.SITUACAO}</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  )
}
