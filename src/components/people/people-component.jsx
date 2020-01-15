import React from 'react';
import Slider from "react-slick";

import person1 from '../../assets/image/person-1.jpg';
import person2 from '../../assets/image/person-2.jpg';
import person3 from '../../assets/image/person-3.jpg';
import person4 from '../../assets/image/person-4.jpg';

class PeopleComponent extends React.Component {

    state = {
        sliders: [
            {
                key: '1',
                name: 'Paulo',
                desc: 'Co-Founder',
                fb: 'https://www.facebook.com/paulocesar.fraderevuelta',
                twitter: '',
                image: person1
            },
            {
                key: '2',
                name: 'Rafael',
                desc: 'Co-Founder',
                fb: '',
                twitter: '',
                image: person3
            },
            {
                key: '3',
                name: 'Leandro',
                desc: 'Co-Founder',
                fb: 'https://www.facebook.com/leandrobt2',
                twitter: 'https://twitter.com/leandro_bt2',
                image: person2
            },
            {
                key: '4',
                name: 'Agostinho',
                desc: 'Co-Founder',
                fb: '',
                twitter: '',
                image: person4
            }
        ]
    }

    render() {
        var settings = {
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        };

        return (
            <section className="speakers" id="cofounderId" >
                <div className="container">
                    <div className="row col-md-12 col-lg-offset-1 col-lg-10" >

                        <div className="wow fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <h2>Fundadores</h2>
                        </div>
                        <div id="slider" className="wow fadeInUp animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <Slider {...settings}>
                                {
                                    this.state.sliders.map(slider => (
                                        <div className="item-slider" key={slider.key}>
                                            <div className="view view-first">
                                                <img src={slider.image} key={"i" + slider.key} alt="" className="item-slider-img" style={{ width: "350px", height: "auto" }} />
                                                <div className="mask">
                                                    <ul className="nav">
                                                        <li><a href={slider.fb} target="_blank" key={"fb" + slider.key}> <i className="fa facebook fa-facebook"></i> </a></li>
                                                        <li><a href="#"> <i className="fa twitter fa-twitter"></i> </a></li>
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