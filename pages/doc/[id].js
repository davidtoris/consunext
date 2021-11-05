import axios from 'axios';
import { useRouter } from 'next/router'



const Post = () => {
    const router = useRouter()
    const { id } = router.query
    
    const getSpecialities = async ()=> {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( resp => {  
            
            console.log(resp);
            console.log(id);
            console.log("antes")
            // setSpeciality(res.data.detalle[0]);
            })
            .catch( err => {
            console.log("NO se pudo",err);
            })
        }

        getSpecialities()

  return <p>Post: {id}</p>
}

export default Post