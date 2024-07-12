import { alunosByMatr, matrByCode } from '@/dataLoader'
import { useMemo } from 'react'
import StudentCell, { Explanations } from './student-cell.component'
import { disciplinas2011, disciplinaTable } from '@/types/disciplina'
import Tooltip from './tooltip.component'

type Props = {
  grr: string
}

// 1º 	     2º	    3º 	     4º 	   5º 	   6º 	  7º 	    8º
// CI068 	CI210 	CI212 	CI215 	CI162 	CI163 	CI221 	OPT
// CI055 	CI056 	CI057 	CI062 	CI065 	CI165 	CI211 	OPT
// CM046 	CI067 	CI064 	CE003 	CI059 	CI209 	OPT 	OPT
// CM045 	CM005 	CI237 	CI058 	CI061 	CI218 	OPT 	OPT
// CM201 	CM202 	CI166 	CI164 	SA214 	CI220 	TG I 	TG II

export default function StudentTable({ grr }: Props) {
  const mtrAluno = useMemo(() => matrByCode[grr], [grr])

  const codes = mtrAluno ? Object.keys(mtrAluno) : []

  const opt = codes
    .filter((code) =>
      disciplinas2011.opt.find((opt) => opt.cod === code)
    )
    .map((code) => mtrAluno[code])
    .sort((a, b) => {
      const lastA = a[a.length - 1]
      const lastB = b[b.length - 1]

      return parseInt(lastA.ANO) - parseInt(lastB.ANO)
    })

  const tgs = codes
    .filter((code) =>
      disciplinas2011.tg.find((tg) => tg.cod === code)
    )
    .map((code) => mtrAluno[code])
    .sort((a) => {
      if (a[0].NOME_ATIV_CURRIC.search('I') !== -1) return -1

      return 1
    })

  const eqvs = alunosByMatr[grr]?.filter(
    (matr) => matr.SITUACAO.search('Equivalência') !== -1
  )

  console.log(eqvs)

  return (
    <>
      <p>
        Aluno:{' '}
        {codes.length
          ? mtrAluno[codes[0]][0].NOME_ALUNO
          : 'Aluno não encontrado'}
      </p>
      <table>
        <thead>
          <tr>
            <th colSpan={8}>Períodos semestrais do curso</th>
          </tr>
          <tr>
            <th colSpan={3}>Formação básica</th>
            <th colSpan={5}>Formação profissional</th>
          </tr>
          <tr>
            <th>1º</th>
            <th>2º</th>
            <th>3º</th>
            <th>4º</th>
            <th>5º</th>
            <th>6º</th>
            <th>7º</th>
            <th>8º</th>
          </tr>
        </thead>
        <tbody>
          {disciplinaTable.map((disciplinas, i) => (
            <tr key={i}>
              {disciplinas.map((disciplina, j) => {
                if (
                  !disciplina ||
                  !mtrAluno ||
                  (disciplina?.cod.search('TG') !== -1 &&
                    !tgs.length) ||
                  (disciplina?.cod === 'OPT' && !opt.length)
                )
                  return (
                    <td key={i + j}>
                      <Tooltip text={disciplina?.name ?? ''}>
                        {disciplina?.cod}
                      </Tooltip>
                    </td>
                  )

                if (disciplina?.cod === 'TG I') {
                  const tg = tgs[0]

                  if (tg[0].NOME_ATIV_CURRIC.search('II') !== -1)
                    return (
                      <td key={i + j}>
                        <Tooltip text={disciplina?.name ?? ''}>
                          {disciplina?.cod}
                        </Tooltip>
                      </td>
                    )

                  return (
                    <td key={i + j}>
                      <StudentCell mtrs={tg} />
                    </td>
                  )
                }

                if (disciplina?.cod === 'TG II') {
                  const tg = tgs.length > 1 ? tgs[1] : tgs[0]

                  return (
                    <td key={i + j}>
                      <StudentCell mtrs={tg} />
                    </td>
                  )
                }

                if (disciplina?.cod === 'OPT') {
                  if (
                    !opt.length ||
                    (opt.length <= 2 && (i < 2 || j > 6))
                  )
                    return (
                      <td key={i + j}>
                        <Tooltip text={disciplina?.name ?? ''}>
                          {disciplina?.cod}
                        </Tooltip>
                      </td>
                    )

                  return (
                    <td key={i + j}>
                      <StudentCell mtrs={opt.pop()!} />
                    </td>
                  )
                }

                return (
                  <td key={i + j}>
                    {!mtrAluno[disciplina?.cod] ? (
                      <>
                        <Tooltip text={disciplina?.name ?? ''}>
                          {disciplina?.cod}
                        </Tooltip>
                      </>
                    ) : (
                      <StudentCell mtrs={mtrAluno[disciplina.cod]} />
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <Explanations />
    </>
  )
}
