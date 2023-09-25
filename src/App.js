
import './App.css';
import counterStore from "./store/counter-store";
import {observer} from "mobx-react-lite";
import CounterStore from "./store/counter-store";


const App =observer(() =>{

       let {increment,decrement,count}=counterStore
   // increment=increment.bind(CounterStore)
   // decrement=decrement.bind(CounterStore)
    console.log(counterStore)
  return (
    <div className="App">
         <button onClick={()=>increment.bind(CounterStore)(1)} >+</button>
         <p>{count}</p>
          <button onClick={()=>decrement.bind(CounterStore)(1)}>-</button>
    </div>

)
})

export default App;
