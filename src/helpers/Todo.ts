interface TODO {
  text: string;
  category: string;
  id: string;
  done: boolean;
}

const createTodo = (text: string, category: string): TODO => ({
  text,
  category,
  id: text + Math.random() + Date.now(),
  done: false,
});

export { createTodo, TODO };
