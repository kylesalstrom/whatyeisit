import { useEffect, useState } from 'react'


const YeDisplay = ({date}) => {
    const [yeOfWeek, fileExt, isMobile] = initialize(date);
    const [isMuted, setIsMuted] = useState(true);
    const handleClick = () => setIsMuted(!isMuted);

    useEffect(() => {
        if(isMobile){
            const video = document.getElementById('yeVideo');
            const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
            video.autobuffer = true;
            if(isAndroid) {
                //document.getElementById('imgClickFor').style.visibility = "hidden";
                //video.setAttribute("src", 'video/'+ye[n]+'_Final_droid.mp4');
                video.load();
                video.loop = false; 
                video.addEventListener('ended', function() { 
                    video.currentTime=0.1; video.play(); }, false);
                video.play();
                video.controls = true;
                video.autoplay = true;
                video.muted = false;
            }
            else
            {
                video.load();
                video.autoplay = true;
                video.playsInline = true;
                video.play();
            }
        }
    }, [isMobile]);

    return (
        <div>
            <video 
                id="yeVideo"
                onClick={handleClick}
                src={`https://d2desgpiu5lrdz.cloudfront.net/video/${yeOfWeek}_Final${fileExt}`}
                muted={isMuted} 
                loop 
                autoPlay/>
            <img
                onClick={handleClick}
                src={`https://d2desgpiu5lrdz.cloudfront.net/image/otherPics/${isMuted ? '' : 'dont'}clickVideo.png`} 
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