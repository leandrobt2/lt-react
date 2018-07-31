import React from 'react';
import Slider from "react-slick";

import person1 from '../../assets/image/person-1.png';
import person2 from '../../assets/image/person-2.png';
import person3 from '../../assets/image/person-3.png';
import person4 from '../../assets/image/person-4.png';

class PeopleComponent extends React.Component {

    state = {
        sliders: [
            {
                key: '1',
                name: 'slider1',
                desc: 'slider1slider1',
                fb: '',
                twitter: '',
                skype: '',
                image: person1
            },
            {
                key: '2',
                name: 'slider1',
                desc: 'slider1slider1',
                fb: '',
                twitter: '',
                skype: '',
                image: person2
            },
            {
                key: '3',
                name: 'slider1',
                desc: 'slider1slider1',
                fb: '',
                twitter: '',
                skype: '',
                image: person3
            },
            {
                key: '4',
                name: 'slider1',
                desc: 'slider1slider1',
                fb: '',
                twitter: '',
                skype: '',
                image: person4
            }
        ]
    }

    renderSlide(slider) {
        return (
            <div>
                <div className="item" key={slider.key}>
                    <div className="view view-first">
                        <img src={slider.image} alt="" />
                        <div className="mask">
                            <ul className="nav">
                                <li><a href="#"> <i className="fa facebook fa-facebook"></i> </a></li>
                                <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li>
                                <li><a href="#"> <i className="fa skype fa-skype"></i> </a></li>
                                <li><a href="#"> <i className="fa rss fa-rss "></i> </a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <h3>{slider.name}</h3>
                    <p>{slider.desc}</p>

                </div></div>);
    }

    render() {
        var settings = {
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };

        return (
            <section className="speakers" id="cofounderId" >
                <div className="container">
                    <div className="row col-md-12 col-lg-offset-1 col-lg-10" >

                        <div className="wow fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <h2>OUR SPEAKERS</h2>
                        </div>
                        <div id="slider" className="wow fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <Slider {...settings}>
                                {
                                    this.state.sliders.map(slider => (
                                        <div className="item-slider" key={slider.key}>
                                            <div className="view view-first">
                                                <img src={slider.image} alt="" className="item-slider-img" />
                                                <div className="mask">
                                                    <ul className="nav">
                                                        <li><a href="#"> <i className="fa facebook fa-facebook"></i> </a></li>
                                                        <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li>
                                                        <li><a href="#"> <i className="fa skype fa-skype"></i> </a></li>
                                                        <li><a href="#"> <i className="fa rss fa-rss "></i> </a></li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="clearfix"></div>

                                            <h3>{slider.name}</h3>
                                            <p>{slider.desc}</p>

                                        </div>)
                                    )
                                }
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default PeopleComponent;