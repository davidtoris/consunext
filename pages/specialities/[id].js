import {API} from "../../api"


export const getServerSideProps = async () => {
  const res = await fetch(`${API}/especialidades/1`);
  const data = await res.json()
  const detalle = data.detalle
  return { props : { detalle } }
} 


function Details({ detalle }) {

    console.log(detalle)
    return (
        // <h1>hola</h1>
        <div className="text-5xl">
            {detalle.map( (item, index) => (
                
                <div key={index}>{item.especialidad}</div>
            ))}
            
        </div>
    )
}

export default Details
