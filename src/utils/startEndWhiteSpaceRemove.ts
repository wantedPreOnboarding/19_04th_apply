const startEndWhiteSpaceRemove = (str: string) => {
  return str.replace(/^\s+|\s+$/gm, '');
};

export default startEndWhiteSpaceRemove;
