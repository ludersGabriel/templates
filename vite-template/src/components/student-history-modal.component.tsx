import { AlunoMatr } from '@/types/alunos'
import Modal from './modal.component'

type Props = {
  matrs: AlunoMatr[]
  onClose: () => void
}

export default function StudentHistoryModal({
  matrs,
  onClose,
}: Props) {
  return (
    <Modal
      onClose={onClose}
      title={`Matriculas de ${matrs[0].NOME_ALUNO} em ${matrs[0].COD_ATIV_CURRIC}`}
    >
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Ano</th>
            <th>Período</th>
            <th>Nota</th>
            <th>Frequencia</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {matrs.map((mtr) => (
            <tr
              key={
                mtr.COD_ATIV_CURRIC + mtr.ANO + mtr.PERIODO + 'modal'
              }
            >
              <td>{mtr.COD_ATIV_CURRIC}</td>
              <td>{mtr.NOME_ATIV_CURRIC}</td>
              <td>{mtr.ANO}</td>
              <td>{mtr.PERIODO}</td>
              <td>{mtr.MEDIA_FINAL}</td>
              <td>{mtr.FREQUENCIA}</td>
              <td>{mtr.SITUACAO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  )
}
