import React from 'react';
import partner1 from '../../assets/image/partner-1.jpg';
import partner2 from '../../assets/image/partner-2.png';

class PriceComponent extends React.Component {

    render() {
        return (

            <section className="pricing-tables" id="priceId">
                <div className="container">
                    <div className="row pricing-tables-body">

                        <div className="pricing-tables-left col-xs-12 col-sm-8 col-md-8">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="wow fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                        <h3>Just choose a package and join our conference to know about our community more, Its really enjoyable.</h3>
                                    </div>


                                    <ul className="scedule-main nav wow fadeIn animated" data-wow-offset="120" data-wow-duration="1.5s" role="tablist">
                                        <li role="presentation" className="btn-group col-xs-12 col-sm-12 col-md-4 active">
                                            <a className="btn-border btn-standard btn btn-cus" href="#pricing-table-1" aria-controls="pricing-table-1" role="tab" data-toggle="tab">Silver</a>
                                        </li>
                                        <li role="presentation" className="btn-group col-xs-12 col-sm-12 col-md-4">
                                            <a className="btn-border btn-standard btn btn-cus" href="#pricing-table-2" aria-controls="pricing-table-2" role="tab" data-toggle="tab">Gold</a>
                                        </li>
                                        <li role="presentation" className="btn-group col-xs-12 col-sm-12 col-md-4">
                                            <a className="btn-border btn-standard btn btn-cus" href="#pricing-table-3" aria-controls="pricing-table-3" role="tab" data-toggle="tab">Platinum</a>
                                        </li>
                                    </ul>
                                    <div className="wow fadeInDown animated" data-wow-offset="10" data-wow-duration="1.5s">
                                        <p className="hidden-xs hidden-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>

                                        <p className="hidden-xs hidden-sm">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent clarita tem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="tab-content pricing-tables-right col-xs-12 col-sm-4 col-md-4">
                            <div role="tabpanel" className="tab-pane active" id="pricing-table-1">

                                <div className="wow fadeInDown animated" data-wow-delay="0.5s">
                                    <div className="table-single">

                                        <p>
                                            <span className="currency">$</span>
                                            <span className="rate">100</span> <br />
                                            <span className="period">Silver</span>
                                        </p>

                                        <ul>
                                            <li>Seat On The Row</li>
                                            <li>Coffee With Spon Sugar</li>
                                            <li>Colorful Certificate</li>
                                            <li>Chicken Grill With Nann Rooti</li>
                                            <li>Business Class Flight Ticket</li>
                                            <li>Startup Review</li>
                                        </ul>

                                        <div className="btn-group btn-scroll">
                                            <a href="#section-6" className="btn-fill btn-standard btn btn-cus">Register Now</a>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="tab-pane" id="pricing-table-2">

                                <div>
                                    <div className="table-single">

                                        <p>
                                            <span className="currency">$</span>
                                            <span className="rate">200</span> <br />
                                            <span className="period">Silver</span>
                                        </p>
                                        <ul>
                                            <li>Seat On The Row</li>
                                            <li>Coffee With Spon Sugar</li>
                                            <li>Colorful Certificate</li>
                                            <li>Chicken Grill With Nann Rooti</li>
                                            <li>Business Class Flight Ticket</li>
                                            <li>Startup Review</li>
                                        </ul>

                                        <div className="btn-group btn-scroll">
                                            <a href="#section-6" className="btn-fill btn-standard btn btn-cus">Register Now</a>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="tab-pane" id="pricing-table-3">

                                <div>
                                    <div className="table-single">
                                        <p>
                                            <span className="currency">$</span>
                                            <span className="rate">300</span> <br />
                                            <span className="period">Silver</span>
                                        </p>

                                        <ul>
                                            <li>Seat On The Row</li>
                                            <li>Coffee With Spon Sugar</li>
                                            <li>Colorful Certificate</li>
                                            <li>Chicken Grill With Nann Rooti</li>
                                            <li>Business Class Flight Ticket</li>
                                            <li>Startup Review</li>
                                        </ul>

                                        <div className="btn-group btn-scroll">
                                            <a href="#section-6" className="btn-fill btn-standard btn btn-cus">Register Now</a>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PriceComponent;