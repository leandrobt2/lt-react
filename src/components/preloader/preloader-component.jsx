import React from "react";

class Preloader extends React.Component {
    render() {
        return (
            <div className="spinner-wrapper">
                <div className="bubblingG">
                    <span id="bubblingG_1"></span>
                    <span id="bubblingG_2"></span>
                    <span id="bubblingG_3"></span>
                </div>
            </div>
        )
    }
}

export default Preloader;