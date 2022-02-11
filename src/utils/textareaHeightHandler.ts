const textareaHeightHandler = (textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>) => {
  if (textareaRef && textareaRef.current) {
    textareaRef.current.style.height = '0px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }
};

export default textareaHeightHandler;
