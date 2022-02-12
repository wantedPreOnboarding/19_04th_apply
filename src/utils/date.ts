export const formattedDate = (() => {
  const formatDigits = (num: number) => (num < 10 ? '0' + num : '' + num);

  return (timestamp: number) => {
    const date = new Date(timestamp);

    return `${date.getFullYear()}-${formatDigits(date.getMonth() + 1)}-${formatDigits(
      date.getDate(),
    )} ${formatDigits(date.getHours())}:${formatDigits(date.getMinutes())}:${formatDigits(
      date.getSeconds(),
    )}`;
  };
})();
