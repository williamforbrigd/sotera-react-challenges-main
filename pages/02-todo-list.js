import React from "react";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";

const checklist = [
  { text: "Go outside and dance like a cowboy", checked: false },
  {
    text: "Eat a mouthful of crackers and then try and whistle",
    checked: false,
  },
  { text: "Get some coffee", checked: false },
  { text: "Drink the coffee", checked: false },
  { text: "Turn coffee into code", checked: false },
];

export const TodoList = () => {
  const [todos, setTodos] = React.useState(checklist);
  const [todoInput, setTodoInput] = React.useState("");
  const lastChecked = React.useRef(null);

  const handleCheck = (index, event) => {
    const newTodos = [...todos];
    if (event.nativeEvent.shiftKey && lastChecked.current !== null) {
      const start = Math.min(lastChecked.current, index);
      const end = Math.max(lastChecked.current, index);
      for (var i = start; i < end + 1; i++) {
        newTodos[i].checked = true;
      }
    } else {
      newTodos[index].checked = !newTodos[index].checked;
      lastChecked.current = index;
    }
    setTodos(newTodos);
  };

  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

  // Modify the code to meet the requirements:
  // 1. The item text should have a line-through style when belonging checkbox is checked
  // 2. Check the checkbox it clicking on the item text
  // 2. Holding shift and clicking on a checkbox should check all checkboxes between the last checked checkbox and the current one
  // 3. Clicking 'Save' should remove all checked items from the list
  // 4. Clicking 'Add' should add a new item to the list
  // 5. Save the list to local storage so that it is persisted between page reloads

  const handleSave = () => {
    const newTodos = [...todos].filter((todo) => !todo.checked);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAdd = () => {
    const newTodos = [...todos];
    const isFound = newTodos.find((element) => element.text === todoInput);
    if (isFound === undefined && todoInput !== "") {
      newTodos.push({ text: todoInput, checked: false });
    }
    setTodos(newTodos);
    setTodoInput("");
  };

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) setTodos(items);
  }, []);

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenge in the <code>pages/02-todo-list.js</code> file.
        <br />
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>TODO List</h2>

          <ul className={todoStyles.ul}>
            {todos.map((item, index) => (
              <>
                <li
                  className={todoStyles.li}
                  key={index}
                  style={{
                    textDecorationLine: item.checked ? "line-through" : "none",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => handleCheck(index, e)}
                  />
                  <span onClick={(e) => handleCheck(index, e)}>
                    {item.text}
                  </span>
                </li>

                {index < todos.length - 1 && <div className={styles.divider} />}
              </>
            ))}
          </ul>

          <button
            className={styles.actionButton}
            style={{ width: "100%" }}
            onClick={handleSave}
          >
            Save list
          </button>
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          <input
            value={todoInput}
            className={todoStyles.input}
            type="text"
            class="add-item"
            placeholder="Add new item"
            onChange={(e) => setTodoInput(e.target.value)}
          />

          <button
            className={styles.actionButton}
            style={{ width: "100%" }}
            onClick={handleAdd}
          >
            Add to list
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
