function CourseContainer({curso}) {
const {nombre} = curso;
    return (
        <div className="shadow-md rounded-lg cursor-pointer">
            
                <div className="bg-blue-900 text-white text-center">horarios</div>
            <div className="p-3">
                <div className="text-gray-700 mt-3">{nombre}</div>
                <div className="text-gray-400 text-sm my-2">M. en I. Pedro S. Valadez Eslava</div>
                <div className="bg-blue-400 w-20 mt-2 text-center rounded-md text-white">Online</div>
            </div>
        </div>
    )
}

export default CourseContainer
