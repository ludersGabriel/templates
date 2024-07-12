import { AlunoMatr } from '@/types/alunos'
import React, { useMemo, useState } from 'react'
import StudentHistoryModal from './student-history-modal.component'
import Tooltip from './tooltip.component'
import StudentMtrModal from './student-mtr-modal'

export default function StudentCell({
  mtrs: mtrsInput,
}: {
  mtrs: AlunoMatr[]
}) {
  const [openHistory, setOpenHistory] = useState<boolean>(false)
  const [openMtrModal, setOpenMtrModal] = useState<boolean>(false)
  const mtrs = useMemo(
    () =>
      mtrsInput.sort((a, b) => {
        if (parseInt(a.ANO) !== parseInt(b.ANO))
          return parseInt(a.ANO) - parseInt(b.ANO)

        if (a.PERIODO.search('1') !== -1) return -1

        return 1
      }),
    [mtrsInput]
  )

  const last = mtrs[mtrs.length - 1]

  const toggleHistory = () => setOpenHistory(!openHistory)

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleHistory()
  }

  const toggleMtrModal = () => setOpenMtrModal(!openMtrModal)

  const handleLeftClick = () => {
    toggleMtrModal()
  }

  return (
    <>
      <div
        className='cell'
        style={{ backgroundColor: setColor(last) }}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
      >
        <Tooltip text={last.NOME_ATIV_CURRIC}>
          {last.COD_ATIV_CURRIC}
        </Tooltip>
      </div>
      {openHistory && (
        <StudentHistoryModal onClose={toggleHistory} matrs={mtrs} />
      )}
      {openMtrModal && (
        <StudentMtrModal matr={last} onClose={toggleMtrModal} />
      )}
    </>
  )
}

// Cada disciplina deve estar pintada com uma cor indicando a situação da última matrícula do aluno (aprovado em verde, reprovado em vermelho, matriculado em azul, equivalência em amarelo e não cursado em branco).

function setColor(mtr: AlunoMatr) {
  const situacao = mtr.SITUACAO

  if (situacao.search('Aprovado') !== -1) return 'green'
  if (situacao.search('Reprovado') !== -1) return 'red'
  if (situacao.search('Matrícula') !== -1) return 'blue'
  if (situacao.search('Equivalência') !== -1) return 'yellow'
  if (situacao.search('Dispensa') !== -1) return 'purple'
  if (situacao.search('Cancelado') !== -1) return 'gray'
  if (situacao.search('Trancamento') !== -1) return 'orange'

  return 'white'
}

export const Explanations = () => {
  return (
    <div className='explanations'>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'green' }} />
        <span>Aprovado</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'red' }} />
        <span>Reprovado</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'blue' }} />
        <span>Matrícula</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'yellow' }} />
        <span>Equivalência</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'purple' }} />
        <span>Dispensa</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'gray' }} />
        <span>Cancelado</span>
      </div>
      <div className='explanation'>
        <div className='box' style={{ backgroundColor: 'orange' }} />
        <span>Trancamento</span>
      </div>
      <div className='explanation'>
        Observações: usei apenas o calendário de 2011 como
        conversamos. Devido a isso, algumas situações curiosas
        ocorrem, como o caso do ALUNO 0 que ficou reprovado no TG1 e
        cursando o TG2. <br /> Além disso, as matérias com
        equivalência não estão no calendário de 2011, com exceção de
        uma optativa, então modifiquei a situação de CI055 no aluno 0
        para equivalência para que pudesse ser visualizada. <br />{' '}
        Sobre as optativas, como só temos espaço para 6 optativas e
        alguns alunos fizeram 12 para mais, por exemplo, mostrei
        apenas as que davam espaço, tentando fazer uma ordem por ano
        que acabou não dando muito certo. <br /> No mais, adicionei
        algumas outras cores para levar em consideração trancamento,
        dispensa e cancelamento.
      </div>
    </div>
  )
}
