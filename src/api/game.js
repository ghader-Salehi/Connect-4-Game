import axios from 'axios';

export const NewGame = async () => {
  return await axios.post('/new-game', {
      person: 'blue',
      computer: 'red'
  });
};

export const test = async (boardString) => {
  return await axios.post('/test', {
    board: boardString
  });
};
