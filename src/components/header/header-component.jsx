import React from "react";
import logo from '../../assets/image/logo.png';
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <div>DONE</div>
    } else {
        // Render a countdown
        return <CustomCountdownComponent days={days} hours={hours} minutes={minutes} seconds={seconds} />
    }
};

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            top: 0
        };
    }

    render() {
        return (
            <header className="header-background header" id="header" data-stellar-background-ratio="0.5">
                <div className="fix header-overlay overlay-color" style={
                    {
                        paddingTop: this.state.top + 'px',
                        paddingBotton: this.state.top - this.state.height + 'px',
                        position: 'relative'
                    }
                }>

                    <div className="header-navbar navbar-fixed-top" id="header-navbar">
                        <nav className="navbar navbar-inverse">
                            <div className="container">
                                <div className="navbar-header">

                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar icon-close-1"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar icon-close-2"></span>
                                    </button>

                                    <a className="navbar-brand" href="index.html">
                                        <img src={logo} className="img-responsive" alt="" />
                                    </a>

                                </div>


                                <button type="button" className="navbar-toggle navbar-cus hidden-xs " id="navbar-cus">
                                    <span className="lines"></span>
                                </button>

                                <div id="myNavbar">
                                    <ul id="navbar-nav" className="myNavbarUl nav navbar-nav navbar-right slideOutRight">
                                        <li><a href="#header">Home</a></li>
                                        <li><a href="#section-1">About</a></li>
                                        <li><a href="#section-3">Scedule</a></li>
                                        <li><a href="#section-5">Price</a></li>
                                        <li><a href="#section-11">Venue</a></li>
                                        <li><a href="blog.html" className="blog">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="container">
                        <div className="row header-body" id="header-body" ref="headerBody">

                            <Countdown date={new Date(1536411600000)} renderer={renderer} />

                            <div className="clearfix">
                            </div>

                            <div className="col-md-offset-1 col-md-5 heading fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h1><b>JOIN THE WORLDS <br /> LARGEST COMMUNITY </b><br />MEETUP 2016</h1>
                            </div>

                            <div className="col-md-5 pera fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis atter liberty.</p>

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
        var top = Math.max(window.innerHeight / 2 - height / 2, 0);
        this.setState({
            height: height,
            top: top
        });
    }
}

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