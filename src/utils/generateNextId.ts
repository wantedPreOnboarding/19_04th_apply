type StateType = { id: number; [key: string]: unknown };

const generateNextId = (data: StateType[] | []) => {
  if (data.length === 0) return 0;
  return data[data.length - 1].id + 1;
};

export default generateNextId;
