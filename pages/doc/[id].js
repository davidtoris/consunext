import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {API} from "../../api"

const Post = () => {

    const [speciality, setSpeciality] = useState({})
    const router = useRouter()
    const { id } = router.query
    
    useEffect(() => {    
        const getSpecialities = async ()=> {
            console.log("id de funcion" + id)
            const res = await fetch(`${API}/especialidades/${id}`);  
            const data = await res.json()
            const detalle = data.detalle[0]
            console.log(detalle)
            setSpeciality(data.detalle[0]);
        }
        
        if(id){
            console.log("mi id es: " + id)
            getSpecialities()
        }
    }, [id])
    
    
        

  return (
    <>
    { id ? (
    <div>
        <h1 className="text-4xl">{speciality.especialidad}</h1>
        
        <Link href="/especialidades">
            <a>Regresar</a>
        </Link>

    </div>

    ) : "Cargando...."}
    
    </>
  )
}

export default Post