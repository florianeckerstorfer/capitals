// Implementation based on
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array#6274398
const shuffle = (array: any[]): any[] => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export default shuffle;
