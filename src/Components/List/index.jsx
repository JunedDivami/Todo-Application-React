import './list.css'

export default function List({data,deleteTodo,index}) {
  return (
        <details className="list">
          <summary>Todo: {data.title}</summary>
          <p><strong>Description: </strong>{data.desc}</p>
          <button className='delete-button' onClick={()=>deleteTodo(index)}>Delete</button>
        </details>
  );
}
