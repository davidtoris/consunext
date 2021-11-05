export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json()
    
    console.log(res)
    console.log(data)

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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id );
    const data = await res.json()

    return {
        props : { algo : data }
    }
} 



function Details({ algo }) {
    return (
        <div className="text-5xl">
            {algo.title}
        </div>
    )
}

export default Details
