import React, { useState } from 'react'
import { getAlunos } from './dataLoader'
import { ALUNO } from 'types/alunos'
import './App.css'

function App() {
  const [selectedDisciplina, setSelectedDisciplina] =
    useState<ALUNO | null>(null)

  const data = getAlunos()

  const getColor = (situacao: any) => {
    switch (situacao._text) {
      case 'Aprovado':
        return 'green'
      case 'Reprovado':
        return 'red'
      case 'Matriculado':
        return 'blue'
      case 'Equivalência':
        return 'yellow'
      default:
        return 'white'
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Grade Curricular</h1>
        <input type='text' placeholder='Digite o RA do aluno' />
      </header>
      <div className='grade-curricular'>
        {data &&
          data.map((aluno, index) => (
            <div
              key={index}
              className='disciplina'
              style={{
                backgroundColor: getColor(aluno.SITUACAO_ITEM),
              }}
              onClick={() => setSelectedDisciplina(aluno)}
            >
              {aluno.COD_ATIV_CURRIC._text}
            </div>
          ))}
      </div>
      {selectedDisciplina && (
        <div className='popup'>
          <h2>{selectedDisciplina.NOME_ATIV_CURRIC._text}</h2>
          <p>Código: {selectedDisciplina.COD_ATIV_CURRIC._text}</p>
          <p>
            Última vez cursada: {selectedDisciplina.ANO._text}/
            {selectedDisciplina.PERIODO._text}
          </p>
          <p>Nota: {selectedDisciplina.MEDIA_FINAL._text}</p>
          <p>Frequência: {selectedDisciplina.FREQUENCIA._text}</p>
          <button onClick={() => setSelectedDisciplina(null)}>
            Fechar
          </button>
        </div>
      )}
    </div>
  )
}

export default App
