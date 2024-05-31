import React, { useEffect, useState } from "react";
import Day from "../../components/day";
import "./Tracker.scss";
import axios from "axios";

const Tracker = () => {

const [days, setDays] = useState()

async function getData() {
    const response = await axios.get("/api/days");
    console.log(response.data)
    setDays(response.data)
}

useEffect(() => {
    getData()
}, [])

if(!days){
    return <div>Loading...</div>
}

    return (
        <div>
            <h1>Wealthsimple</h1>
            {days.map((day) => (
                <Day key={day.id} day={day} />
            ))}
            <h2>"Financial success is not about luck; it's about managing risks, making informed decisions, and persistently pursuing your goals."</h2>
            <button>Exit</button>
        </div>
    );
};
export default Tracker;