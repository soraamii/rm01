const TodoList = ({todos, requestView, saveAll}) => {
  return ( 
    <div className="w-full bg-blue-300">
      <div className="font-bold text-yellow-400">LIST</div>
      <ul>
        {/* t는 todos 배열의 각 요소를 나타내는 변수 */}
        {todos.map( t => 
        <li key={t.tno} 
        // onClick 이벤트핸들러 사용해서 click 시에 requestView(t.tno) 함수 호출
        onClick= {() => requestView(t.tno)}>
          {t.tno} {t.title}
        </li>)}
      </ul>
      <button
        className="bg-yellow-300 m-2 p-2 rounded-lg border-2 border-white"
        onClick={() => saveAll(todos)}>
          SAVE
       </button>
    </div>
   );
}
 
export default TodoList;