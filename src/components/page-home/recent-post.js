import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .single-post {
    background-color: white;
    width: 100%;
    max-width: 800px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    @media (min-width: 768px) {
      margin: 20px;
    }
    .post-img {
      margin-bottom: 15px;
    }
  }
  .categories {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    color: #dea08c;
    font-size: 14px;
    > div {
      margin: 10px;
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query posts {
        wpgraphql {
          posts {
            nodes {
              uri
              title
              excerpt
              categories {
                nodes {
                  name
                }
              }
              featuredImage {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(traceSVG: { color: "#f00e2e" }) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // const firstThreePosts = data.wpgraphql.posts.nodes.slice(0, 3);
      const firstThreePosts = data.wpgraphql.posts.nodes;

      return (
        <PostsWrap>
          {firstThreePosts.map((post, index) => {
            console.log(post);

            return (
              <div className="single-post" key={post.uri}>
                {post.categories.nodes.length > 0 && (
                  <div className="categories">
                    {post.categories.nodes.map(category => {
                      return <div>{category.name}</div>;
                    })}
                  </div>
                )}
                <h3>{post.title}</h3>
                {post.featuredImage && (
                  <div className="post-img">
                    <Img
                      alt={post.featuredImage.altText}
                      fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                    />
                  </div>
                )}

                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt
                  }}
                />
                {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
                <Link to={`/blog/${post.uri}`}>Read More</Link>
              </div>
            );
          })}
        </PostsWrap>
      );
    }}
  />
);
