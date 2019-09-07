import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
console.log('__dirname',__dirname);
import img1 from '../../assets/image/grid-image/1.jpg';
import img2 from '../../assets/image/grid-image/2.jpg';
import img3 from '../../assets/image/grid-image/3.jpg';
import img5 from '../../assets/image/grid-image/5.jpg';
import img6 from '../../assets/image/grid-image/6.jpg';
import img7 from '../../assets/image/grid-image/7.jpg';
import img8 from '../../assets/image/grid-image/8.jpg';
import img9 from '../../assets/image/grid-image/9.jpg';

import img10 from '../../assets/image/grid-image/10.jpg';
import img11 from '../../assets/image/grid-image/11.jpg';
import img12 from '../../assets/image/grid-image/12.jpg';
import img13 from '../../assets/image/grid-image/13.jpg';
import img14 from '../../assets/image/grid-image/14.jpg';


class GridImageComponent extends React.Component {
    constructor() {
        super();
        let images = [
            { id: 1, src: img1, width: 1, height: 1, caption: 'The fortress' },
            { id: 2, src: img2, width: 1, height: 1, caption: 'Logo' },
            { id: 3, src: img3, width: 2, height: 1, caption: 'The fortress' },
            // { id: 4, src: img4, width: 1, height: 1, caption: 'A forest' },
            { id: 10, src: img10, width: 3, height: 2, caption: 'A forest' },
            { id: 11, src: img11, width: 3, height: 2, caption: 'The hut' },
            { id: 12, src: img12, width: 1, height: 1, caption: 'Light' },
            { id: 13, src: img13, width: 1, height: 1, caption: 'The shield and the Ligth' },
            { id: 14, src: img14, width: 3, height: 2, caption: 'The hut' },
            { id: 5, src: img5, width: 1, height: 1, caption: 'A forest' },
            { id: 6, src: img6, width: 1, height: 1, caption: 'A forest' },
            // { id: 7, src: img7, width: 1, height: 1, caption: 'The Gate' },
            { id: 8, src: img8, width: 3, height: 5, caption: 'Hands On' },
            { id: 9, src: img9, width: 3, height: 2, caption: 'Hands On' }
        ];

        if (!this.isDesktopScreen())
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

    isDesktopScreen() {
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