import React from "react";
import { Nav, NavItem, Button } from 'react-bootstrap';
import ImageHelper from '../../helper/image-helper';

class ScheduleComponent extends React.Component {
    isPortrait() {
        return matchMedia("(orientation: portrait)").matches;
    }

    state = {
        display: ""
    }

    imageUrl = null;

    constructor() {
        super();
        this.dropDownClick = this.dropDownClick.bind(this);
        this.teste = this.teste.bind(this);

        if (this.isPortrait()) {
            this.imageUrl = new ImageHelper().getRandonImages(1, 'portrait', 'm')[0].url;
        } else {
            this.imageUrl = new ImageHelper().getRandonImages(1, 'landscape', 'l')[0].url;
        }
    }

    render() {



        return (

            <section className="scedule-background scedule" id="scheduleId" style={{ background: "url('" + this.imageUrl + "')" }}>
                <div className="fix overlay-color">

                    <div className="container">
                        <div className="row scedule-body">

                            <div role="tabpanel">

                                <ul className="scedule-main col-8 nav wow fadeInDown animated" data-wow-offset="10" data-wow-duration="1.5s" role="tablist">
                                    <li role="presentation" className="btn-group col-xs-12 col-sm-12 col-md-12 active">
                                        <a className="btn-border btn-standard btn btn-cus" href="#scedule-1" aria-controls="scedule-1" role="tab" data-toggle="tab">Próximos Eventos</a>
                                    </li>
                                </ul>

                                <div className="clearfix visible-xs visible-sm"></div>

                                <div className="tab-content col-md-12">
                                    <div role="tabpanel" className="tab-pane active wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-1">

                                        <div className="dropdown">
                                            <span id="btn-scedule-1" data-id="#nav-ul-scedule-1" className="btn-scedule-css hidden-md hidden-lg label" onClick={this.dropDownClick}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <i className="fa fa-arrow-down"></i>
                                                </div>
                                            </span>

                                            <ul className="nav nav-cus col-md-4" role="tablist" id="nav-ul-scedule-0" style={{ display: this.state.display }}>
                                                <li role="presentation" className="active">
                                                    <a href="#scedule-sub-0" aria-controls="scedule-sub-0" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Oficina Treinamento Militar</span>
                                                        <span className="nav-time">15/02/2020 08:00am - 16/02/2020 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-1" aria-controls="scedule-sub-1" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Medieval Marketing</span>
                                                        <span className="nav-time">02/05/2020 11:00am - 17:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-2" aria-controls="scedule-sub-2" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Yule</span>
                                                        <span className="nav-time">20/06/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-3" aria-controls="scedule-sub-3" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Camping vivencia</span>
                                                        <span className="nav-time">05/09/2020 e 06/09/2020 - 10:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-4" aria-controls="scedule-sub-4" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Dia para as crianças</span>
                                                        <span className="nav-time">11/10/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-content col-md-8">
                                            <div role="tabpanel" className="tab-pane active wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-0">

                                                <h3>Oficina Treinamento Militar</h3>
                                                <p>Em parceria com nossos irmãos do @Lobos de Guerra - Combate Medieval e nossa irmã da @Especiarias de Gaia, assim como a colaboração de outros grupos de recriação histórica da era viking, realizaremos nossa 2° Oficina deste ano na Vila Viking.</p>

                                                <p>
                                                    Período histórico da vivência:
                                                    Ano de 1066, véspera do combate onde o rei norueguês Harald Hardrada tombou em combate na cidade de Stamford Bridge, Inglaterra.
                                                </p>

                                                <p>
                                                    <b>Cronograma (previsão):<br /></b>

                                                    8:00 – Abertura do portão; <br />
                                                    8:30 – Reunião no grande salão (vestir o traje histórico);<br />
                                                    9:00 – Reconhecimento de campo;<br />
                                                    9:30 – Café da manhã (mingau com aveia e mel);<br />
                                                    10:30 – Treinamento básico (escudo e lança);<br />
                                                    12:30 – Preparo do almoço (fazer fogo, separar lenha, preparar peixe, montar camp fire, preparar e separar pão de viagem);<br />
                                                    14:00 – Montagem do acampamento (tenda histórica de tecido);<br />
                                                    15:00 – Marcha até o rio (4km);<br />
                                                    16:00 – Pegar o baú que estará na margem do rio contendo recursos, ferramentas e armas;<br />
                                                    17:30 – Retorno ao assentamento;<br />
                                                    18:00 – Preparo do Jantar (caldo de ervilhas e pão);<br />
                                                    19:00 – Revezamento na vigia;<br />
                                                    7:00 – Alvorada (todos de pé com armas em punho na arena);<br />
                                                    7:30 – Café da manha (mingau com aveia e mel);<br />
                                                    9:00 – Banho no riacho;<br />
                                                    10:00 – Treinamento (espada, machado e escudo);<br />
                                                    12:00 – Defender o portão em formação;<br />
                                                    13:00 – Banquete (Apple bacon, pães, geleia, frutas, carne de porco e vinho);<br />
                                                    15:00 - Encerramento.
                                                </p>
                                                <p>
                                                    <div className="buy-tricket btn-scroll">
                                                        <div className="btn-group">
                                                            <a target="_blank" href="https://www.facebook.com/VilaVikingBrasil/posts/837611696669547" className="btn-fill btn-standard btn btn-cus" style={{ position: 'relative', display: 'block', padding: '15px', color: 'rgb(157, 157, 157)' }}>Garanta seu ingresso aqui</a>
                                                            {/* <AnchorLink target="_blank" href='https://www.facebook.com/VilaVikingBrasil/photos/a.515067352257318/763788494051868/?type=3&theater' className="btn-fill btn-standard btn btn-cus" style={anchorLinkStyle}>Garanta seu ingresso aqui</AnchorLink> */}
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-1">

                                                <h3>Medieval Marketing</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-2">

                                                <h3>Yule</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-3">

                                                <h3>Camping vivencia</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-4">

                                                <h3>Dia para as crianças</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
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

    dropDownClick() {
        if (this.state.display == 'none')
            this.setState({ display: 'block' });
        else
            this.setState({ display: 'none' });
    }

    componentDidMount() {
        if (window.innerWidth < 970)
            this.setState({ display: 'none' });
    }

    teste() {
        window.scrollTo(0, window.scrollY - 1);
        window.scrollTo(0, window.scrollY + 1);
    }
}

export default ScheduleComponent;