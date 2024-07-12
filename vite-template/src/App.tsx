import { useState } from 'react'
import './App.css'
import StudentTable from './components/student-table.component'

function App() {
  const [grr, setGrr] = useState<string>('GRR00000000')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGrr(e.target.value)
  }

  return (
    <div className='app-container'>
      <header>
        <p>Visualizeitor (T4)</p>
      </header>

      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={onChange}
            type='text'
            placeholder='Matrícula'
            value={grr}
          />
        </form>
        <StudentTable grr={grr} />
      </main>

      <footer>
        <p>Gabriel Lüders - GRR20190172</p>
      </footer>
    </div>
  )
}

export default App
