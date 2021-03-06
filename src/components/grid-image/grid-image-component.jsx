import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ImageHelper from '../../helper/image-helper';

class GridImageComponent extends React.Component {
    constructor() {
        super();

        var i = 0;
        let __images = new ImageHelper().getRandonImages(35, undefined, this.isDesktopScreen() ? 'l' : 's').map(m => {
            if (m)
                return {
                    src: m.url,
                    id: i++,
                    width: m.typeId == 'portrait' ? 2 : 3,
                    height: m.typeId == 'portrait' ? 3 : 2
                };
        });

        __images = __images.filter(m => m !== undefined);

        if (!this.isDesktopScreen())
            __images = __images.splice(0, 18);

        this.state = {
            currentImage: 0,
            images2: __images
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
                        <Gallery photos={this.state.images2} onClick={this.openLightbox} />
                        <Lightbox images={this.state.images2}
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