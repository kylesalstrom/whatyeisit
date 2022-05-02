import YeDisplay from './YeDisplay';
import DateDisplay from './DateDisplay';
import SocialDisplay from './SocialDisplay';
import AuthorDisplay from './AuthorDisplay';

import './App.css';

export default function App() {
  const today = new Date('July 31, 1987');
  return (
    <div className="App">
      <YeDisplay date= {today}/>
      <DateDisplay date= {today}/>
      <SocialDisplay/>
      <AuthorDisplay/>
    </div>
  );
}