import React from 'react';
//  chakra-ui
import { Link } from '@chakra-ui/react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
//  components
import StandardText from './standard-text';

const StandardContactAndCredits = () => (
  <>
    <StandardText>
      This privacy policy was created at{' '}
      <Link
        href="https://privacyterms.io/en/privacy-policy-generator/"
        isExternal
        sx={{ color: 'inherit', textDecoration: 'none' }}
        target="_blank"
        title="Privacy policy generator"
      >
        privacyterms.io privacy policy generator <ExternalLinkIcon mx="2px" />
      </Link>
      . If you have any questions about our Privacy Policy, please contact us
      via{' '}
      <Link href="mailto:rob.welan@beareact.dev">
        email <EmailIcon mx="2px" />
      </Link>
      .
    </StandardText>
  </>
);

export default StandardContactAndCredits;
