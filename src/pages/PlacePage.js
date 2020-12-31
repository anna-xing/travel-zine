import React from 'react';

import { Slider } from './../components/Slider';
import { Title, ArtistName, CreatedDate } from './../components/Titles';

// Images - temp
import florence05 from './../assets/florence05.png';
import florence05_art from './../assets/florence05-art.png';

// this piece-specific page will have to be moved deeper into hierarchy
export const PlacePage = (props) => {
    return (
        <div>
            <Title>Florence!</Title>
            <ArtistName>Michelle Cheng</ArtistName>
            <CreatedDate>Aug 2, 3030</CreatedDate>
            <Slider photo={florence05} art={florence05_art} />
        </div>
    );
}
