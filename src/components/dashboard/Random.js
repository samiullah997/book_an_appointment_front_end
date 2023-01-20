const Random = (array) => {
  if (array.length < 1) return -1;

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default Random;
