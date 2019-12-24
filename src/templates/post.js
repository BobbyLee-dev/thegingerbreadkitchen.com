import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        slug
        title
        content
      }
    }
  }
`;

const PostTemplage = ({
  data: {
    wpgraphql: { post }
  }
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <Link to="/blog">Back to Blog</Link>
    </Layout>
  );
};

export default PostTemplage;
