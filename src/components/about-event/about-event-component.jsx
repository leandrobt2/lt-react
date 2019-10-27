import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ImageHelper from '../../helper/image-helper';

class AboutEventComponent extends React.Component {

    isPortrait() {
        return matchMedia("(orientation: portrait)").matches;
        //return matchMedia("(min-width: 768px) and (min-height: 500px)").matches;
    }

    render() {
        let anchorLinkStyle = {
            position: "relative",
            display: "block",
            padding: "15px 15px",
            color: '#9d9d9d'
        };

        return (
            <div>
                <section className="about-our-event" id="aboutEventComponent">
                    {/* <!-- Start: about-our-event, "SECTION-1" --> */}
                    <div className="container">

                        {/* <!-- Start: About Our Event Area  --> */}
                        <div className="row about-our-event-body">

                            {/* <!-- Start: About-Our-Event Left Area  --> */}
                            <div className="about-our-event-left col-md-5 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <div className="about-our-event-left-body">
                                    <h2>SOBRE OS EVENTOS</h2>
                                    <p>A realização de eventos tem como objetivo proporcionar para o público a experiência de como seria a vida dentro de uma vila da era viking, onde os visitantes farão parte do povo que lá reside, executando tarefas conforme aptidão de cada um, marcando presença como comerciantes, guerreiros em busca de fama, ou simplesmente aliados que estão de passagem em busca de abrigo e boa comida. </p>
                                </div>
                            </div>
                            {/* <!-- End: About-Our-Event Left Area  --> */}

                            {/* <!-- Start: About-Our-Event Right Area  --> */}
                            <div className="about-our-event-right col-md-offset-1 col-md-6 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <div className="container-fluid">
                                    <div className="row about-our-event-right-body">
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">2000</span>
                                            <span className="title">m²</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1º</span>
                                            <span className="title">Vila Viking do BR</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">100</span>
                                            <span className="title">Pessoas</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1</span>
                                            <span className="title">Ferreiro</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1</span>
                                            <span className="title">Campo de Batalha</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1</span>
                                            <span className="title">Forjaria</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">1</span>
                                            <span className="title">Carpintaria</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">5</span>
                                            <span className="title">Mercadores</span>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 background time">
                                            <span className="counter style-all">2</span>
                                            <span className="title">Artesões</span>
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
                            <div className="bg-img-3 background-right col-sm-12 col-md-6" style={{ background: "url('" + ImageHelper.getRandonImages(1, this.isPortrait() ? 'portrait' : 'landscape', 'm')[0].url + "')" }}>
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
                                    {/* <iframe src="https://player.vimeo.com/video/71371201?" allowFullScreen></iframe> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cMCipy7TsjE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    {/* <!--  Video Link Goes Here  --> */}
                                </div>
                                {/* <!--  End: Video Area  --> */}

                            </div>
                            {/* <!-- End: Our Featured Speaker Left --> */}


                            {/* <!-- Start: Our Featured Speaker Right --> */}
                            <div className="our-featured-speaker-right col-md-6 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h2>SOBRE O ESPAÇO</h2>
                                <p>
                                    A Vila Viking está sendo construída com o máximo de cuidado e embasamento histórico, informações estas agregadas através de estudos e contatos com camaradas recreacionistas.
                                    A Vila estará em constante crescimento, a cada encontro teremos mais estruturas, itens para decoração e ferramentas para uso por parte dos visitantes.
                                </p>

                                {/* <!-- Start: Button area --> */}
                                <div className="buy-tricket">
                                    <div className="btn-group btn-scroll">
                                        <AnchorLink href='#cofounderId' className="btn-fill btn-standard btn btn-cus" style={anchorLinkStyle}>Conheça os fundadores</AnchorLink>
                                        {/* <AnchorLink href='#priceId' className="btn-border btn-standard btn btn-cus" style={anchorLinkStyle}>Preços</AnchorLink> */}
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