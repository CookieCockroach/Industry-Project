export default function Day({day}){
    return(
        <div>
            <h1>{`Day${day.id}`}</h1>
            <p>{day.result}</p>
        </div>
    )
}