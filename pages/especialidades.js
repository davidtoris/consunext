import { useEffect, useState } from 'react';
import {API} from "../api"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Especialities = () => {

  useEffect(() => {    
    axios.get(`${API}/especialidades`)
      .then(function (response) {
        
        console.log(response.data.detalle);
        setSpecialities(response.data.detalle);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const [specialities, setSpecialities] = useState([])

  console.log(API);
  const router = useRouter();
  
  
  return (
    <>
    

    <div className="bg-gray-50">
      <div className="text-center">
        <div className="bg-blue-400">textos</div> 
      </div>
      <div className="container mx-auto flex">
        <div className="grid grid-cols-4 gap-10">
            <ul>         
         {
             specialities.map(algo => (
                 <li onClick={ () => router.push(`especialidades/${algo.id}`)} key={algo.id}>
                     
                     {algo.id}. {algo.especialidad}
                </li>
             ))
         }
            </ul>

        </div>
      </div>
    </div>
  </>
  )
}

export default Especialities