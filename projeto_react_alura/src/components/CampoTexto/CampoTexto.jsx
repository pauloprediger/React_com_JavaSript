import './CampoTexto.css'

export const CampoTexto = ({label, type, id, value, onChange, placeholder}) => {
  return (
    <div className='campo-texto'>
        <label htmlFor={id}> {label}:</label>
        <input
            type= {type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder = {placeholder}
        />
    </div>
  )
}
