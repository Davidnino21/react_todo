import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  return (
    <div className="app-container">
      <div className="todo-container">
        <Header />
        <Form />
        <Task />
      </div>
    </div>
  );
}

export default App;
