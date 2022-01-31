import logo from './logo.svg';
import './App.css';
import Joke from "./Joke"


function App() {
  return (
    <div className="App">
      <Joke 
          title="This is the first title of joke"
          joket="this is the actual joke"
      />
       <Joke 
          title="This is the second title of joke"
          joket="blabla"
      />
       <Joke 
          title="This is the third title of joke"
          joket="jiji"
      />
       <Joke 
          title="This is the fourth title of joke"
          joket="jojo"
      />
      
    </div>
  );
}

export default App;
