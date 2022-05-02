import YeDisplay from './YeDisplay';
import DateDisplay from './DateDisplay';
import SocialDisplay from './SocialDisplay';
import AuthorDisplay from './AuthorDisplay';

import './App.css';

export default function App() {
  const today = new Date();
  return (
    <div className="App">
      <YeDisplay date= {today}/>
      <DateDisplay date= {today}/>
      {/*<SocialDisplay/>*/}
      <AuthorDisplay/>
    </div>
  );
}