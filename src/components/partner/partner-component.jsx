import React from 'react';
import partner1 from '../../assets/image/partner-1.jpg';
import partner2 from '../../assets/image/partner-2.png';

class PartnerComponent extends React.Component {

    render() {
        return (
            <section className="sponsore" id="section-7" >
                <div className="container">
                    <div className="row sponsore-body col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 ">

                        <div className="wow fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <h2>PARCEIROS</h2>
                        </div>


                        <div className="wow fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner1} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner2} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner1} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner2} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner1} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner2} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner1} alt="Sponsors" className="img-responsive" />
                            </div>
                            <div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
                                <img src={partner2} alt="Sponsors" className="img-responsive" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        )
    }
}

export default PartnerComponent;