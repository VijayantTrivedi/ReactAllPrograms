import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Animal from './components/Animal';
import {Add} from './components/Add'
import './components/Animal'
import Leap from './components/Leap';
import './components/Leap'
import Template from './components/Template';
import './components/Template'
import Example from './components/FunctionComponent';
import Student from './components/ClassComponent';
import Isogram from './components/Isogram';
import './components/Isogram'
import Fizz from './components/Fizz'
import Vowel from './components/Vowel';


function App() {
  return (
    <div className="container">
       {/* <Add />   */}
      {/* <Animal/> */}
       {/* <Leap />  */}
       {/* <Template />  */}
        {/* <Example />  */}
        {/* <Student roll="107"/>   */}
            <Isogram />     
         {/* <Fizz /> */}
           {/* <Vowel />   */}
    </div>
  );
}

export default App;
