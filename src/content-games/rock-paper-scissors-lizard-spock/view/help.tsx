import React from 'react';
//  chakra-ui
import {
  Button,
  Icon,
  IconButton,
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
              <ListItem>
                <ListIcon aria-label="scissors" as={FaHandScissors} />
                cuts <Icon aria-label="paper" as={FaHandPaper} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="paper" as={FaHandPaper} />
                covers <Icon aria-label="rock" as={FaHandRock} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="rock" as={FaHandRock} />
                crushes <Icon aria-label="lizard" as={FaHandLizard} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="lizard" as={FaHandLizard} />
                poisons <Icon aria-label="spock" as={FaHandSpock} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="spock" as={FaHandSpock} />
                smashes <Icon aria-label="scissors" as={FaHandScissors} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="scissors" as={FaHandScissors} />
                decapitates <Icon aria-label="lizard" as={FaHandLizard} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="lizard" as={FaHandLizard} />
                eats <Icon aria-label="paper" as={FaHandPaper} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="paper" as={FaHandPaper} />
                disproves <Icon aria-label="spock" as={FaHandSpock} />
              </ListItem>
              <ListItem>
                <ListIcon aria-label="spock" as={FaHandSpock} />
                vaporizes <Icon aria-label="rock" as={FaHandRock} />; and as it
                always has
              </ListItem>
              <ListItem>
                <ListIcon aria-label="rock" as={FaHandRock} />
                crushes <Icon aria-label="scissors" as={FaHandScissors} />
              </ListItem>
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
