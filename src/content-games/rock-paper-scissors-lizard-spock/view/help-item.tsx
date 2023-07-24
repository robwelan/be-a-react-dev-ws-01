import React, { ReactComponentElement, ReactElement } from 'react';
//  chakra-ui
import { Icon, ListItem, ListIcon, Tooltip } from '@chakra-ui/react';

type Props = {
  action: string;
  icons: {
    loser: {
      icon: ReactElement;
      label: string;
    };
    winner: {
      icon: ReactElement;
      label: string;
    };
  };
};

const HelpItem = (props: Props) => {
  const { action, icons, show = {} } = props;
  const { loser: iconLoser, winner: iconWinner } = icons;
  const { icon: asLoserIcon, label: asLoserLabel } = iconLoser;
  const { icon: asWinnerIcon, label: asWinnerLabel } = iconWinner;
  const { final: showFinal = false } = show;

  return (
    <ListItem>
      <Tooltip label={asWinnerLabel} fontSize="sm">
        <span>
          <ListIcon aria-label={asWinnerLabel} as={asWinnerIcon} />
        </span>
      </Tooltip>

      {`${action} `}

      <Tooltip label={asLoserLabel} fontSize="sm">
        <span>
          <Icon aria-label={asLoserLabel} as={asLoserIcon} />
        </span>
      </Tooltip>
      {showFinal ? '; and as it always has' : ''}
    </ListItem>
  );
};

export default HelpItem;
