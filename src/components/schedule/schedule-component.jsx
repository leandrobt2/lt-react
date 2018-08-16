import React from "react";
import { Nav, NavItem, Button } from 'react-bootstrap';

class ScheduleComponent extends React.Component {
    state = {
        display: ""
    }

    constructor(){
        super();
        this.dropDownClick = this.dropDownClick.bind(this);
    }

    render() {
        return (

            <section className="scedule-background scedule" id="scheduleId">
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
                                            <span id="btn-scedule-1" data-id="#nav-ul-scedule-1" className="btn-scedule-css hidden-md hidden-lg label" onClick={this.dropDownClick}></span>

                                            <ul className="nav nav-cus col-md-4" role="tablist" id="nav-ul-scedule-1" style={{ display: this.state.display }}>
                                                <li role="presentation" className="active">
                                                    <a href="#scedule-sub-1" aria-controls="scedule-sub-1" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Inauguração</span>
                                                        <span className="nav-time">01/01/2019 11:00am - 18:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-2" aria-controls="scedule-sub-2" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Renactment VIII</span>
                                                        <span className="nav-time">15/02/2019 11:00am - 18:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-3" aria-controls="scedule-sub-3" role="tab" data-toggle="tab">
                                                        <span className="nav-header">A Era Vikings (793–1066 AD)</span>
                                                        <span className="nav-time">30/03/2019 11:00am - 18:00pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-4" aria-controls="scedule-sub-4" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Renactment VIX</span>
                                                        <span className="nav-time">15/05/2019 11:00am - 18:00pm</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-content col-md-8">
                                            <div role="tabpanel" className="tab-pane active wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-1">

                                                <h3>Inauguração</h3>
                                                <p>Este evento traz a tona o lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-2">

                                                <h3>Renactment VIII</h3>
                                                <p>Este evento traz a tona o lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-3">

                                                <h3>The Viking Age (793–1066 AD)</h3>
                                                <p>Este evento traz a tona o lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-4">

                                                <h3>Renactment VIX: It is a long established fact that a reader will be distracted by the readable contents on the webpages.</h3>
                                                <p>Este evento traz a tona o lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

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
}

export default ScheduleComponent;