import React from 'react';
//  components
import StandardPageContent from '../../components/standard-page-content';
import StandardText from './components/standard-text';
//  styles
import './styles.css';

const LegalPrivacy = () => {
  return (
    <StandardPageContent title="Cookies">
      <>
        <StandardText>
          To enrich and perfect your online experience, be-a-react-dev uses
          "Cookies", similar technologies and services provided by others (eg.
          our affiliate / advertising partners) to display personalised content,
          appropriate advertising and store your preferences on your computer.
        </StandardText>
        <StandardText>
          A cookie is a string of information that a website stores on a
          visitor's computer, and that the visitor's browser provides to the
          website each time the visitor returns. be-a-react-dev uses cookies to
          help be-a-react-dev identify and track visitors, their usage of
          https://beareact.dev, and their website access preferences.
          be-a-react-dev visitors who do not wish to have cookies placed on
          their computers should set their browsers to refuse cookies before
          using be-a-react-dev's websites, with the drawback that certain
          features of be-a-react-dev's websites may not function properly
          without the aid of cookies.
        </StandardText>
        <StandardText>
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to be-a-react-dev's use of
          cookies.
        </StandardText>
      </>
    </StandardPageContent>
  );
};

export default LegalPrivacy;
