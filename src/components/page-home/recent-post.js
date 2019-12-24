import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .single-post {
    width: 300px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    @media (min-width: 768px) {
      margin: 20px;
    }
    .post-img {
      margin-bottom: 15px;
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
      const firstThreePosts = data.wpgraphql.posts.nodes.slice(0, 3);

      return (
        <PostsWrap>
          {firstThreePosts.map((post, index) => {
            return (
              <div className="single-post" key={post.uri}>
                {post.featuredImage && (
                  <div className="post-img">
                    <Img
                      alt={post.featuredImage.altText}
                      fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                    />
                  </div>
                )}
                <h3>{post.title}</h3>

                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: post.shortLongPost.customExcerpt
                  }}
                /> */}
                <pre>{JSON.stringify(post, null, 2)}</pre>
                <Link to={`/blog/${post.uri}`}>Read More</Link>
              </div>
            );
          })}
        </PostsWrap>
      );
    }}
  />
);
