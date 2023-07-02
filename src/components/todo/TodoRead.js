import { useEffect, useState } from "react";

const TodoRead = ({current, modify, remove}) => {

  // 전달 받는 current가 여기서는 상태가 되어야 함
  // 원래 상태를 props로 받아서 새로운 상태를 넣어 줌
  const [todo, setTodo] = useState(current)

  // 비동기 통신이면 무조건 useEffect
  // 상태가 유지되는 값이 있는데 props에 따라서 값을 바꿔주고 싶을 때 사용
  useEffect(() => {
    setTodo(current)
  }, [current])

  if(!todo) {
    return <div className="w-full bg-red-300">Not Available</div>
  }

  
  return ( 
    <div className="w-full bg-red-300">
      <div className="font-bold text-blue-200">READ</div>
      <div className="font-bold text-sm">
        {todo.tno}
      </div>
      <div>
        <input
        className="m-3 p-3 bg-blue-200"
        type="text"
        name="title"
        value={todo.title}
        onChange={(e) => {
          todo.title = e.target.value
          setTodo({...todo})
        }}/>
        <button
        className="bg-blue-300 m-2 p-2 rounded-lg border-2 border-white"
        onClick={() => modify(todo)}>
          MOD            
        </button>
        <button
        className="bg-red-300 m-2 p-2 rounded-lg border-2 border-white"
        onClick={() => remove(todo.tno)}>
          DEL            
        </button>
      </div>
    </div>
   );
}
 
export default TodoRead;