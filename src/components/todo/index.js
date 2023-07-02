import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import TodoInput from "./TodoInput";
import TodoRead from "./TodoRead";

const Todo = () => {

  // TodoList에 뿌려주는 상태
  const [todos, setTodos] = useState([])
  // TodoRead에 뿌려주는 상태
  const [current, setCurrent] = useState(null)

  // ==============List====================

  // useEffect는 컴포넌트가 렌더링될 때마다 실행
  useEffect(() => {

    // localStoarge에서 데이터를 가져와 todos 키로 저장된 데이터를 가져온 후 상태 설정
    const jsonStr = localStorage.getItem("todos")

    //JSON.parse()로 문자열을 파싱 -> js 객체로 변환 -> setTodos로 todos 상태 업데이트
    if(jsonStr) {
      setTodos(JSON.parse(jsonStr))
    }

    // 빈 배열을 전달하면 컴포넌트가 처음 렌더링될 때만 useEffect 실행
  }, [])


  // TodoList에서 목록 볼 수 있는 함수
  const requestView = (tno) => {
    // tno가 맞는 배열을 찾아 냄
    const target = todos.filter(todo => todo.tno === tno)[0]
    console.log("requestView", target)

    // 리랜더링이 되면 current의 값을 target 값으로 바꿔줌
    setCurrent(target)    
  }

  // ==============SaveAll====================

  const saveAll = () => {
    
    const str = JSON.stringify(todos)

    localStorage.setItem("todos", str)
  }

  // ==============Input====================

  const addTodo = (todoObj) => {
    console.log(uuid(), todoObj)

    // todos의 상태 업데이트
    setTodos([...todos, {tno:uuid(), ...todoObj}])
  }

  // ==============Modify====================

  const modify = (modifiedTodo) => {

    const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]

    target.title = modifiedTodo.title

    setTodos([...todos])
    setCurrent(null)
  }

  // ==============Remove====================

  const remove = (tno) => {

    // tno와 동일하지 않은 todo.tno 데이터만 출력되게 설정
    setTodos( todos.filter(todo => todo.tno !== tno) )
    setCurrent(null)

  }



  return ( 
    <>
    <div className="text-5xl text-blue-300">TODO</div>
    <div>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoRead current={current} modify={modify} remove={remove}></TodoRead>
      <TodoList todos={todos} requestView={requestView} saveAll={saveAll}></TodoList>
    </div>
    </>
   );
}
 
export default Todo;
