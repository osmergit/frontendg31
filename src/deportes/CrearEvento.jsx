import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/usuarios/regevento'

export const CompCrearEventos = () => {
   
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha: fecha, equipo1: equipo1, equipo2: equipo2, marcador1: marcador1, marcador2: marcador2, tipoevento:tipoevento })
        navigate('/sheventos')
    }   

    return (
        <div >
           <h3>Creación de  Eventos deportivos</h3>
           <form onSubmit={store}>
                 
                <div>

                <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)} 
                        type="text"
                        className='form-control'
                        placeholder = "Ingrese la fecha año/mes/dia"
                    />    
                     
                                 
                  </div>

                  <div>
                  <input
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)} 
                        type="text"
                        className='form-control'
                        placeholder = "Ingrese el Equipo 1"
                    />    
                             
                 </div>
                 <div>
                 
                    <input 
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)} 
                        type = "text"
                        className='form-control'
                        placeholder = "Ingrese el Equipo 2"
                    />                 
                 </div>

                 <div>
                 
                    <input 
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)} 
                        type = "text"
                        className='form-control'
                        placeholder = "Ingrese el marcador E1"
                    />                 
                 </div>

                 <div>
                 
                 <input 
                     value={marcador2}
                     onChange={ (e)=> setMarcador2(e.target.value)} 
                     type = "text"
                     className='form-control'
                     placeholder = "Ingrese el marcador E2"
                 />                 
              </div>
              <div>
                 
                 <input 
                     value={tipoevento}
                     onChange={ (e)=> setTipoevento(e.target.value)} 
                     type = "text"
                     className='form-control'
                     placeholder = "Ingrese el tipo Evento"
                 />                 
              </div>
                 <button type="submit" className="btn-register">Guardar</button>                  
           </form>
        </div>
    )
}

export default CompCrearEventos;