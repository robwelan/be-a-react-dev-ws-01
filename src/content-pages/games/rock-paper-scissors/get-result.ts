interface Payload {
  computerDecision: {
    beats: string;
    value: string;
  };
  userDecision: string;
}

const getResult = (payload: Payload) => {
  const { computerDecision, userDecision } = payload;

  if (computerDecision.value === userDecision) {
    return {
      judgement: 'It’s a tie.',
      computer: 0,
      user: 0,
    };
  }

  if (computerDecision.beats === userDecision) {
    return {
      judgement: 'Computer wins…',
      computer: 1,
      user: 0,
    };
  }

  return {
    judgement: 'You win!!!',
    computer: 0,
    user: 1,
  };
};

export default getResult;
