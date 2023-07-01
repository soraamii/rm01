import { useState } from "react";

const Todo = () => {

  const [todos, setTodos] = useState([])
  const [current, setCurrent] = useState(null)


  // TodoList에서 목록 볼 수 있는 함수
  const requestView = (tno) => {
    // tno가 맞는 배열을 찾아 냄
    const target = todos.filter(todo => todo.tno === tno)[0]
    console.log("requestView", target)

    // 리랜더링이 되면 current의 값을 target으로 바꿔줌
    setCurrent(target)    
  }


  return ( 
    <>
    <div className="text-5xl text-blue-300">Todo List</div>
    <div>
      
    </div>
    </>
   );
}
 
export default Todo;
