import React, { useState } from 'react'
import style from './Lista.module.scss'
import Item from './Item'

export default function Lista() {
  const [tarefas, setTarefas] = useState( [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Angular',
      tempo: '01:00:00'
    },
    {
      tarefa: 'TypeScript',
      tempo: '00:30:00'
    }
  ] )
  return (
      <aside className={style.listaTarefas}>
      <h2 onClick={() => {          
          setTarefas([...tarefas, { tarefa: "estudar estado", tempo: "00:30:00"}])
          }}>
              Estudos do dia
          </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}            
        </ul>
    </aside>
  )
}
