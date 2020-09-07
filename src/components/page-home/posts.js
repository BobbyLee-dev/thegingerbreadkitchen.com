import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { TiHeartFullOutline } from 'react-icons/ti';
import { GiCupidonArrow } from 'react-icons/gi';
import Corgi from '../../images/corgi';

const PostsWrap = styled.div`
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .single-post {
    position: relative;
    padding: 25px;
    display: flex;
    flex-direction: column;
    background-color: #fffbf8;
    width: 100%;
    /* border-radius: 15px; */
    margin-bottom: 60px;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    @media (min-width: 600px) {
      width: 47%;
    }
    @media (min-width: 768px) {
      padding: 25px 25px 30px;
    }
    &:first-of-type {
      padding: 20px 20px 100px;
      width: 100%;
      @media (min-width: 768px) {
        padding: 35px 70px 130px;
      }
      .post-img {
        .gatsby-image-wrapper {
          margin: 0 auto 30px;
        }
      }
      .post-title {
        margin-bottom: 20px;
        text-align: center;
        /* line-height: 16.9px; */
        a {
          font-size: 32px;
          line-height: 1.1em;
          font-weight: 700;
          color: #000000;
          text-transform: uppercase;
        }
      }
      .excerpt {
        display: block;
      }
      .continue-reading {
        font-size: 15px;
        display: flex;
        background-color: rgba(227, 198, 188, 0.5);
        padding: 15px 20px;
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        color: #a24d4a;
        font-weight: 400;
        text-transform: uppercase;
        @media (min-width: 768px) {
          padding: 15px 30px;
          bottom: 50px;
        }
        svg {
          margin: 0 8px;
        }
      }
    }
    .post-img {
      flex: 1 0 auto;
      .gatsby-image-wrapper {
        margin: 0 auto 25px;
      }
    }
  }
  .categories {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: #bc5a5a;
    .cat-sep {
      font-size: 11px;
      &:last-of-type {
        display: none;
      }
    }
    .single-category {
      text-transform: uppercase;
      color: #bc5a5a;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin: 0 5px;
      font-family: 'Montserrat', sans-serif;
      text-decoration: none;
      &:hover {
        /* color: #000; */
      }
    }
  }
  .post-title {
    margin-top: 0;
    font-family: 'Amiri', serif;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 5px;
    color: #a24d4a;
    text-align: center;
    text-transform: uppercase;
    a {
      /* line-height: 1em; */
      color: #a24d4a;
      text-decoration: none;
      &:hover {
        /* text-decoration: underline; */
      }
    }
  }
  .post-date {
    display: none;
    font-family: 'Overpass', sans-serif;
    text-transform: uppercase;
    color: #414141;
    font-size: 10px;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }
  .excerpt {
    display: none;
    text-align: left;
    /* font-family: 'Amiri', serif; */
    color: #222222;
    margin-bottom: 20px;
    * {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .continue-reading {
    display: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #000;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      color: #dea08c;
      svg {
        transform: scale(1.5);
      }
    }
    svg {
      margin-left: 5px;
      height: 20px;
      width: auto;
      transition: all 0.5s;
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
                    fluid(traceSVG: { color: "#FBF5ED" }) {
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
            return (
              <div className="single-post" key={post.uri}>
                {index === 0 &&
                  (post.categories.nodes.length > 0 && (
                    <div className="categories">
                      {post.categories.nodes.map(category => {
                        return (
                          <>
                            <div className="single-category">
                              {category.name}
                            </div>

                            <div className="cat-sep">/</div>
                          </>
                        );
                      })}
                    </div>
                  ))}
                {index === 0 && (
                  <h2 className="post-title">
                    <Link to={`/blog/${post.uri}`}>{post.title}</Link>
                  </h2>
                )}
                {index === 0 && (
                  <div className="post-date">
                    {new Date(post.date).toUTCString().slice(0, 16)}
                  </div>
                )}

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
                  Continue Reading <Corgi /> {'>>>'}
                </Link>
                {index > 0 && (
                  <h2 className="post-title">
                    <Link to={`/blog/${post.uri}`}>{post.title}</Link>
                  </h2>
                )}
                {index > 0 &&
                  (post.categories.nodes.length > 0 && (
                    <div className="categories">
                      {post.categories.nodes.map(category => {
                        return (
                          <>
                            <div className="single-category">
                              {category.name}
                            </div>
                            <div className="cat-sep">/</div>
                          </>
                        );
                      })}
                    </div>
                  ))}

                {index > 0 && (
                  <div className="post-date">
                    {new Date(post.date).toUTCString().slice(0, 16)}
                  </div>
                )}
              </div>
            );
          })}
        </PostsWrap>
      );
    }}
  />
);
