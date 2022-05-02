import SafeImage from './SafeImage';

const DateDisplay = () => {
    return (
        <div>
            <a href="http://www.itscolortime.com" target="_blank" rel="noreferrer" title="It's Color Time">
                <SafeImage
                    fileName={'https://d2desgpiu5lrdz.cloudfront.net/image/otherPics/nick.png'} 
                    className='smlImg' 
                    alt='Nick Stokes'/>
            </a>
            <a href="http://cargocollective.com/ericswanson" target="_blank" rel="noreferrer" title="Eric Swanson">
                <SafeImage
                    fileName={'https://d2desgpiu5lrdz.cloudfront.net/image/otherPics/eric.png'} 
                    className='smlImg' 
                    alt='Eric Swanson'/>
            </a>
        </div>
    );
}

export default DateDisplay;