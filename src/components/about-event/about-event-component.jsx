import React from 'react';

class AboutEventComponent extends React.Component {

    render() {
        return (
            <div>
                <section className=" about-our-event" id="aboutEventComponent">
                    {/* <!-- Start: about-our-event, "SECTION-1" --> */}
                    <div className="container">

                        {/* <!-- Start: About Our Event Area  --> */}
                        <div className="row about-our-event-body">

                            {/* <!-- Start: About-Our-Event Left Area  --> */}
                            <div className="about-our-event-left col-md-5 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <div className="about-our-event-left-body">
                                    <h2>ABOUT OUR EVENT</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis atter liberty.</p>
                                </div>
                            </div>
                            {/* <!-- End: About-Our-Event Left Area  --> */}

                            {/* <!-- Start: About-Our-Event Right Area  --> */}
                            <div className="about-our-event-right col-md-offset-1 col-md-6 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <div className="container-fluid">
                                    <div className="row about-our-event-right-body">
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">15</span>
                                            <span className="title">Speakers</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">35</span>
                                            <span className="title">Awards</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">10</span>
                                            <span className="title">Workshops</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1200</span>
                                            <span className="title">Seats</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">100</span>
                                            <span className="title">Podcasts</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">96</span>
                                            <span className="title">Offices</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End: About-Our-Event Right Area  --> */}
                        </div>
                        {/* <!-- End: About Our Event Area  --> */}


                        {/* <!-- Start: About-Our-Event Overlay background Area  --> */}
                        <div className="about-background-image">

                            {/* <!-- About-Our-Event Overlay background Left Area  --> */}
                            <div className="background-left col-sm-12 col-md-6"></div>

                            {/* <!-- About-Our-Event Overlay background Right Area  --> */}
                            <div className="bg-img-3 background-right col-sm-12 col-md-6">
                                <div className="background-right-overlay-color"></div>
                            </div>

                        </div>
                        {/* <!--  about-background-image  --> */}
                    </div>
                    {/* <!-- End: container --> */}
                </section>
                {/* // <!-- End: about-our-event, "SECTION-1" --> */}

                {/* // <!-- Start: our-featured-speaker, "SECTION-2" --> */}
                <section className="our-featured-speaker" id="section-2">
                    <div className="container">

                        <div className="row our-featured-speaker-body">

                            {/* <!-- Start: Our Featured Speaker Left --> */}
                            <div className="our-featured-speaker-left col-md-6 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">

                                {/* <!--  Start: Video Area  --> */}
                                <div className="video">
                                    <iframe src="https://player.vimeo.com/video/71371201?" allowFullScreen></iframe>
                                    {/* <!--  Video Link Goes Here  --> */}
                                </div>
                                {/* <!--  End: Video Area  --> */}

                            </div>
                            {/* <!-- End: Our Featured Speaker Left --> */}


                            {/* <!-- Start: Our Featured Speaker Right --> */}
                            <div className="our-featured-speaker-right col-md-6 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h2>ENVATO BANGLADESH MEETUP</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quohab por cum soluta nobis eleif reen d option congue nihil doming</p>

                                {/* <!-- Start: Button area --> */}
                                <div className="buy-tricket">
                                    <div className="btn-group btn-scroll">
                                        <a href="#section-4" className="btn-fill btn-standard btn btn-cus">Our Speakers</a>
                                        <a href="#section-5" className="btn-border btn-standard btn btn-cus">Price</a>
                                    </div>
                                </div>
                                {/* <!-- End: Button area" --> */}

                            </div>
                            {/* <!-- End: Our Featured Speaker Right --> */}

                        </div>
                        {/* <!-- Start: our-featured-speaker-body  --> */}

                    </div>
                    {/* <!-- End: container  --> */}
                </section>
            </div>
            // <!-- End: our-featured-speaker, "SECTION-2" -->
        )
    }
}

export default AboutEventComponent;