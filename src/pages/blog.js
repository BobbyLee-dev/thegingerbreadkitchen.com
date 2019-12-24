import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

const Blog = () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="About Me" />
      <h1>Hi from the Blog page</h1>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Blog;
