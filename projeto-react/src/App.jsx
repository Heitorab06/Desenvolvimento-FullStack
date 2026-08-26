import { useState } from 'react'
import './App.css'

function app(){
  const[nome, setNome] = useState("");
  const[peso, setPeso] = useState("");
  const[altura, setAltura] = useState("");
  const[resultado, setResultado] = useState(null);
  const[erro, setErro]=useState("");

  function classificarIMC(imc){
    if(imc<18.5) return "Abaixo do peso";
    else if(imc<25) return "Peso ideal";
    else if(imc<30) return "Sobrepeso";
    else if(imc<35) return "Obesidade 1";
    else if(imc<40) return "Obesidade 2";
    else return "Obesidade 3";
    
  }

  function calcular_IMC(evento){
    const pesoConvertido =Number(peso.replace(",","."))
    const alturaConvertido =Number(altura.replace(",","."))

    if(nome.trim() === "" || pesoConvertido<=0 || alturaConvertido<=0){
      setErro("Preencha com valores válidos")
      setResultado("null")
    }

    setResultado({valor: (pesoConvertido/(alturaConvertido**2)).toFixed(2), classificacao: classificarIMC((pesoConvertido/(alturaConvertido**2)).toFixed(2))})
  }

  function limpaForm(){
    setNome("")
    setPeso("")
    setAltura("")
    setResultado(null)
    setErro("")
  }
  return(
    <main>
      <h1>Calculadora de IMC</h1>
      <p className='Introdução'>Informe seu peso e altura para calcular o IMC</p>
      <form onSubmit={calcular_IMC}>
        <div className='Campo'>
          <input id='nome' type="text" placeholder='Digite o seu nome' value={nome} onChange={(evento)=> setNome(evento.target.value)}/>
          <input id='peso' type="text" inputMode='decimal' placeholder='Digite seu peso' value={peso} onChange={(evento)=> setPeso(evento.target.value)}/>
          <input id='altura' type="text" inputMode='decimal' placeholder='Digite sua altura' value={altura} onChange={(evento)=> setAltura(evento.target.value)}/>
        </div>
        <div className='button'>
          <button type='submit'> Calcular IMC</button>
          <br />
          <button type='button'>Limpar</button>
        </div>
        {erro && <p className='msgerro'>{erro}</p>}
        {resultado && (
          <section className='resultado'>
            <h2>Resultado</h2>
            <p>Olá, <strong>{nome}</strong></p>
            <br />
            <p>Seu imc é <strong>{resultado.valor}</strong></p>
          </section>
        )}
      </form>
    </main>
  )
  
}
export default app