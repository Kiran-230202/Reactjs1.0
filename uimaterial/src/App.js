import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import DateCompo from './DateCompo';
import MouseEvent from './MouseEvent';
import Counter from './Counter';
import CounterUseReducer from './CounterUseReducer';
import ColorChange from './ColorChange';
import ModalCompo from './ModalCompo';

function App() {
  return (
    <>
        <div className="App">
     <Demo/>
     <DateCompo/>
    </div>
    <MouseEvent/>
    <Counter/>
    <CounterUseReducer/>
    <ColorChange/>
    <ModalCompo/>
    </>

  );
}

export default App;
