const startEndWhiteSpcaeRemove = (str: string) => {
  return str.replace(/^\s+|\s+$/gm, '');
};

export default startEndWhiteSpcaeRemove;
