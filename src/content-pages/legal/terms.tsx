import React from 'react';
//  chakra-ui
import {
  Heading,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
//  components
import BackToTOC from './components/back-to-toc';
import StandardPageContent from '../../components/standard-page-content';
import StandardContactAndCredits from './components/standard-contact-and-credits';
import StandardHeading from './components/standard-heading';
import StandardText from './components/standard-text';
//  security
import {
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_PRIVACY,
} from '../../security/constants/routes-public';
//  styles
import './styles.css';

const LegalTerms = () => {
  return (
    <StandardPageContent title="Terms">
      <>
        <StandardText>
          These terms of service outline the rules and regulations for the use
          of Be-a-react-dev's Website.
        </StandardText>
        <StandardText>
          By accessing this website we assume you accept these terms of service
          in full. Do not continue to use Be-a-react-dev's website if you do not
          accept all of the terms of service stated on this page.
        </StandardText>
        <StandardText>
          The following terminology applies to these Terms of Service, Privacy
          Statement and Disclaimer Notice and any or all Agreements: "Client",
          "You" and "Your" refers to you, the person accessing this website and
          accepting the Company's terms of service. "The Company", "Ourselves",
          "We", "Our" and "Us", refers to our Company. "Party", "Parties", or
          "Us", refers to both the Client and ourselves, or either the Client or
          ourselves. All terms refer to the offer, acceptance and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner, whether by formal meetings of a
          fixed duration, or any other means, for the express purpose of meeting
          the Client's needs in respect of provision of the Company's stated
          services/products, in accordance with and subject to, prevailing law
          of . Any use of the above terminology or other words in the singular,
          plural, capitalisation and/or he/she or they, are taken as
          interchangeable and therefore as referring to same.
        </StandardText>

        <StandardHeading>Cookies</StandardHeading>
        <StandardText>
          We employ the use of cookies. By using Be-a-react-dev's website you
          consent to the use of cookies in accordance with Be-a-react-dev's{' '}
          <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_PRIVACY}>
            Privacy Policy
          </Link>
          .
        </StandardText>
        <StandardText>
          Feel free to also review our{' '}
          <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_COOKIES}>
            Cookies Policy
          </Link>{' '}
          page.
        </StandardText>

        <StandardHeading>License</StandardHeading>
        <StandardText>
          Unless otherwise stated, be-a-react-dev and/or it's licensors own the
          intellectual property rights for all material on be-a-react-dev. All
          intellectual property rights are reserved. You may view and/or print
          pages from https://beareact.dev for your own personal use subject to
          restrictions set in these terms of service.
        </StandardText>
        <StandardText>You must not:</StandardText>
        <OrderedList className="legal">
          <ListItem>Republish material from https://beareact.dev</ListItem>
          <ListItem>
            Sell, rent or sub-license material from https://beareact.dev
          </ListItem>
          <ListItem>
            Reproduce, duplicate or copy material from https://beareact.dev
          </ListItem>
        </OrderedList>
        <StandardText>
          Redistribute content from be-a-react-dev (unless content is
          specifically made for redistribution).
        </StandardText>

        <StandardHeading>User Comments</StandardHeading>
        <OrderedList className="legal">
          <ListItem>This Agreement shall begin on the date hereof.</ListItem>
          <ListItem>
            Certain parts of this website offer the opportunity for users to
            post and exchange opinions, information, material and data
            ('Comments') in areas of the website. be-a-react-dev does not
            screen, edit, publish or review Comments prior to their appearance
            on the website and Comments do not reflect the views or opinions of
            be-a-react-dev, its agents or affiliates. Comments reflect the view
            and opinion of the person who posts such view or opinion. To the
            extent permitted by applicable laws be-a-react-dev shall not be
            responsible or liable for the Comments or for any loss cost,
            liability, damages or expenses caused and or suffered as a result of
            any use of and/or posting of and/or appearance of the Comments on
            this website.
          </ListItem>
          <ListItem>
            be-a-react-dev reserves the right to monitor all Comments and to
            remove any Comments which it considers in its absolute discretion to
            be inappropriate, offensive or otherwise in breach of these Terms of
            Service.
          </ListItem>
          <ListItem>
            You warrant and represent that:
            <OrderedList listStyleType="lower-alpha">
              <ListItem>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </ListItem>
              <ListItem>
                The Comments do not infringe any intellectual property right,
                including without limitation copyright, patent or trademark, or
                other proprietary right of any third party;
              </ListItem>
              <ListItem>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material or material which is an
                invasion of privacy
              </ListItem>
              <ListItem>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            You hereby grant to <strong>be-a-react-dev</strong> a non-exclusive
            royalty-free license to use, reproduce, edit and authorize others to
            use, reproduce and edit any of your Comments in any and all forms,
            formats or media.
          </ListItem>
        </OrderedList>

        <StandardHeading>Hyperlinking to our Content</StandardHeading>
        <OrderedList className="legal">
          <ListItem>
            The following organizations may link to our Web site without prior
            written approval:
            <OrderedList listStyleType="lower-alpha">
              <ListItem>Government agencies;</ListItem>
              <ListItem>Search engines;</ListItem>
              <ListItem>News organizations;</ListItem>
              <ListItem>
                Online directory distributors when they list us in the directory
                may link to our Web site in the same manner as they hyperlink to
                the Web sites of other listed businesses; and
              </ListItem>
              <ListItem>
                Systemwide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            These organizations may link to our home page, to publications or to
            other Web site information so long as the link:
            <OrderedList listStyleType="lower-alpha">
              <ListItem>is not in any way misleading;</ListItem>
              <ListItem>
                does not falsely imply sponsorship, endorsement or approval of
                the linking party and its products or services; and
              </ListItem>
              <ListItem>
                fits within the context of the linking party's site.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            We may consider and approve in our sole discretion other link
            requests from the following types of organizations:
            <OrderedList listStyleType="lower-alpha">
              <ListItem>
                commonly-known consumer and/or business information sources such
                as Chambers of Commerce, American Automobile Association, AARP
                and Consumers Union;
              </ListItem>
              <ListItem>dot.com community sites;</ListItem>
              <ListItem>
                associations or other groups representing charities, including
                charity giving sites,
              </ListItem>
              <ListItem>online directory distributors;</ListItem>
              <ListItem>internet portals;</ListItem>
              <ListItem>
                accounting, law and consulting firms whose primary clients are
                businesses; and
              </ListItem>
              <ListItem>
                educational institutions and trade associations.
              </ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>

        <StandardText>
          We will approve link requests from these organizations if we determine
          that:
        </StandardText>
        <OrderedList className="legal" listStyleType="lower-alpha">
          <ListItem>
            the link would not reflect unfavorably on us or our accredited
            businesses (for example, trade associations or other organizations
            representing inherently suspect types of business, such as
            work-at-home opportunities, shall not be allowed to link);
          </ListItem>
          <ListItem>
            the organization does not have an unsatisfactory record with us;
          </ListItem>
          <ListItem>
            the benefit to us from the visibility associated with the hyperlink
            outweighs the absence of Be-a-react-dev; and
          </ListItem>
          <ListItem>
            where the link is in the context of general resource information or
            is otherwise consistent with editorial content in a newsletter or
            similar product furthering the mission of the organization.
          </ListItem>
        </OrderedList>

        <StandardText>
          If you are among the organizations listed in paragraph 2 above and are
          interested in linking to our website, you must notify us by sending an
          e-mail to{' '}
          <Link
            href="mailto:rob.welan@beareact.dev"
            title="send an email to rob.welan@beareact.dev"
          >
            rob.welan@beareact.dev <EmailIcon mx="2px" />
          </Link>
          . Please include your name, your organization name, contact
          information (such as a phone number and/or e-mail address) as well as
          the URL of your site, a list of any URLs from which you intend to link
          to our Web site, and a list of the URL(s) on our site to which you
          would like to link. Allow 2-3 weeks for a response.
        </StandardText>

        <StandardText>
          Approved organizations may hyperlink to our Web site as follows:
        </StandardText>
        <OrderedList className="legal">
          <ListItem>By use of our corporate name; or</ListItem>
          <ListItem>
            By use of the uniform resource locator (Web address) being linked
            to; or
          </ListItem>
          <ListItem>
            By use of any other description of our Web site or material being
            linked to that makes sense within the context and format of content
            on the linking party's site.
          </ListItem>
        </OrderedList>
        <StandardText>
          No use of be-a-react-dev's logo or other artwork will be allowed for
          linking absent a trademark license agreement.
        </StandardText>

        <StandardHeading>Iframes</StandardHeading>
        <StandardText>
          Without prior approval and express written permission, you may not
          create frames around our Web pages or use other techniques that alter
          in any way the visual presentation or appearance of our Web site.
        </StandardText>

        <StandardHeading>Content Liability</StandardHeading>
        <StandardText>
          We shall have no responsibility or liability for any content appearing
          on your Web site. You agree to indemnify and defend us against all
          claims arising out of or based upon your Website. No link(s) may
          appear on any page on your Web site or within any context containing
          content or materials that may be interpreted as libelous, obscene or
          criminal, or which infringes, otherwise violates, or advocates the
          infringement or other violation of, any third party rights.
        </StandardText>

        <StandardHeading>Reservation of Rights</StandardHeading>
        <StandardText>
          We reserve the right at any time and in its sole discretion to request
          that you remove all links or any particular link to our Web site. You
          agree to immediately remove all links to our Web site upon such
          request. We also reserve the right to amend these terms of service and
          its linking policy at any time. By continuing to link to our Web site,
          you agree to be bound to and abide by these linking terms of service.
        </StandardText>

        <StandardHeading>Removal of links from our website</StandardHeading>
        <StandardText>
          If you find any link on our Web site or any linked web site
          objectionable for any reason, you may contact us about this. We will
          consider requests to remove links but will have no obligation to do so
          or to respond directly to you.
        </StandardText>
        <StandardText>
          Whilst we endeavour to ensure that the information on this website is
          correct, we do not warrant its completeness or accuracy; nor do we
          commit to ensuring that the website remains available or that the
          material on the website is kept up to date.
        </StandardText>

        <StandardHeading>Disclaimer</StandardHeading>
        <StandardText>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website (including, without limitation, any warranties
          implied by law in respect of satisfactory quality, fitness for purpose
          and/or the use of reasonable care and skill). Nothing in this
          disclaimer will:
        </StandardText>
        <OrderedList className="legal">
          <ListItem>
            limit or exclude our or your liability for death or personal injury
            resulting from negligence;
          </ListItem>
          <ListItem>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </ListItem>
          <ListItem>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </ListItem>
          <ListItem>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </ListItem>
        </OrderedList>
        <StandardText>
          The limitations and exclusions of liability set out in this Section
          and elsewhere in this disclaimer:
        </StandardText>
        <OrderedList className="legal" listStyleType="lower-alpha">
          <ListItem>are subject to the preceding paragraph; and</ListItem>
          <ListItem>
            govern all liabilities arising under the disclaimer or in relation
            to the subject matter of this disclaimer, including liabilities
            arising in contract, in tort (including negligence) and for breach
            of statutory duty.
          </ListItem>
        </OrderedList>
        <StandardText>
          To the extent that the website and the information and services on the
          website are provided free of charge, we will not be liable for any
          loss or damage of any nature.
        </StandardText>

        <StandardContactAndCredits />
      </>
    </StandardPageContent>
  );
};

export default LegalTerms;
