type Complex = {
  group: string;
  subgroups: Array<string>;
};

type SortComplexListPayload = {
  complex: Array<Complex>;
};

const sortComplexList = (payload: SortComplexListPayload) => {
  const { complex } = payload;

  complex.sort((a, b) => {
    const { group: groupA } = a;
    const { group: groupB } = b;

    if (groupA < groupB) {
      return -1;
    }
    if (groupA > groupB) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  complex.forEach((item) => {
    const { subgroups } = item;

    subgroups.sort((a, b) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
  });
};

export default sortComplexList;
