import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { TiHeartFullOutline } from 'react-icons/ti';
import { GiCupidonArrow } from 'react-icons/gi';

const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .single-post {
    background-color: white;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 60px;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    @media (min-width: 768px) {
      width: 47%;
    }
    &:first-of-type {
      width: 100%;
    }
    .post-img {
      margin-bottom: 15px;
      display: block;
    }
  }
  .categories {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: auto;
      height: 20px;
      path {
        fill: #d5d5d5;
      }
      &:last-of-type {
        display: none;
      }
    }
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
    margin-bottom: 0;
    line-height: 1.25em;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
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
    margin-bottom: 15px;
    * {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .continue-reading {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 5px;
      height: 20px;
      width: auto;
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
          {allPosts.map(post => {
            return (
              <div className="single-post" key={post.uri}>
                <h2 className="post-title">
                  <Link to={`/blog/${post.uri}`}>{post.title}</Link>
                </h2>
                {post.categories.nodes.length > 0 && (
                  <div className="categories">
                    {post.categories.nodes.map(category => {
                      return (
                        <>
                          <Link to="/" className="single-category">
                            {category.name}
                          </Link>
                          <TiHeartFullOutline />
                        </>
                      );
                    })}
                  </div>
                )}
                <div className="post-date">
                  {new Date(post.date).toUTCString().slice(0, 16)}
                </div>
                {post.featuredImage && (
                  <Link to={`/blog/${post.uri}`} className="post-img">
                    <Img
                      alt={post.featuredImage.altText}
                      fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                    />
                  </Link>
                )}
                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt
                  }}
                />
                {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
                <Link className="continue-reading" to={`/blog/${post.uri}`}>
                  Continue Reading <GiCupidonArrow />
                </Link>
              </div>
            );
          })}
        </PostsWrap>
      );
    }}
  />
);
