import React, {Component} from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
	handleRemove = (id) => {
		const { TodosActions } = this.props;
		TodosActions.remove(id);
	};
	handleToggle = (id) => {
		const { TodosActions } = this.props;
		TodosActions.toggle(id);
	};

	render() {
		const { todos } = this.props;
		const { handleToggle, handleRemove } = this;

		return (
			<TodoList
				onRemove={handleRemove}
				onToggle={handleToggle}
				todos={todos}
			/>
		);
	}
}

export default connect(
	(state) => ({
		todos: state.todos,
	}),
	(dispatch) => ({
		TodosActions: bindActionCreators(todosActions, dispatch),
	}),
)(TodoListContainer);