import React,{useState} from 'react'
import './formulario.css';

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState(null);
    const [imagem, setImagem] = useState('');
    const[time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDfault();

        console.log({nome, cargo, imagem, time});
    }
  return (
    <div className='divFormulario'>
        <h1 className='tituloFormulario'>Preencha os dados para criar o card de colaborador</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    placeholder='Digite seu nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="cargo">Cargo:</label>
                <input
                    type="text"
                    id="cargo"
                    placeholder='Digite seu cargo'
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="imagem">Imagem:</label>
                <input
                    type="text"
                    id="imagem"
                    placeholder='Digite o endereço da imagem'
                    onChange={(e) => setImagem(e.target.value)}
            />
            </div>
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
