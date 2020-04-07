import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .single-post {
    background-color: white;
    width: 100%;
    /* max-width: 800px; */
    border-radius: 15px;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    @media (min-width: 768px) {
      width: 47%;
    }
    &:first-of-type {
      width: 100%;
      @media (min-width: 768px) {
        max-width: 1000px;
        margin: auto;
      }
    }
    .post-img {
      margin-bottom: 15px;
    }
  }
  .categories {
    display: flex;
    justify-content: center;

    .single-category {
      text-transform: uppercase;
      color: #dea08c;
      font-size: 14px;
      margin: 10px;
      font-family: 'Overpass', sans-serif;
      text-decoration: none;
      &:hover {
        color: #000;
      }
    }
  }
  .post-title {
    font-family: 'Amiri', serif;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 1.25em;
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }
  .post-date {
    font-family: 'Overpass', sans-serif;
    text-transform: uppercase;
    color: #414141;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .excerpt {
    font-family: 'Amiri', serif;
    font-size: 17px;
    color: #222222;
  }
  .continue-reading {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #000;
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
              date
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
      // const allPosts = data.wpgraphql.posts.nodes.slice(0, 3);
      const allPosts = data.wpgraphql.posts.nodes;

      return (
        <PostsWrap>
          {allPosts.map((post, index) => {
            console.log(new Date(post.date).toUTCString().slice(0, 16));

            return (
              <div className="single-post" key={post.uri}>
                {post.categories.nodes.length > 0 && (
                  <div className="categories">
                    {post.categories.nodes.map(category => {
                      return (
                        <a href="#" className="single-category">
                          {category.name}
                        </a>
                      );
                    })}
                  </div>
                )}
                <h2 className="post-title">{post.title}</h2>
                <div className="post-date">
                  {new Date(post.date).toUTCString().slice(0, 16)}
                </div>
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
                <Link className="continue-reading" to={`/blog/${post.uri}`}>
                  Continue Reading
                </Link>
              </div>
            );
          })}
        </PostsWrap>
      );
    }}
  />
);
