import React from 'react';
//  chakra-ui
import {
  Button,
  Icon,
  List,
  ListItem,
  ListIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
//  react icons
import { FaHandLizard } from '@react-icons/all-files/fa/FaHandLizard';
import { FaHandPaper } from '@react-icons/all-files/fa/FaHandPaper';
import { FaHandRock } from '@react-icons/all-files/fa/FaHandRock';
import { FaHandScissors } from '@react-icons/all-files/fa/FaHandScissors';
import { FaHandSpock } from '@react-icons/all-files/fa/FaHandSpock';
//  local components
import HelpItem from './help-item';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GameHelp = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game Help</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <HelpItem
                action="cuts"
                icons={{
                  loser: {
                    icon: FaHandPaper,
                    label: 'paper',
                  },
                  winner: {
                    icon: FaHandScissors,
                    label: 'scissors',
                  },
                }}
              />

              <HelpItem
                action="covers"
                icons={{
                  loser: {
                    icon: FaHandRock,
                    label: 'rock',
                  },
                  winner: {
                    icon: FaHandPaper,
                    label: 'paper',
                  },
                }}
              />

              <HelpItem
                action="crushes"
                icons={{
                  loser: {
                    icon: FaHandLizard,
                    label: 'lizard',
                  },
                  winner: {
                    icon: FaHandRock,
                    label: 'rock',
                  },
                }}
              />

              <HelpItem
                action="poisons"
                icons={{
                  loser: {
                    icon: FaHandSpock,
                    label: 'spock',
                  },
                  winner: {
                    icon: FaHandLizard,
                    label: 'lizard',
                  },
                }}
              />

              <HelpItem
                action="smashes"
                icons={{
                  loser: {
                    icon: FaHandScissors,
                    label: 'scissors',
                  },
                  winner: {
                    icon: FaHandSpock,
                    label: 'spock',
                  },
                }}
              />

              <HelpItem
                action="decapitates"
                icons={{
                  loser: {
                    icon: FaHandLizard,
                    label: 'lizard',
                  },
                  winner: {
                    icon: FaHandScissors,
                    label: 'scissors',
                  },
                }}
              />

              <HelpItem
                action="eats"
                icons={{
                  loser: {
                    icon: FaHandPaper,
                    label: 'paper',
                  },
                  winner: {
                    icon: FaHandLizard,
                    label: 'lizard',
                  },
                }}
              />

              <HelpItem
                action="disproves"
                icons={{
                  loser: {
                    icon: FaHandSpock,
                    label: 'spock',
                  },
                  winner: {
                    icon: FaHandPaper,
                    label: 'paper',
                  },
                }}
              />

              <HelpItem
                action="vaporizes"
                icons={{
                  loser: {
                    icon: FaHandRock,
                    label: 'rock',
                  },
                  winner: {
                    icon: FaHandSpock,
                    label: 'spock',
                  },
                }}
                show={{ final: true }}
              />

              <HelpItem
                action="crushes"
                icons={{
                  loser: {
                    icon: FaHandScissors,
                    label: 'scissors',
                  },
                  winner: {
                    icon: FaHandRock,
                    label: 'rock',
                  },
                }}
              />
            </List>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameHelp;
