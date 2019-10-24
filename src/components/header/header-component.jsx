import React from "react";
import logo from '../../assets/image/logo.png';
import Countdown from 'react-countdown-now';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            height: 0,
            top: 0,
            navbarClass: ['header-navbar', 'navbar-fixed-top'],
            minHeight: this.isSmallScreen() ? window.innerHeight + 'px' : 0 + 'px'
        };
    }

    isSmallScreen() {
        return matchMedia("(min-width: 768px) and (min-height: 500px)").matches;
    }

    collapseBrandIcon() {
        this.setState({ ...this.state, navbarClass: ['header-navbar', 'navbar-fixed-top', 'navbar-home'] });
        if (this.state.navbarClass.length == 3) {
            this.setState({ ...this.state, navbarClass: ['header-navbar', 'navbar-fixed-top'] });
        }
    }

    render() {
        let anchorLinkStyle = {
            position: "relative",
            display: "block",
            padding: "15px 15px",
            color: '#9d9d9d'
        };
        return (
            <header className="header-background header" id="header" data-stellar-background-ratio="0.5">
                <div className="fix header-overlay overlay-color" style={
                    {
                        minheigth: this.state.minHeight
                    }
                }>

                    <div className={this.state.navbarClass.join(' ')} id="header-navbar" ref="headerNavbar">
                        <Navbar collapseOnSelect inverse id="mainNavBar">
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <AnchorLink href='#header'>
                                        <img src={logo} className="img-responsive" alt="logo" />
                                    </AnchorLink>
                                </Navbar.Brand>
                                <Navbar.Toggle onClick={this.collapseBrandIcon.bind(this)} />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#header' style={anchorLinkStyle}>Home</AnchorLink>
                                    </div>
                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#aboutEventComponent' style={anchorLinkStyle}>Sobre</AnchorLink>
                                    </div>

                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#scheduleId' style={anchorLinkStyle}>Agenda</AnchorLink>
                                    </div>
                                    {/* <div style={{ float: 'left' }}>
                                        <AnchorLink href='#priceId' style={anchorLinkStyle}>Preço</AnchorLink>
                                    </div> */}
                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#faqId' style={anchorLinkStyle}>FAQ</AnchorLink>
                                    </div>
                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#contactus' style={anchorLinkStyle}>Contate-nos</AnchorLink>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>

                    <div className="container">
                        <div className="row header-body" id="header-body" ref="headerBody" style={
                            {
                                paddingTop: this.state.top + 'px',
                                paddingBotton: this.state.top - this.state.height + 'px',
                                position: 'relative'
                            }
                        }>
                            <Countdown date={new Date(1573862400000)} renderer={renderer} />

                            <div className="clearfix">
                            </div>

                            <div className="col-md-offset-1 col-md-5 heading fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h1>
                                    <b>CONHEÇA A PRIMEIRA<br />VILA VIKING DO BRASIL</b>
                                    <br />
                                    <div>
                                        Evento Aberto 16/11
                                    </div>
                                </h1>
                            </div>

                            <div className="col-md-5 heading pera fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h2>
                                    VENHA APRENDER COMO SERIA A VIDA NESSE PERÍODO.
                                </h2>
                                <p>
                                    Espaço cultural e para eventos que busca trazer uma imersão completa aos visitantes, fornecendo não apenas um visual composto por estruturas históricas, como também realizando demonstrações de combate, artesanato, carpintaria, alimentação, jogos, dentre outras atividades da era viking.
                                </p>

                                <div className="buy-tricket btn-scroll">
                                    <div className="btn-group">
                                        <a target="_blank" href="https://www.facebook.com/VilaVikingBrasil/photos/a.515067352257318/763788494051868/?type=3&amp;theater" className="btn-fill btn-standard btn btn-cus" style={{ position: 'relative', display: 'block', padding: '15px', color: 'rgb(157, 157, 157)' }}>Garanta seu ingresso aqui</a>
                                        {/* <AnchorLink target="_blank" href='https://www.facebook.com/VilaVikingBrasil/photos/a.515067352257318/763788494051868/?type=3&theater' className="btn-fill btn-standard btn btn-cus" style={anchorLinkStyle}>Garanta seu ingresso aqui</AnchorLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    componentDidMount() {
        let height = this.refs.headerBody.offsetHeight;
        let top = Math.max(window.innerHeight / 2 - height / 2, 0);
        let heigthNav = this.refs.headerNavbar.offsetHeight;

        this.setState({
            height: heigthNav,
            top: top,
            navbarClass: ['header-navbar', 'navbar-fixed-top']
        });

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var scrollPos = document.body.scrollTop;

        if (scrollPos > 100) {
            if (this.state.navbarClass.length == 2) {
                this.setState({ ...this.state, navbarClass: ['header-navbar', 'navbar-fixed-top', 'navbar-home'] });
            }
        }
        else {
            if (this.state.navbarClass.length == 3) {
                this.setState({ ...this.state, navbarClass: ['header-navbar', 'navbar-fixed-top'] });
            }
        }
    }
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return (
            <div className="count_down fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                <div className="days_wrapper col-sm-12 col-xs-12 col-md-12">
                    <div className="background time">
                        <span className="counter style_all">Vila Viking Brasil</span>
                        <span className="title">Em Breve</span>
                    </div>
                </div>
            </div>)
    }
    else
        return <CustomCountdownComponent days={days} hours={hours} minutes={minutes} seconds={seconds} />
};

const CustomCountdownComponent = ({ days, hours, minutes, seconds, completed }) => {

    return (
        <div className="count_down fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
            <div className="days_wrapper col-sm-12 col-xs-12 col-md-12">
                <div className="background time">
                    <span className="counter style_all">Próximo encontro em:</span>
                </div>
            </div>
            <div style={{ height: "140px" }}></div>
            <div className="days_wrapper col-sm-3 col-xs-3 col-md-3 custom">
                <div className="background time">
                    <span className="counter style_all">{days}</span>
                    <span className="title">Dias</span>
                </div>
            </div>
            <div className="hours_wrapper col-sm-3 col-xs-3 col-md-3 custom">
                <div className="background time">
                    <span className="counter style_all">{hours}</span>
                    <span className="title">Horas</span>
                </div>
            </div>
            <div className="minutes_wrapper col-sm-3 col-xs-3 col-md-3 custom">
                <div className="background time">
                    <span className="counter style_all">{minutes}</span>
                    <span className="title">Minutos</span>
                </div>
            </div>
            <div className="seconds_wrapper col-sm-3 col-xs-3 col-md-3 custom">
                <div className="background time">
                    <span className="counter style_all">{seconds}</span>
                    <span className="title">Segundos</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;