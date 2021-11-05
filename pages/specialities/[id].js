import {API} from "../../api"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json()

    const paths = data.map (algo => {
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
    const res = await fetch("http://localhost:8080/apirest-consufarma/especialidades/" + id)
    const data = await res.json()
    const item = data.detalle[0]


    return {
        props : { algo : item }
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
