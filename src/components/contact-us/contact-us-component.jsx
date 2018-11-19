import React from 'react';
import $ from "jquery";
//import mapLocation from './../../assets/image/map-location.jpg';
class ContactUsComponent extends React.Component {
    render() {
        return (
            <section className="contact-us" id="contactus">
                <div className="container">
                    <div className="row contact-us-body">

                        <div className="contact-us-left col-md-4 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">

                            <h2>Vila Viking Brasil</h2>
                            <p><span className="bold">Endereço:</span> Eventer, one caspian point, pierhead street cardiff waterside, cf10 4dq</p>
                            <p><span className="bold">Telefone: </span><a>+55 (11)9123456789</a></p>
                            <p><span className="bold">Email: </span><a href="mailto:vilaviking@vilaviking.com.br">vilaviking@vilaviking.com.br</a></p>

                            {/* <!-- Social Icon Goes Here  --> */}
                            <div className="social-icon">
                                <p><span className="bold">Encontre-nos:</span></p>
                                <ul className="nav navbar-left">
                                    <li><a href="https://www.facebook.com/VilaVikingBrasil" target="_blank"> <i className="fa facebook fa-facebook"></i> </a></li>
                                    <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li>
                                    <li><a href="#"> <i className="fa youtube fa-youtube"></i> </a></li>
                                    <li><a href="https://www.instagram.com/vilavikingbrasil/" target="_blank"> <i className="fa instagram fa-instagram"></i> </a></li>
                                    {/* <li><a href="#"> <i className="fa skype fa-skype"></i> </a></li>
                                    <li><a href="#"> <i className="fa rss fa-rss "></i> </a></li> */}
                                </ul>
                            </div>

                        </div>
                        <div className="contact-us-right col-md-offset-1 col-md-7 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <div className="row">
                                <div className="map" id="map" minheigth={$('.contact-us-body').height()}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.04863449634!2d-46.87548143121467!3d-23.681531514580286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1542657393435"
                                        width="600"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen>
                                    </iframe>
                                    {/* <a href="" target="_blank">
                                        <img src={mapLocation} alt="google-map-img" />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    }
}

export default ContactUsComponent;