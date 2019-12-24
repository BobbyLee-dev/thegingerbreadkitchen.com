import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Hi from the Contact Page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Contact;
