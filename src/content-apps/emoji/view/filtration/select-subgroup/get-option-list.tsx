import React from 'react';

const getOptionList = (payload) => {
  const { complex, group, organisation } = payload;

  if (group === '') {
    return (
      <>
        {organisation.simple.subgroups.map((item, index) => {
          return (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </>
    );
  }

  const selectedGroup = complex.filter((item) => {
    const { group: groupItem } = item;

    return groupItem.toLowerCase() === group.toLowerCase();
  });

  if (selectedGroup.length === 1) {
    return (
      <>
        {selectedGroup[0].subgroups.map((item, index) => {
          return (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </>
    );
  }

  return <></>;
};

export default getOptionList;
