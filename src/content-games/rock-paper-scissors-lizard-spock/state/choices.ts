const choiceLizard = 'lizard';
const choicePaper = 'paper';
const choiceRock = 'rock';
const choiceScissors = 'scissors';
const choiceSpock = 'spock';

const choices = {
  index: [choiceLizard, choicePaper, choiceRock, choiceScissors, choiceSpock],
  [choiceLizard]: {
    beats: [choicePaper, choiceSpock],
    valule: choiceLizard,
  },
  [choicePaper]: {
    beats: [choiceRock, choiceSpock],
    value: choicePaper,
  },
  [choiceRock]: {
    beats: [choiceLizard, choiceScissors],
    value: choiceRock,
  },
  [choiceScissors]: {
    beats: [choiceLizard, choicePaper],
    value: choiceScissors,
  },
  [choiceSpock]: {
    beats: [choiceRock, choiceScissors],
    value: choiceSpock,
  },
};

export default choices;
