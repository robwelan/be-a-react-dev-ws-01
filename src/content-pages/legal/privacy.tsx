import React from 'react';
//  chakra-ui
import { Link, ListItem, OrderedList } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  components
import BackToTOC from './components/back-to-toc';
import StandardPageContent from '../../components/standard-page-content';
import StandardContactAndCredits from './components/standard-contact-and-credits';
import StandardHeading from './components/standard-heading';
import StandardText from './components/standard-text';
//  security
import { PUBLIC_ROUTE_PAGE_COOKIES } from '../../security/constants/routes-public';
//  styles
import './styles.css';

const LegalPrivacy = () => {
  return (
    <StandardPageContent title="Privacy">
      <>
        <StandardHeading size="sm" sx={{ textAlign: 'right' }}>
          Effective Date: 29-03-2023
        </StandardHeading>
        <StandardHeading>Your privacy is important to us</StandardHeading>
        <StandardText>
          It is be-a-react-dev's policy to respect your privacy regarding any
          information we may collect while operating our website. This Privacy
          Policy applies to{' '}
          <Link as={GatsbyLink} to="/">
            https://bearact.dev
          </Link>{' '}
          (hereinafter, "us", "we", or "https://beareact.dev").
        </StandardText>
        <StandardText>
          We respect your privacy and are committed to protecting personally
          identifiable information you may provide us through the Website.
        </StandardText>
        <StandardText>
          We have adopted this privacy policy ("Privacy Policy") to explain what
          information may be collected on our Website, how we use this
          information, and under what circumstances we may disclose the
          information to third parties.
        </StandardText>
        <StandardText>
          This Privacy Policy applies only to information we collect through the
          Website and does not apply to our collection of information from other
          sources.
        </StandardText>
        <StandardText>
          This Privacy Policy, together with the Terms of service posted on our
          Website, set forth the general rules and policies governing your use
          of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms of service.
        </StandardText>
        <StandardHeading id="tableofcontents">Contents</StandardHeading>
        <StandardText>
          Click below to jump to any section of this privacy policy.
        </StandardText>
        <OrderedList className="legal">
          <ListItem>
            <Link href="#websitevisitors">
              <strong>Website Visitors</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#PII">
              <strong>Personally-Identifying Information</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Security">
              <strong>Security</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Ads">
              <strong>Advertisements</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#ExternalLinks">
              <strong>Links To External Sites</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Remarketing">
              <strong>
                Be-a-react-dev uses Google AdWords for remarketing
              </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#PIIProtection">
              <strong>
                Protection of Certain Personally-Identifying Information
              </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Cookies">
              <strong>Cookies</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Affiliates">
              <strong>Affiliate Disclosure</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#e-commerce">
              <strong>E-commerce</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Changes">
              <strong>Privacy Policy Changes</strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#Credit">
              <strong>Contact Information &amp; Credit</strong>
            </Link>
          </ListItem>
        </OrderedList>

        <StandardHeading id="websitevisitors">Website Visitors</StandardHeading>
        <StandardText>
          Like most website operators, be-a-react-dev collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. be-a-react-dev's purpose in collecting non-personally
          identifying information is to better understand how be-a-react-dev's
          visitors use its website. From time to time, be-a-react-dev may
          release non-personally-identifying information in the aggregate, e.g.,
          by publishing a report on trends in the usage of its website.
        </StandardText>
        <StandardText>
          be-a-react-dev also collects potentially personally-identifying
          information like Internet Protocol (IP) addresses for logged in users
          and for users leaving comments on https://beareact.dev blog posts.
          be-a-react-dev only discloses logged in user and commenter IP
          addresses under the same circumstances that it uses and discloses
          personally-identifying information as described below.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="PII">
          2. Personally-Identifying Information
        </StandardHeading>
        <StandardText>
          Certain visitors to Be-a-react-dev's websites choose to interact with
          Be-a-react-dev in ways that require Be-a-react-dev to gather
          personally-identifying information. The amount and type of information
          that Be-a-react-dev gathers depends on the nature of the interaction.
          For example, we ask visitors who leave a comment at
          https://beareact.dev to provide a username and email address.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Security">3. Security</StandardHeading>
        <StandardText>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Ads">4. Advertisements</StandardHeading>
        <StandardText>
          Ads appearing on our website may be delivered to users by advertising
          partners, who may set cookies. These cookies allow the ad server to
          recognise your computer each time they send you an online
          advertisement to compile information about you or others who use your
          computer. This information allows ad networks to, among other things,
          deliver targeted advertisements that they believe will be of most
          interest to you. This Privacy Policy covers the use of cookies by
          be-a-react-dev and does not cover the use of cookies by any
          advertisers.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="ExternalLinks">
          5. Links To External Sites
        </StandardHeading>
        <StandardText>
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms of service of every site you visit.
        </StandardText>
        <StandardText>
          We have no control over, and assume no responsibility for the content,
          privacy policies or practices of any third party sites, products or
          services.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Remarketing">
          6. Be-a-react-dev uses Google AdWords for remarketing
        </StandardHeading>
        <StandardText>
          be-a-react-dev uses the remarketing services to advertise on third
          party websites (including Google) to previous visitors to our site. It
          could mean that we advertise to previous visitors who haven't
          completed a task on our site, for example using the contact form to
          make an enquiry. This could be in the form of an advertisement on the
          Google search results page, or a site in the Google Display Network.
          Third-party vendors, including Google, use cookies to serve ads based
          on someone's past visits. Of course, any data collected will be used
          in accordance with our own privacy policy and Google's privacy policy.
        </StandardText>
        <StandardText>
          You can set preferences for how Google advertises to you using the
          Google Ad Preferences page, and if you want to you can opt out of
          interest-based advertising entirely by cookie settings or permanently
          using a browser plugin.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="PIIProtection">
          7. Protection of Certain Personally-Identifying Information
        </StandardHeading>
        <StandardText>
          be-a-react-dev discloses potentially personally-identifying and
          personally-identifying information only to those of its employees,
          contractors and affiliated organisations that (i) need to know that
          information in order to process it on be-a-react-dev's behalf or to
          provide services available at be-a-react-dev's website, and (ii) that
          have agreed not to disclose it to others. Some of those employees,
          contractors and affiliated organisations may be located outside of
          your home country; by using be-a-react-dev's website, you consent to
          the transfer of such information to them. be-a-react-dev will not rent
          or sell potentially personally-identifying and personally-identifying
          information to anyone. Other than to its employees, contractors and
          affiliated organisations, as described above, be-a-react-dev discloses
          potentially personally-identifying and personally-identifying
          information only in response to a subpoena, court order or other
          governmental request, or when be-a-react-dev believes in good faith
          that disclosure is reasonably necessary to protect the property or
          rights of be-a-react-dev, third parties or the public at large.
        </StandardText>
        <StandardText>
          If you are a registered user of https://beareact.dev and have supplied
          your email address, be-a-react-dev may occasionally send you an email
          to tell you about new features, solicit your feedback, or just keep
          you up to date with what's going on with be-a-react-dev and our
          products. We primarily use our blog to communicate this type of
          information, so we expect to keep this type of email to a minimum. If
          you send us a request (for example via a support email or via one of
          our feedback mechanisms), we reserve the right to publish it in order
          to help us clarify or respond to your request or to help us support
          other users. be-a-react-dev takes all measures reasonably necessary to
          protect against the unauthorized access, use, alteration or
          destruction of potentially personally-identifying and
          personally-identifying information.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Affiliates">
          8. Affiliate Disclosure
        </StandardHeading>
        <StandardText>
          This site uses affiliate links and does earn a commission from certain
          links. This does not affect your purchases or the price you may pay.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Cookies">9. Cookies</StandardHeading>
        <StandardText>
          Please see our{' '}
          <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_COOKIES}>
            Cookies Policy
          </Link>{' '}
          page.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Ecommerce">10. E-commerce</StandardHeading>
        <StandardText>
          Those who engage in transactions with be-a-react-dev – by purchasing
          be-a-react-dev's services or products, are asked to provide additional
          information, including as necessary the personal and financial
          information required to process those transactions. In each case,
          be-a-react-dev collects such information only insofar as is necessary
          or appropriate to fulfil the purpose of the visitor's interaction with
          be-a-react-dev. be-a-react-dev does not disclose
          personally-identifying information other than as described below. And
          visitors can always refuse to supply personally-identifying
          information, with the caveat that it may prevent them from engaging in
          certain website-related activities.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Changes">
          11. Privacy Policy Changes
        </StandardHeading>
        <StandardText>
          Although most changes are likely to be minor, be-a-react-dev may
          change its Privacy Policy from time to time, and in be-a-react-dev's
          sole discretion. be-a-react-dev encourages visitors to frequently
          check this page for any changes to its Privacy Policy. Your continued
          use of this site after any change in this Privacy Policy will
          constitute your acceptance of such change.
        </StandardText>
        <BackToTOC />

        <StandardHeading id="Credit">
          12. Contact Information &amp; Credit
        </StandardHeading>
        <StandardContactAndCredits />
        <BackToTOC />
      </>
    </StandardPageContent>
  );
};

export default LegalPrivacy;
