import React from "react";

/*
export default function BoxComp(props) {
    const [on, setOn] = React.useState(props.on)
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     
    function onToggle() {
       setOn(prevOn => !prevOn)
    }
    
    return (
        <div>
            <div onClick={onToggle} style={styles} className="box" key={props.id}></div>
        </div>
    )
}
*/

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={() => props.toggle()}
        >
        </div>
    )
}