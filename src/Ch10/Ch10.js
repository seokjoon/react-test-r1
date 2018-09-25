import React, {Component} from 'react';
import PateTemplate from './components/PageTemplate';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

class Ch10 extends Component {

	state = {
		input: '',
		todos: [
			{ id:0, text: 'foo', done: true },
			{ id:1, text: 'bar', done: false },
		],
	};

	id = 1;
	getId = () => { return ++this.id; };

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({ input: value, });
	};

	handleInsert = () => {
		const { todos, input } = this.state;
		const newTodo = {
			text: input,
			done: false,
			id: this.getId(),
		};
		this.setState({
			todos: [...todos, newTodo],
			input: '',
		});
	};

	handleRemove = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		this.setState({
			todos: [
				...todos.slice(0, index),
				...todos.slice(index + 1, todos.length),
			],
		});
	};

	handleToggle = (id) => {
		const {todos} = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		const toggled = {
			...todos[index],
			done: !todos[index].done,
		};
		this.setState({
			todos: [
				...todos.slice(0, index),
				toggled,
				...todos.slice(index + 1, todos.length),
			],
		});
	};

	render() {
		const { input, todos } = this.state;
		const { handleChange, handleInsert, handleRemove, handleToggle } = this;

		return (
			<div>
				<PateTemplate>
					<TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
					<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
				</PateTemplate>
			</div>
		);
	}
}

export default Ch10;