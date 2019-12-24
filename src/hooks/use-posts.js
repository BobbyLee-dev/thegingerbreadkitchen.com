import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        posts {
          nodes {
            slug
            title
            excerpt
          }
        }
      }
    }
  `);
  return data.wpgraphql.posts.nodes.map(post => ({
    title: post.title,
    slug: 'blog/' + post.slug,
    custonExcerpt: post.shortLongPost.customExcerpt
  }));
  // return data.wpgraphql.posts.nodes
};

export default usePosts;
