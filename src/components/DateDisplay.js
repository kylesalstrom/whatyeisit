import SafeImage from './SafeImage';

const DateDisplay = ({date}) => {
  const monthNumber = (date || new Date()).getMonth();
  const dateNumber = (date || new Date()).getDate();
  return (
    <div>
      <SafeImage
        id='month' 
        fileName={`image/months/${monthNumber}.png`} 
        className='bigImg' 
        alt='month graphic'/>
      <SafeImage
        id='day' 
        fileName={`image/numbers/${dateNumber}.png`} 
        className='bigImg' 
        alt='date graphic'/>
    </div>
  );
}

export default DateDisplay;