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
                                                        <span className="nav-header">Pre-Inauguração</span>
                                                        <span className="nav-time">16/11/2019 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-1" aria-controls="scedule-sub-1" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Inauguração</span>
                                                        <span className="nav-time">01/04/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-2" aria-controls="scedule-sub-2" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Renactment VIII</span>
                                                        <span className="nav-time">15/05/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-3" aria-controls="scedule-sub-3" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">A Era Vikings (793–1066 AD)</span>
                                                        <span className="nav-time">30/06/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-4" aria-controls="scedule-sub-4" role="tab" data-toggle="tab" onClick={this.teste}>
                                                        <span className="nav-header">Renactment VIX</span>
                                                        <span className="nav-time">15/07/2020 11:00am - 16:00pm</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-content col-md-8">
                                            <div role="tabpanel" className="tab-pane active wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-0">

                                                <h3>Pré-Inauguração</h3>
                                                <p>Convidamos nossos irmãos e irmãs para nosso primeiro encontro aberto 😃 Neste dia iremos recepcionar somente 60 (sessenta) pessoas, tendo em vista que ainda não se trata da nossa inauguração e conforme informado e demonstrado no mapa, ainda temos muitas estruturas a serem erguidas.</p>

                                                <p>Como adquirir o ingresso e participar desse encontro:

1°) Encaminhar um e-mail para: vilaviking@vilaviking.com.br informando o numero de pessoas e idades;

2°) Receberá em seguida uma mensagem de confirmação da reserva, mais detalhes sobre o encontro e informações para pagamento;

3°) Após o pagamento ser realizado respondam o e-mail anexando o comprovante.

Valor do ingresso: R$150,00
Crianças até 12 anos acompanhadas pelos pais não pagam.

Comida e bebida inclusas, sendo que os convidados irão se alimentarem juntos aos recriadores, integrando e interagindo com o ambiente, podendo inclusive participarem dos preparos, jogos, treinamentos, etc.

Obs.: Não faremos uso de energia elétrica nem wi-fi nesses primeiros encontros..</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-1">

                                                <h3>Inauguração</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-2">

                                                <h3>Renactment VIII</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-3">

                                                <h3>The Viking Age (793–1066 AD)</h3>
                                                <p>Evento não confirmado, sujeito a alteração de data</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-4">

                                                <h3>Renactment VIX: To beyond.</h3>
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