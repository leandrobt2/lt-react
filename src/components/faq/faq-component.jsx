import React from 'react';
import faqImg from '../../assets/image/3.jpg';

class FaqComponent extends React.Component {

    render() {
        return (
            <section className="collapse-area" id="faqId">
            <div className="container">
                <div className="row">
                    <div className="collapse-left col-sm-12 col-md-4 col-lg-4 hidden-xs hidden-sm wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s">
                        <img src={faqImg} alt="" className=""/>
                    </div>
                 
                    <div className="collapse-right col-sm-12 col-md-offset-1 col-md-7 col-lg-offset-1 col-lg-7">

                        <h2 className="wow fadeInDown animated" data-wow-offset="10" data-wow-duration="1.5s">Freaquently Asked Question</h2>
                        
                       
                        <div className="collapse-tab ">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="panel1">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                                           
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" className="">
                                                What if I need to cancel my booking at late notice?
                                                <span className="bar hidden-xs"></span>
                                            </a>

                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">

                                       
                                        <div className="panel-body">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp eu feugiat nulla facilisis at vero eros et accumsan et iusto odior
                                        </div>

                                    </div>
                                </div>
                                <div className="panel panel-default wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="panel2">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                                            
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapsed">
                                                Which payment methods do you accept?
                                                <span className="bar hidden-xs"></span>
                                            </a>

                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">

                                        
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3.
                                        </div>

                                    </div>
                                </div>
                                <div className="panel panel-default wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="panel3">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                                           
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">
                                                I'd like to buy 5 tickets, is there bulk pricing?
                                                <span className="bar hidden-xs"></span>
                                            </a>

                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">

                                       
                                        <div className="panel-body">
                                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3.
                                        </div>

                                    </div>
                                </div>
                                <div className="panel panel-default wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id="panel4">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                                           
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" className="collapsed">
                                                What if I need to cancel my booking at late notice?
                                                <span className="bar hidden-xs"></span>
                                            </a>

                                        </h4>
                                    </div>
                                    <div id="collapseFour" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3.
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

export default FaqComponent;