
import { useRouter } from 'next/router'
import {API} from "../../api"

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    
    const getSpecialities = async ()=> {

        const res = await fetch(`${API}/especialidades/${id}`);  
        const data = await res.json()
        const detalle = data.detalle[0]

        

        console.log(detalle)
        }

        getSpecialities()

  return <p>Post: {id}</p>
}

export default Post