import { useEffect, useState } from 'react';
import {API} from "../../api"
import axios from 'axios';
import { useRouter } from 'next/router'
import qs from 'qs';

const Item = () => {

    const router = useRouter()
    const { slug } = router.query

    const [speciality, setSpeciality] = useState({})
    const [deleted, setDeleted] = useState(false)
    const [created, setCreated] = useState({})
    
    useEffect(() => {    
        axios.get(`${API}/especialidades/${slug}`)
          .then(function (response) {
            
            console.log(response.data.detalle[0]);
            setSpeciality(response.data.detalle[0]);
          })
          .catch(function (error) {
            console.log(error);
          })
      }, [slug])

      
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

        
        </>
    )
}

export default Item