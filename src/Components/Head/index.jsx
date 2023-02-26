import React, {useState} from 'react';
import './Head.css'

export default function Head({addTodo}){
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const inp1Fun = event => {
        setTitle(event.target.value);
    };

    const inp2Fun = event => {
        setDesc(event.target.value);
    };

    function callingParentAddTodoFun(){
        addTodo(title,desc);
        setTitle('');
        setDesc('');
    }
    
    return(
        <header>
            <input type="text" className='input' placeholder='Enter Task Title' value={title} onChange = {inp1Fun} />
            <input type="text" className='input' placeholder='Enter Task Description' value={desc} onChange = {inp2Fun} />
            <button className='input-button' onClick={()=>callingParentAddTodoFun()}>Add</button>
        </header>
    );
}