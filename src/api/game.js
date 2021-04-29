import axios from 'axios';

export const NewGame = async ({level}) => {
  return await axios.post('/new-game', {
      person: 'red',
      computer: 'blue',
      level : level
  });
};

export const test = async (boardString) => {
  return await axios.post('/test', {
    board: boardString
  });
};
