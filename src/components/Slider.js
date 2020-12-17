import React from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';

const Slider = (props) => {
    return (
        <HeroSlider 
            slidingAnimation='left_to_right'
            orientation='horizontal'
            initialSlide={1}
            settings={{
                slidingDuration: 1000,
                slidingDelay: 100,
                shouldAutoplay: false,
                shouldDisplayButtons: true,
                height: '100vh'
            }}
        >
            <Slide background={{
                backgroundImage: props.photo,
                backgroundAttachment: 'fixed'
            }} />
            <Slide background={{
                backgroundImage: props.art,
                backgroundAttachment: 'fixed'
            }} />
            <Nav />
        </HeroSlider>
    );
};

export default Slider;
