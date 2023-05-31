const choicePaper = 'paper';
const choiceRock = 'rock';
const choiceScissors = 'scissors';

const choices = {
  index: [choicePaper, choiceRock, choiceScissors],
  [choicePaper]: {
    beats: choiceRock,
    value: choicePaper,
  },
  [choiceRock]: {
    beats: choiceScissors,
    value: choiceRock,
  },
  [choiceScissors]: {
    beats: choicePaper,
    value: choiceScissors,
  },
};

export default choices;
