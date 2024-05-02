//  types
import { TypeComplexLists } from '../../state/types';

type PayloadGenerateComplexList = {
  list: Array<TypeComplexLists>;
  group: string;
  subgroup: string;
};

const generateComplexList = (payload: PayloadGenerateComplexList) => {
  const { list, group, subgroup } = payload;

  const iG = list.findIndex(
    (e) => e.group.toLowerCase() === group.toLowerCase(),
  );

  if (iG > -1) {
    //  group was found, only need to add subgroup maybe
    const sG = list[iG].subgroups.findIndex(
      (e) => e.toLowerCase() === subgroup,
    );

    if (sG === -1) {
      //  subgroup was not found. time to add subgroup
      list[iG].subgroups.push(subgroup);
    }

    return;
  }

  list.push({ group, subgroups: [subgroup] });
};

export default generateComplexList;
