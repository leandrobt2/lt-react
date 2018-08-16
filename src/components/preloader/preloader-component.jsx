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


        var leftHeight = $('.about-our-event-left').height();
        var rightHeight = $('.about-our-event-right').height();

        if (leftHeight >= rightHeight) {
            $(".background-left").css('min-height', leftHeight);
            $(".background-right").css('min-height', leftHeight);
            $(".background-right-overlay-color").css('min-height', leftHeight);
        } else {
            $(".background-left").css('min-height', rightHeight);
            $(".background-right").css('min-height', rightHeight);
            $(".background-right-overlay-color").css('min-height', rightHeight);
        }
    }
}

export default Preloader;