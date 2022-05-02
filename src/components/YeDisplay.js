import SafeImage from './SafeImage';

const ye = ['SunYe','MonYe','TuesYe','WednesYe','ThursYe','FriYe','SaturYe']
const YeDisplay = ({date}) => {
    const yeOfWeek = ye[(date || new Date()).getDay()];
    const videoElement = document.createElement('video');
    let fileExt;
    
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

    function muteAudio() {
        var video = document.getElementById('video');
        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        if(!isAndroid) {
            if (video.muted === false) {
                video.muted = true;
            }
            else {
                video.muted = false;
            }
        }
    }

    return (
        <div>
            <video 
                id='video' 
                src={`https://d2desgpiu5lrdz.cloudfront.net/video/${yeOfWeek}_Final${fileExt}`}
                onClick={muteAudio} 
                muted loop autoPlay />
            <SafeImage
                id='imgClickFor' 
                fileName={'image/otherPics/clickVideo.png'} 
                className='tnyImg' 
                alt='click to hear me'/>
        </div>
    );
}

export default YeDisplay;