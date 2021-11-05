import {API} from "../../api"

export const getStaticPaths = async () => {
  const res = await fetch(`${API}/especialidades`);
  const data = await res.json()
  const detalle = data.detalle

  const paths = detalle.map (algo => {
      return {
          params : { id: algo.id.toString() }
      }
  })

  return {
      paths,
      fallback: false
  }
} 

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${API}/especialidades/${id}`);  
  const data = await res.json()
  const detalle = data.detalle[0]

    return {
        props : { algo : detalle }
    }
} 


function Details({ algo }) {
    return (
        <div className="text-5xl">
            {algo.especialidad}
        </div>
    )
}

export default Details
