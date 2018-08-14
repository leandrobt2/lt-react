import React from "react";
import logo from '../../assets/image/imageedit_4_5380735982.png';
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
            navbarClass: ['header-navbar', 'navbar-fixed-top']
        };
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
                        minHeight: matchMedia("(min-width: 768px) and (min-height: 500px)").matches ? window.innerHeight + 'px' : 0 + 'px'
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
                                <Navbar.Toggle />
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
                                    <div style={{ float: 'left' }}>
                                        <AnchorLink href='#priceId' style={anchorLinkStyle}>Preço</AnchorLink>
                                    </div>
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

                            <Countdown date={new Date(1536911600000)} renderer={renderer} />

                            <div className="clearfix">
                            </div>

                            <div className="col-md-offset-1 col-md-5 heading fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h1><b>JUNTE-SE AO MAIOR<br /> CENTRO DE EVENTO VIKING DA AMERICA LATINA </b><br />INAUGURAÇÃO 01/01/2019</h1>
                            </div>

                            <div className="col-md-5 pera fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <p>
                                    Espaço cultural e para eventos que busca trazer uma imersão completa aos visitantes, fornecendo não apenas um visual único composto por estruturas históricas, como também realizando demostrações de combate, artesanato, carpintaria, alimentação, jogos, dentre outras atividades da era viking.
                                </p>

                                <div className="buy-tricket btn-scroll">
                                    <div className="btn-group">
                                        <a href="#section-6" className="btn-fill btn-standard btn btn-cus">Buy Tricket</a>
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
        // Render a completed state
        return <div>DONE</div>
    } else {
        // Render a countdown
        return <CustomCountdownComponent days={days} hours={hours} minutes={minutes} seconds={seconds} />
    }
};

const CustomCountdownComponent = ({ days, hours, minutes, seconds, completed }) => {

    return (
        <div className="count_down fadeInDown animated"
            data-wow-offset="120"
            data-wow-duration="1.5s">
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