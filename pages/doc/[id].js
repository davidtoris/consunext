import { useEffect, useState } from 'react';
import {API} from "../../api"
import axios from 'axios';
import { useRouter } from 'next/router'
import qs from 'qs';
import Link from 'next/link'

const Item = () => {

    
    const [speciality, setSpeciality] = useState({})
    const [deleted, setDeleted] = useState(false)
    const [created, setCreated] = useState({})
    const router = useRouter()
    const { id } = router.query
    
    
    
    useEffect(() => {    
        
        const getSpecialities = async ()=> {
            
            // await axios.get(`${API}/especialidades/${id}`)
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then( resp => {  
                
                console.log(resp);
                console.log(id);
                console.log("antes")
                // setSpeciality(res.data.detalle[0]);
              })
              .catch( err => {
                console.log("NO se pudo",err);
              })
        }

        getSpecialities()
        
      }, [id])
    
    console.log(id)
    console.log("despues")

      
      const handleChange = e => {
        setCreated({
            ...created,
            [e.target.name] : e.target.value
        })
      }
      

      const handleCreate = async (e)  => {
        e.preventDefault();
        
        const url = `${API}/especialidades/${id}`;

        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(created),
            url,
          };
          const resp = await axios(options);
          console.log(resp)
      }

      const handleDelete = () => {
        axios.delete(`${API}/especialidades/${id}`)
            .then(function () {
                setDeleted(true)
            })
            .catch(function (error) {
                console.log(error);
            })
      }

      

    return (

        <>
        { id ? (
        <div>
        <h1 className="text-4xl">{speciality.especialidad}</h1>
        <h1 className="text-4xl" onClick={handleDelete}>Borrar</h1>
        
        
        {deleted ? "Se ha borrado" : "" }
        <form>
            <input 
                name="especialidad" 
                onChange={handleChange}
                type="text"
                className="bg-gray-300"
            />
            <input 
                name="especialidad_ruta" 
                onChange={handleChange}
                type="text"
                className="bg-gray-300"
            />
            <input
                type="submit"
                onClick={handleCreate}
            />
        </form>
        <Link href="/especialidades">
            <a>Regresar</a>
        </Link>

        </div>

        ) : "Cargando...."}
        
        </>

    )
}

export default Item