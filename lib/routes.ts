import api from './api';

export const getTodo = async () => {
  try {
    const todo = await api.get("/todos/1");
    return todo;
  } catch (err) {
    throw Error;
  }
}