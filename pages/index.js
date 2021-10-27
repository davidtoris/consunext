import { useEffect, useState } from 'react';
import Head from 'next/head'
import CourseContainer from '../components/layout/CourseContainer'
import axios from 'axios';
import {API} from "../api"
import Link from 'next/link'

export default function Home() {

  useEffect(() => {    
    axios.get(`${API}/cursos/`)
      .then(function (response) {
        setCursos(response.data.detalle);
        console.log(response.data.detalle);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const [cursos, setCursos] = useState([])


  
  return (
    <>
    <Head>
      <title>Ddemo</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    </Head>

    <div className="bg-gray-50">
      <div className="text-center">
        <div className="bg-blue-400">textos</div> 
      </div>
      <div className="container mx-auto flex">

        <Link href="/specialities"><a>Especialidades</a></Link>
        <div className="grid grid-cols-4 gap-10">
         {
           cursos.map(curso => (
             
             <CourseContainer
                key={curso.nombre}
               curso = {curso}
             />
           ))
         } 
        </div>
      </div>
    </div>
  </>
  )
}
