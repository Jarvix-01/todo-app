import listSvg from "./assets/img/list.svg"

function App() {
  return (
    <div className="todo-app">
      <div className="todo__sidebar">
        <div className="todo__logo">TODO LIST</div>
        <div className="todo__spacer"></div>
          <ul className="todo__list">
            <li>
              <i>
                <img src={listSvg} alt="list icon"/>
              </i>
              <span>Все задачи</span>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default App;
