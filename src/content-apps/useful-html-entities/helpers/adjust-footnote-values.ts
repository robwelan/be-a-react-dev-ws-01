//  state types
import { Entities, EntitiesState, Entity } from '../state/types';

type Footnote = {
  key: string;
};

type Payload = {
  entities: Entities;
  footnotes: {
    state: {
      footnotes: Array<Footnote>;
      sorted: boolean;
    };
    setState: React.Dispatch<React.SetStateAction<EntitiesState>>;
  };
  list: Array<string>;
  setEntities: React.Dispatch<React.SetStateAction<EntitiesState>>;
};

const adjustFootnoteValues = (payload: Payload) => {
  const { entities, footnotes, list, setEntities } = payload;
  const newEntities = JSON.parse(JSON.stringify(entities));
  const newFootnotes = JSON.parse(JSON.stringify(footnotes.state.footnotes));

  //  no need to sort if the full job is done
  if (footnotes.state.sorted) {
    //  if we get called here, there is a bug
    console.error(
      'Function adjustFootnoteValues was called but footnotes.state.sorted is TRUE.',
    );

    return;
  }

  newEntities.forEach((entity: Entity) => {
    const { footnotes } = entity;

    if (footnotes.length > 0) {
      footnotes.forEach((footnote) => {
        //  find footnote key in list
        const index = list.indexOf(footnote.key);

        if (index !== -1) {
          footnote.value = index + 1;
        }
      });
    }
  });

  setEntities((prevState: EntitiesState) => ({
    ...prevState,
    entities: newEntities,
  }));

  newFootnotes.sort(
    (a: Footnote, b: Footnote) => list.indexOf(a.key) - list.indexOf(b.key),
  );

  footnotes.setState((prevState) => ({
    ...prevState,
    footnotes: newFootnotes,
    sorted: true,
  }));
};

export default adjustFootnoteValues;
