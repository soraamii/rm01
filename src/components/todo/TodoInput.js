import { useState } from "react";

const TodoInput = ({addTodo}) => {

  const [todo, setTodo] = useState({title: ''})

  return ( 
    <div className="w-full bg-yellow-300">
      <div className="font-bold text-blue-400">INPUT</div>
      <div>
        <input 
        className="m-3 p-3 bg-blue-300"
        type="text"
        name="title"
        value={todo.title}
        onChange={(e) => {
          todo.title = e.target.value
          setTodo({...todo})
        }
        }/>
        <button 
        className="bg-blue-300 m-3 p-3 rounded-lg border-2 border-white"
        onClick={() => {
          // addTodo 함수가 호출 -> todo 객체가 인자로 전달 
          // -> 현재의 todo를 Todo 리스트에 추가
          addTodo(todo)
          
          // todo를 추가한 후 setTodo 함수 호출 -> todo 상태를 빈 객체로 재설정
          setTodo({title:''})
        }}
        >
          ADD
        </button>
      </div>
    </div>
   );
}
 
export default TodoInput;