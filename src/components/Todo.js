import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 15px",
    padding: "10px",
    border: "1px solid #fff",
    borderRadius: "5px",
    alignItems: "center",
  },
  input: {
    cursor: "pointer",
  },
};

function Todo({ todo, onChange }) {
  const { removeTodo } = useContext(Context);

  const classes = [];
  if (todo.complited) {
    classes.push("done");
  }

  return (
    <li style={styles.li} className={classes}>
      <input
        checked={todo.complited}
        style={styles.input}
        type="checkbox"
        onChange={() => onChange(todo.id)}
      />

      {todo.title}

      <button
        className="todo__button--remove"
        onClick={removeTodo.bind(null, todo.id)}
      >
        -
      </button>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Todo;
