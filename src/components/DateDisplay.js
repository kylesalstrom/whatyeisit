const DateDisplay = ({date}) => {
  const monthNumber = (date || new Date()).getMonth();
  const dateNumber = (date || new Date()).getDate();
  return (
    <div>
      <img
        id='month' 
        src={`https://d2desgpiu5lrdz.cloudfront.net/image/months/${monthNumber}.png`} 
        className='bigImg' 
        alt='month graphic'/>
      <img
        id='day' 
        src={`https://d2desgpiu5lrdz.cloudfront.net/image/numbers/${dateNumber}.png`} 
        className='bigImg' 
        alt='date graphic'/>
    </div>
  );
}

export default DateDisplay;