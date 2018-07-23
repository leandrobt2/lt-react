import React from "react";
import $ from "jquery";

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

    componentDidMount() {
        $(".bubblingG").fadeOut();
        $(".spinner-wrapper").delay(400).fadeOut("slow");
    }
}

export default Preloader;