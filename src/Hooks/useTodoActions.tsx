import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../modules/todos";

export default function useTodoActions(id: number) {
    const dispatch = useDispatch();

    const onToggle = useCallback(
        () => dispatch(todosActions.toggleTodo(id))
    ,[dispatch, id]);
    const onRemove = useCallback(
        () => dispatch(todosActions.removeTodo(id))
    ,[dispatch, id]);

    return {onToggle, onRemove};
}