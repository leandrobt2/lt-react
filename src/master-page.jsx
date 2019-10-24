import React from "react";

//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Preloader from './components/preloader/preloader-component';
import HeaderComponent from './components/header/header-component';
import AboutEventComponent from './components/about-event/about-event-component';
import FooterComponent from './components/footer/footer-component';
import ContactUsComponent from './components/contact-us/contact-us-component';
import ScheduleComponent from './components/schedule/schedule-component';
import FaqComponent from './components/faq/faq-component';
import PeopleComponent from './components/people/people-component';
import PartnerComponent from './components/partner/partner-component';
import PriceComponent from './components/price/price-component';
import MessageComponent from './components/message/message-component';
import GridImageComponent from './components/grid-image/grid-image-component';

class MasterPage extends React.Component {
    render() {
        return (
            <div>
                <Preloader />
                <HeaderComponent />
                <AboutEventComponent />
                
                <GridImageComponent />
                {/* <MessageComponent /> */}
                <PeopleComponent />
                <ScheduleComponent />
                {/* <PriceComponent /> */}
                
                <PartnerComponent />
                <FaqComponent />
                
                <ContactUsComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default MasterPage;