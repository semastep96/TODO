const createTodo = (text, category) => ({
  text,
  category,
  id: text + Math.random() + Date.now(),
  done: false,
});

export { createTodo };
