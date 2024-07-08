import React, {useState} from "react";

const TrafficLight = () => {

    const [ red, setRed ] = useState("red");
    const [ yellow, setYellow] = useState('yellow');
    const [ green, setGreen] = useState('green');

    const setLight = (color) => {
        
        setRed("red")
        setYellow("yellow")
        setGreen("green")

        switch (color) {
            case "red" :
                setRed("red selected")
            break
            case "yellow":
                setYellow("yellow selected")
            break
            case "green" :
                setGreen("green selected")
            break
        }
    }

    return (<div className="d-flex justify-content-center">
                <div>
                    <div className="trafficLightTop"></div>
                    <div className="trafficLightContainer">
                        <div className={red} onClick={() => setLight("red")}></div>
                        <div className={yellow} onClick={() => setLight("yellow")}></div>
                        <div className={green} onClick={() => setLight("green")}></div>   
                    </div>        
                </div>
            </div>);
}

export default TrafficLight;