import SafeImage from './SafeImage';
import { useState } from 'react'


const YeDisplay = ({date}) => {
    const [yeOfWeek, fileExt, isMobile] = initialize(date);
    const [isMuted, setIsMuted] = useState(!isMobile);
    const handleClick = () => setIsMuted(!isMobile && !isMuted);

    return (
        <div>
            <video 
                onClick={handleClick}
                src={`https://d2desgpiu5lrdz.cloudfront.net/video/${yeOfWeek}_Final${fileExt}`}
                muted={isMuted} 
                loop 
                autoPlay />
            <SafeImage
                onClick={handleClick}
                id='imgClickFor' 
                fileName={`image/otherPics/${isMuted ? '' : 'dont'}clickVideo.png`} 
                className='tnyImg' 
                alt='click to hear me'/>
        </div>
    );
}

const initialize = (date) => {
    //what ye is it?
    const yeOfWeek = ['SunYe','MonYe','TuesYe','WednesYe','ThursYe','FriYe','SaturYe'][(date || new Date()).getDay()];

    //You on mobile?
    const isMobile = navigator.userAgent.indexOf("Mobile") > -1;

    //Which file works best?
    let fileExt = '.mp4';
    const videoElement = document.createElement('video');
    if(videoElement.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"') === "probably"){
        fileExt = '.mp4';
    }else if(videoElement.canPlayType('video/webm; codecs="vp8, vorbis"') === "probably"){
        fileExt = '.webm';
    }else if(videoElement.canPlayType('video/ogg;codecs="theora, vorbis"') === "probably"){
        fileExt = '.ogg';
    }else if(videoElement.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"') === "maybe"){
        fileExt = '.mp4';
    }else if(videoElement.canPlayType('video/webm; codecs="vp8, vorbis"') === "maybe"){
        fileExt = '.webm';
    }else if(videoElement.canPlayType('video/ogg;codecs="theora, vorbis"') === "maybe"){
        fileExt = '.ogg';
    }

    return [yeOfWeek, fileExt, isMobile];
}

export default YeDisplay;