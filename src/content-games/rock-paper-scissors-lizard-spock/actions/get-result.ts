interface Payload {
  computerDecision: {
    beats: Array<string>;
    value: string;
  };
  userDecision: {
    beats: Array<string>;
    value: string;
  };
}

const getResult = (payload: Payload) => {
  const { computerDecision, userDecision } = payload;

  if (computerDecision.beats.includes(userDecision.value)) {
    return {
      judgement: 'Computer wins…',
      computer: 1,
      user: 0,
    };
  }

  if (userDecision.beats.includes(computerDecision.value)) {
    return {
      judgement: 'You win!!!',
      computer: 0,
      user: 1,
    };
  }

  return {
    judgement: 'It’s a tie.',
    computer: 0,
    user: 0,
  };
};

export default getResult;
