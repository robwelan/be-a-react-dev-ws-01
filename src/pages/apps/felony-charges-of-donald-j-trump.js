import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentJAT from '../../content-apps/felony-charges-of-donald-j-trump';

const PageJAT = ({ location }) => <ContentJAT location={location} />;

export default PageJAT;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo
    description="Explore the 91 felony charges issued to Donald J. Trump as per official indictments from the legal documents. This page contains verbatim text (the criminal charges) from the indictments for informational purposes. Due to space constraints some charges are not included in completeness but are none-the-less (hopefully) accurately represented. #DonaldTrump #FelonyCharges #LegalIndictments #TrumpLegalCase"
    keywords="Donald J. Trump, felony charges, official indictments, legal documents, Trump legal case, criminal charges, legal proceedings, indictments against Trump"
    location={location}
    title="Felony Counts Of Donald J Trump"
  />
);
