import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';

class GridImageComponent extends React.Component {
    constructor() {
        super();
        let images = [
            { id: 1, src: img1, width: 1, height: 1, caption: 'The fortress' },
            { id: 2, src: img2, width: 1, height: 1, caption: 'Logo' },
            { id: 3, src: img3, width: 2, height: 1, caption: 'The fortress' },
            { id: 4, src: img4, width: 1, height: 1, caption: 'A forest' },
            { id: 5, src: img5, width: 1, height: 1, caption: 'A forest' },
            { id: 6, src: img6, width: 1, height: 1, caption: 'A forest' },
            { id: 7, src: img7, width: 1, height: 1, caption: 'The Gate' },
            { id: 8, src: img8, width: 1, height: 1, caption: 'Hands On' },
            { id: 9, src: img9, width: 2, height: 1, caption: 'Hands On' }
        ];

        if (this.isSmallScreen())
            images = images.splice(0, 6);

        this.state = {
            currentImage: 0,
            images
        };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    isSmallScreen() {
        return matchMedia("(min-width: 768px) and (min-height: 500px)").matches;
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
            <section id="gridId">
                <div className="container">
                    <div className="row">
                        <div className="wow fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                            <h2>Galeria</h2>
                        </div>
                        <Gallery photos={this.state.images} onClick={this.openLightbox} />
                        <Lightbox images={this.state.images}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default GridImageComponent;