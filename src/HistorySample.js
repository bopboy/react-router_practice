import React, { useEffect } from "react";

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
    };
    const goHome = () => {
        history.push();
    }
    const goReplace = () => {
        history.replace();
    }
    useEffect(() => {
        console.log(history);
        const unblock = history.block('really?');
        return () => { unblock(); }
    }, [history]);
    return (
        <div>
            <button onClick={goBack}>Back</button>
            <button onClick={goHome}>Home</button>
            <button onClick={goReplace}>Home (replace)</button>
        </div>
    );
}

export default HistorySample;
