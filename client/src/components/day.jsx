import '../components/days.scss'
export default function Day({day}){
    return(
        <div className="days">
            <h2>{`Day${day.id}`}</h2>
            <p>{day.result}</p>
        </div>
    )
}