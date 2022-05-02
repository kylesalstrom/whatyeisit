import SafeImage from './SafeImage';
import { useState } from 'react'


const YeDisplay = ({date}) => {
    const [isMuted, setIsMuted] = useState(true);

    const yeOfWeek = ye[(date || new Date()).getDay()];
    const fileExt = detectIdealFileType();

    const handleClick = () => {
        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        if(!isAndroid) {
            setIsMuted(!isMuted);
        }
    }

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

const ye = ['SunYe','MonYe','TuesYe','WednesYe','ThursYe','FriYe','SaturYe']
const detectIdealFileType = () => {
    const videoElement = document.createElement('video');
    
    if(videoElement.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"') === "probably"){
        return '.mp4';
    }else if(videoElement.canPlayType('video/webm; codecs="vp8, vorbis"') === "probably"){
        return '.webm';
    }else if(videoElement.canPlayType('video/ogg;codecs="theora, vorbis"') === "probably"){
        return '.ogg';
    }else if(videoElement.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"') === "maybe"){
        return '.mp4';
    }else if(videoElement.canPlayType('video/webm; codecs="vp8, vorbis"') === "maybe"){
        return '.webm';
    }else if(videoElement.canPlayType('video/ogg;codecs="theora, vorbis"') === "maybe"){
        return '.ogg';
    }
    return '.mp4'
}

export default YeDisplay;