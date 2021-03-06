import React, { Component } from 'react';
import '../style/App.css';
import '../style/10.css';

class Carousel extends Component {
  render() {
    return (
    <div className="container-fluid">
        <div className="row paddingtop20">
            <div className="col-12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active " data-interval="2000">
                            <img className="d-block w-100 borderradius10 h350px" src={require('../images/ads1.jpg')}
                                alt="First slide" />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img className="d-block w-100 borderradius10 h350px" src={require('../images/ads2.jpg')}
                                alt="Second slide" />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img className="d-block w-100 borderradius10 h350px" src={require('../images/ads3.jpg')}
                                alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Carousel;

