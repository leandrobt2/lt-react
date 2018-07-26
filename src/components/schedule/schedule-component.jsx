import React from "react";
import { Nav, NavItem, Button } from 'react-bootstrap';

class ScheduleComponent extends React.Component {
    render() {
        return (
            // <div>
            //     <ul class="nav nav-tabs">
            //         <li><a href="#a" data-toggle="tab">a</a></li>
            //         <li><a href="#b" data-toggle="tab">b</a></li>
            //         <li><a href="#c" data-toggle="tab">c</a></li>
            //         <li><a href="#d" data-toggle="tab">d</a></li>
            //     </ul>

            //     <div class="tab-content">
            //         <div class="tab-pane active" id="a">AAA</div>
            //         <div class="tab-pane" id="b">BBB</div>
            //         <div class="tab-pane" id="c">CCC</div>
            //         <div class="tab-pane" id="d">DDD</div>
            //     </div>
            // </div>
            
            <section className="scedule-background scedule" id="scheduleId">
                <div className="fix overlay-color">

                    <div className="container">
                        <div className="row scedule-body">

                            <div role="tabpanel">

                                <ul className="scedule-main col-8 nav wow fadeInDown animated" data-wow-offset="10" data-wow-duration="1.5s" role="tablist">
                                    <li role="presentation" className="btn-group col-xs-12 col-sm-12 col-md-12 active">
                                        <a className="btn-border btn-standard btn btn-cus" href="#scedule-1" aria-controls="scedule-1" role="tab" data-toggle="tab">First Day</a>
                                    </li>
                                </ul>

                                <div className="clearfix visible-xs visible-sm"></div>

                                <div className="tab-content col-md-12">
                                    <div role="tabpanel" className="tab-pane active wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-1">

                                        <div className="dropdown">
                                            <span id="btn-scedule-1" data-id="#nav-ul-scedule-1" className="btn-scedule-css hidden-md hidden-lg label"></span>

                                            <ul className="nav nav-cus col-md-4" role="tablist" id="nav-ul-scedule-1">
                                                <li role="presentation" className="active">
                                                    <a href="#scedule-sub-1" aria-controls="scedule-sub-1" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Welcome &amp; Registration</span>
                                                        <span className="nav-time">09:30am - 11:30am</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-2" aria-controls="scedule-sub-2" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Improving Wordpress</span>
                                                        <span className="nav-time">11:30am - 1pm</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-3" aria-controls="scedule-sub-3" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Dance With Code</span>
                                                        <span className="nav-time">09:30am - 11:30am</span>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="">
                                                    <a href="#scedule-sub-4" aria-controls="scedule-sub-4" role="tab" data-toggle="tab">
                                                        <span className="nav-header">Less Motivation</span>
                                                        <span className="nav-time">09:30am - 11:30am</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-content col-md-8">
                                            <div role="tabpanel" className="tab-pane active wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-1">

                                                <h3>It is a long established fact that a reader will be distracted by the readable contents on the webpages.</h3>
                                                <p>Lorem ipsum event dolor sit amet, landing page consectetuer seminar elit, sed event nonummy nibh euismod community ut laoreet dolore magna convention erat volutpat. Conference wisi enim ad minim webinar, quis nostrud meetup tation ullamcorp eu feugiat nulla exhibition vero eros et landing page et iusto odior expo cum summit eleifend event congue nihil imperdiet meeting.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-2">

                                                <h3>It is a long established fact that a reader will be distracted by the readable contents on the webpages.</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-3">

                                                <h3>It is a long established fact that a reader will be distracted by the readable contents on the webpages.</h3>
                                                <p>Lorem ipsum event dolor sit amet, landing page consectetuer seminar elit, sed event nonummy nibh euismod community ut laoreet dolore magna convention erat volutpat. Conference wisi enim ad minim webinar, quis nostrud meetup tation ullamcorp eu feugiat nulla exhibition vero eros et landing page et iusto odior expo cum summit eleifend event congue nihil imperdiet meeting.</p>
                                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inpi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lect</p>

                                            </div>
                                            <div role="tabpanel" className="tab-pane wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s" id="scedule-sub-4">

                                                <h3>It is a long established fact that a reader will be distracted by the readable contents on the webpages.</h3>
                                                <p>Lorem ipsum event dolor sit amet, landing page consectetuer seminar elit, sed event nonummy nibh euismod community ut laoreet dolore magna convention erat volutpat. Conference wisi enim ad minim webinar, quis nostrud meetup tation ullamcorp eu feugiat nulla exhibition vero eros et landing page et iusto odior expo cum summit eleifend event congue nihil imperdiet meeting.</p>
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
}

export default ScheduleComponent;