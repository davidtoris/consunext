import {API} from "../../api"
import Link from 'next/link'

export const getServerSideProps = async () => {
  const res = await fetch(`${API}/especialidades/`);  
  const data = await res.json()
  const detalle = data.detalle

  return { props : { detalle } }
} 

function Especialities({ detalle }) {
    console.log(detalle)
    return (
        <div className="text-4xl">
            
            {detalle.map( (item, index) => (
              <Link href={`/especialidades/${item.id}`} key={index}>
                <a > <li >{item.especialidad}</li></a>
              </Link>
            ))}
        </div>
    )
}

export default Especialities
