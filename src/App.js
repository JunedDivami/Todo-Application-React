import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Head from './Components/Head';
import List from './Components/List';

function App() {
  const [listData,setArray] = useState([]);

  const deleteTodo=(index)=>{
    const updatedList=listData.filter((element,CurrentIndex) => 
       (CurrentIndex!==index)
    );
    setArray(updatedList)
}
  // let todoArray = []
  return (
    <div className="App">
      <Head addTodo = {(title,desc) => setArray((prevState)=>([...prevState,{title,desc}]))}
            
      />
      {listData.map((each,index)=><List data={each}
      index={index}
      deleteTodo = { deleteTodo }
      />)}
    </div>
  );
}

export default App;
