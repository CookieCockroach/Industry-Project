import React from "react";
//import { useHistory } from "react-router-dom";
//import '../../components/days.scss'
import Days from '../../assets/data/Tracker.json'
import Day from "../../components/day";

const Tracker = () => {

    // const history = useHistory();
    // const goToHomePage = () => {
    //     history.push("/");
    // };

    return (
        <div>
            <h1>Wealthsimple</h1>
            {Days.map((day) => (
                <Day key={day.id} day={day} />
            ))}
            <h2>Going strong !!</h2>
            <button>Exit</button>
        </div>
    );
};
export default Tracker;