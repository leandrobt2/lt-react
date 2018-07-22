import React from "react";
//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Preloader from './components/preloader/preloader-component'
import HeaderComponent from './components/header/header-component'

class MasterPage extends React.Component {
    render() {
        return (
            <div>
                <Preloader />
                <HeaderComponent />
            </div>
        )
    }
}

export default MasterPage;