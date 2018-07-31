import React from 'react';

class MessageComponent extends React.Component {

    render() {
        return (
            <section className="twitter-background twitter-posts" id="section-10">
                <div className="fix overlay-color">
                    <div className="container">

                        <div className="row twitter-posts-body col-md-offset-1 col-md-10 wow fadeIn animated" data-wow-offset="120" data-wow-duration="1.5s">

                            <div className="twitter-logo">
                                <i className="fa twitter fa-twitter"></i>
                            </div>

                            <div id="sync" className="owl-carousel">

                                <div className="item row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <h3>Support forum is up and running <a href="http://deviserweb.com" target="_blank">@DeviserWeb</a>  just export all content to a .variant file and import it into your purchased version. Instructions in download. Hope to help you soon :)</h3>
                                    </div>
                                </div>

                            </div>
                            <p>Abour 4 Hours ago from <a href="http://deviserweb.com" target="_blank">@DeviserWeb</a> Twitter via Twitter</p>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default MessageComponent;