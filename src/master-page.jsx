import React from "react";

//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Preloader from './components/preloader/preloader-component';
import HeaderComponent from './components/header/header-component';
import AboutEventComponent from './components/about-event/about-event-component';
import FooterComponent from './components/footer/footer-component';
import ContactUsComponent from './components/contact-us/contact-us-component';
import ScheduleComponent from './components/schedule/schedule-component';
import FaqComponent from './components/faq/faq-component';
import CoFounderComponent from './components/cofounder/co-founder';
import PartnerComponent from './components/partner/partner-component';
import PriceComponent from './components/price/price-component';

class MasterPage extends React.Component {
    render() {
        return (
            <div>
                <Preloader />
                <HeaderComponent />
                <AboutEventComponent />
                {/* <CoFounderComponent /> */}
                <ScheduleComponent />
                <PriceComponent />
                <PartnerComponent />
                <FaqComponent />
                <ContactUsComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default MasterPage;