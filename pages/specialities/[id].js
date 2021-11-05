import {API} from "../../api"

export const getServerSideProps = async (context) => {

  const id = context.params.id;
  const res = await fetch(`${API}/especialidades/${id}`);  
  const data = await res.json()
  const detalle = data.detalle

//   const res = await fetch(`${API}/especialidades/${context}`);
//   const data = await res.json()
//   const detalle = data.detalle
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
