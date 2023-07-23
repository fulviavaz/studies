import { useState } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { ITarefa } from '../../types/tarefa'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>()
  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo))
  }
  return (
      <div className={style.cronometro}>
      <p className={style.titulo}>Escola um card e inicie o cronômetro</p>
      Tempo: {tempo}
          <div className={style.relogioWrapper}>
              <Relogio />
          </div>
          <Botao>
              Começar!
          </Botao>
    </div>
  )
}
