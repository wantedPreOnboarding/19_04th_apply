const sliceMessage = (message: string, strLeng: number) => {
  if (message.length > strLeng) {
    return message.substring(0, strLeng) + '···';
  } else {
    return message;
  }
};

export default sliceMessage;
