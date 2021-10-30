import { useEffect, useState } from 'react';
import {API} from "../api"
import axios from 'axios';

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
                 <li>
                     <a href={`especialidades/${algo.id}`}>
                     {algo.id}. {algo.especialidad}
                     </a>
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