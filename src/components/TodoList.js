import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

// Styles will be desribing in different way because of  studying purpose
const styles = {
  ul: {
    listStyle: "none",
    margin: "0",
    padding: "15px",
    display: "block",
    width: "100%",
    maxWidth: "400px",
  },
  li: { padding: "10px" },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
