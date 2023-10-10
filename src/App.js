
import './App.css';

import { LeftMenu } from './Components/LeftMenu/LeftMenu'
import { MainContainer } from './Components/MainContainer/MainContainer'
import { RightMenu } from './Components/RightMenu/RightMenu'

function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>

      <div className="background"></div>
    </div>
  );
}

export default App;
