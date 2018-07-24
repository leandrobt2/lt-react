import React from 'react';
import $ from 'jquery';

class ContactUsComponent extends React.Component {

    render() {
        return (
            // <!-- Start: Contact Us Area, "#SECTION-11" -->
            <section className="contact-us" id="section-11">
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

    componentDidMount(){
        var mapHeight = $('.contact-us-body').height();
        $(".map").css('min-height', mapHeight);
    }
}

export default ContactUsComponent;