import React from 'react';
import $ from 'jquery';
//import GoogleMapsLoader from "google-maps";

class ContactUsComponent extends React.Component {

    // componentWillMount() {
    //     GoogleMapsLoader.LANGUAGE = 'pt';
    //     GoogleMapsLoader.REGION = 'BR';
    // };

    render() {
        return (
            // <!-- Start: Contact Us Area, "#SECTION-11" -->
            <section className="contact-us" id="contactus">
                <div className="container">
                    <div className="row contact-us-body">

                        <div className="contact-us-left col-md-4 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">

                            <h2>Venue info</h2>
                            <p><span className="bold">Address:</span> Eventer, one caspian point, pierhead street cardiff waterside, cf10 4dq</p>
                            <p><span className="bold">Contact: </span><a href="callto:+8801777272322">+880 177 727 2322</a></p>
                            <p><span className="bold">Mail: </span><a href="mailto:as@deviserweb.com">as@deviserweb.com</a></p>

                            {/* <!-- Social Icon Goes Here  --> */}
                            <div className="social-icon">
                                <p><span className="bold">Find Us On</span></p>
                                <ul className="nav navbar-left">
                                    <li><a href="#"> <i className="fa facebook fa-facebook"></i> </a></li>
                                    <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li>
                                    <li><a href="#"> <i className="fa youtube fa-youtube"></i> </a></li>
                                    <li><a href="#"> <i className="fa skype fa-skype"></i> </a></li>
                                    <li><a href="#"> <i className="fa rss fa-rss "></i> </a></li>
                                </ul>
                            </div>

                        </div>
                        {/* <!-- End: .contact-us-left .col-md-4  --> */}

                        {/* <!-- Start: Google Map Area, "Part-1-Up" "map" --> */}
                        <div className="contact-us-right col-md-offset-1 col-md-7 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <div className="row">
                                <div className="map" id="map">

                                </div>
                            </div>
                        </div>
                        {/* <!-- End: Google Map Area, "map" --> */}

                    </div>
                    {/* <!-- End: .row .contact-us-body  --> */}
                </div>
                {/* <!--  End: .container  --> */}
            </section>
            //  <!-- End: Contact Us Area, "#SECTION-11" -->
        )
    }

    componentDidMount() {
        var mapHeight = $('.contact-us-body').height();
        $(".map").css('min-height', mapHeight);

        var myLocation = new google.maps.LatLng(24.892467, 91.87048);

        var draggableValue;
        if (window.innerWidth <= 768) {
            draggableValue = false;   /*This option is used for disabling drag.*/
        }
        else {
            draggableValue = true;   /*This option is used for disabling drag.*/
        }


        var mapOptions = {
            center: myLocation,
            zoom: 16,
            mapTypeControl: true,  /*This option will hide map type.*/
            draggable: draggableValue,
            scaleControl: false,   /*This option is used for disable zoom by scale.*/
            scrollwheel: false,   /*This option is used for disable zoom on mouse.*/
            navigationControl: true,   /**/

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "stylers": [{ "saturation": -100 }] }],

            streetViewControl: true   /**/
        };

        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Peggy Guggenheim Collection"
        });

        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        marker.setMap(map);
    }
}

export default ContactUsComponent;