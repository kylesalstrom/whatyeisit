const SocialDisplay = () => {
  return (
    <ul className="share-buttons">
        <li>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwhatyeisit.com&t=What%20Ye%20is%20it%3F" target="_blank" rel="noreferrer" title="Share on Facebook">
                <img
                    src={'https://d2desgpiu5lrdz.cloudfront.net/image/socialLogos/face.png'} 
                    className='medImg' 
                    alt='share on facebook'/>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwhatyeisit.com&text=What%20Ye%20is%20it%3F:%20http%3A%2F%2Fwhatyeisit.com" target="_blank" rel="noreferrer" title="Tweet">
                <img
                    src={'https://d2desgpiu5lrdz.cloudfront.net/image/socialLogos/twitter.png'} 
                    className='medImg' 
                    alt='share on twitter'/>
            </a>
        </li>
        <li>
            <a href="http://www.tumblr.com/share?v=3&u=http%3A%2F%2Fwhatyeisit.com&t=What%20Ye%20is%20it%3F&s=" target="_blank" rel="noreferrer" title="Post to Tumblr">
                <img
                    src={'https://d2desgpiu5lrdz.cloudfront.net/image/socialLogos/tumblr.png'} 
                    className='medImg' 
                    alt='share on tumblr'/>
            </a>
        </li>
        <li>
            <a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwhatyeisit.com&description=Every%20wonder%20what%20'Ye%20is%3F%20We%20have%20the%20answer." target="_blank" rel="noreferrer" title="Pin it">
                <img
                    src={'https://d2desgpiu5lrdz.cloudfront.net/image/socialLogos/pinterest.png'} 
                    className='medImg' 
                    alt='share on pinterest'/>
            </a>
        </li>
        <li>
            <a href="http://www.reddit.com/submit?url=http%3A%2F%2Fwhatyeisit.com&title=What%20Ye%20is%20it%3F" target="_blank" rel="noreferrer" title="Submit to Reddit">
                <img
                    src={'https://d2desgpiu5lrdz.cloudfront.net/image/socialLogos/reddit.png'} 
                    className='medImg' 
                    alt='share on reddit'/>
            </a>
        </li>
    </ul>
  );
}

export default SocialDisplay;