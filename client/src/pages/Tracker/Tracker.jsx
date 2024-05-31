import React from "react";
import Image from '../../assets/wealth.png'
import '../Tracker/Tracker.scss'
import Days from '../../assets/data/Tracker.json'
import Day from "../../components/day";

// const Tracker = () => {

function Tracker(){

    return (
        <div className="tracker">
            <img src={Image} alt="Wealth Logo"></img>
               <div className="tracker__days">
                  {Days.map((day) => (
                  <Day key={day.id} day={day} />
                  ))}
                </div>
            <h2 className="tracker__motive">Going strong !!</h2>
            <div className="tracker__align">
            <button>Exit</button>     
            </div>     
          </div>
    );
};
export default Tracker;