type Footnote = {
  key: string;
};

type Entity = {
  footnotes: Array<Footnote>;
};

type PrevState = {
  list: Array<string>;
  sorted: boolean;
};

type Payload = {
  entities: Array<Entity>;
  order: PrevState;
  setOrder: React.Dispatch<React.SetStateAction<PrevState>>;
};

const buildSortState = (payload: Payload): void => {
  const { entities, order, setOrder } = payload;
  const final: Array<string> = [];
  const sets: Record<string, Array<string>> = {};

  //  no need to sort if the full job is done
  if (order.sorted) {
    //  if we get called here, there is a bug
    console.error(
      'Function buildSortState was called but order.sorted is TRUE.',
    );

    return;
  }

  entities.forEach((entity) => {
    const { footnotes } = entity;

    if (footnotes.length > 0) {
      footnotes.forEach((footnote, index) => {
        const { key } = footnote;
        const stringOfIndex = String(index);

        if (stringOfIndex !== '') {
          if (!sets[stringOfIndex]) {
            sets[stringOfIndex] = [];
          }

          if (!sets[stringOfIndex].includes(key)) {
            sets[stringOfIndex].push(key);
          }
        }
      });
    }
  });

  Object.values(sets).forEach((set) => {
    set.forEach((item) => {
      if (!final.includes(item)) {
        final.push(item);
      }
    });
  });

  setOrder((prevState) => ({
    ...prevState,
    list: final,
    sorted: true,
  }));
};

export default buildSortState;
