import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

function TodoApp(props) {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const url = "http://localhost:8000/todo";
  useEffect(()=>{
    axios.get(url).then(res => {
      setTasks(res.data);
    })
  }, [])

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  async function addTask(name) {
      //axios
      const resp = await axios.post(url, {name})
      let insertId = resp.data.insertedId;
      const newTask = { id: `todo-${insertId}`, name, completed: false };
      setTasks([...tasks, newTask]);
    }
   


  async function toggleTaskCompleted(id) {
    const findTask = tasks.find((task) => id === task.id)
    //axios
    //await
    const resp = await axios.put(url + "/" + id, { completed : !findTask.completed });
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  async function deleteTask(id) {
    const resp = await axios.delete(url + "/" + id)
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  async function editTask(id, name) {
    const resp = await axios.put(url + "/" + id , {name});
    const editedTaskList = tasks.map((task) => {
      // 이 할 일이 편집된 작업과 동일한 ID를 갖는 경우
      if (id === task.id) {
        //
        return { ...task, name: name };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        name={task.name}
        completed={task.completed}
        id={task.id}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default TodoApp;
