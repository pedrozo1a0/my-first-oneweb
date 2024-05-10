
import './App.css';
import { TwiterFollowCard } from './TwiterFollowCard';

function App() {
  const userAt= (userName)=> `@${userName}`;
  return (
    <div className="App">
  <TwiterFollowCard functionAt= {userAt} isFollowing={true}  name="mister" userName="misterio" />
  <TwiterFollowCard functionAt= {userAt} isFollowing={false} name="soldier" userName="eisol" />
  <TwiterFollowCard  functionAt= {userAt} isFollowing name= "elonk" userName="musk" />
    </div>
  );
}

export default App;
