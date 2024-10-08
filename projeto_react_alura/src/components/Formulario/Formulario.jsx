import React,{useState} from 'react'
import './formulario.css';
import { CampoTexto } from '../CampoTexto/CampoTexto';

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const[time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({nome, cargo, imagem, time});
    }
  return (
    <div className='divFormulario'>
        <h1 className='tituloFormulario'>Preencha os dados para criar o card de colaborador</h1>
        <form onSubmit={handleSubmit}>
            <CampoTexto
                label="Nome"
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />
            <CampoTexto
                label="Cargo"
                type="text"
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Digite seu cargo"
            />
            <CampoTexto
                label="Imagem"
                type="text"
                id="imagem"
                placeholder="Digite o endereço da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
            />
            <div>
                <label htmlFor="time">Time:</label>
                <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Time A">Time A</option>
                    <option value="Time B">Time B</option>
                    <option value="Time C">Time C</option>
                </select>
            </div>
            <button type="submit" className='buttonFormulario'>Criar card</button>
        </form>
    </div>
  )
}
