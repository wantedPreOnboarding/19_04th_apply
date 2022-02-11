const enterSubmitCheck = (event: React.KeyboardEvent<HTMLElement>) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    return true;
  } else return false;
};

export default enterSubmitCheck;
