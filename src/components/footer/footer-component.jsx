import React from 'react';

class FooterComponent extends React.Component {

    render() {
        return (
            <footer className="footer">
                {/* <!-- Start: Footer Area  --> */}
                <div className="container">
                    <div className="row footer-body btn-scroll">

                        {/* <!-- Your Icon Goes Here  --> */}
                        <div className="logo col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <a href="#" ><img src="../../../all-file/images/logo.png" alt="" className="img-responsive" /></a>
                        </div>

                        {/* <!--  Scroll Top  --> */}
                        <div className="top-buttom col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <a href="#header" className="btn-standard btn btn-top"><span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span></a>
                        </div>

                    </div>
                    {/* <!-- End: .row .footer-body .btn-scroll  --> */}
                </div>
                {/* <!-- End: .container  --> */}
            </footer>
        )
    }
}

export default FooterComponent;