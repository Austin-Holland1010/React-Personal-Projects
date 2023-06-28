import React from "react";

export default function BoxComp(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
    return (
        <div>
            <div style={styles} className="box" key={props.id}></div>
        </div>
    )
}