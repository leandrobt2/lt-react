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
                            <p><span className="bold">Endereço:</span> Vila Viking Brasil - Estrada Particular - Sítio Gervásio, Juquitiba - State of São Paulo</p>
                            <p><span className="bold">Telefone: </span><a>+55 (11) 99250-8305</a></p>
                            <p><span className="bold">Email: </span><a href="mailto:vilaviking@vilaviking.com.br">vilaviking@vilaviking.com.br</a></p>

                            {/* <!-- Social Icon Goes Here  --> */}
                            <div className="social-icon">
                                <p><span className="bold">Encontre-nos:</span></p>
                                <ul className="nav navbar-left">
                                    <li><a href="https://www.facebook.com/VilaVikingBrasil" target="_blank"> <i className="fa facebook fa-facebook"></i> </a></li>
                                    {/* <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li> */}
                                    <li><a href="https://www.youtube.com/channel/UChjL5nQNK-92ySrEw8lhsbw" target="_blank"> <i className="fa youtube fa-youtube"></i> </a></li>
                                    <li><a href="https://www.instagram.com/vilavikingbrasil/" target="_blank"> <i className="fa instagram fa-instagram"></i> </a></li>
                                    {/* <li><a href="#"> <i className="fa skype fa-skype"></i> </a></li>
                                    <li><a href="#"> <i className="fa rss fa-rss "></i> </a></li> */}
                                </ul>
                            </div>

                        </div>
                        <div className="contact-us-right col-md-offset-1 col-md-7 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <div className="row">
                                <div className="map" id="map" minheigth={$('.contact-us-body').height()}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3647.569412150197!2d-47.1139127!3d-23.9048828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfbfcf8a1de503%3A0xe6187ea3f5740f5c!2sVila%20Viking%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1572119213639!5m2!1spt-BR!2sbr"
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