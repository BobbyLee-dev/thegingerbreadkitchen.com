import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const PostWrap = styled.div`
  max-width: 750px;
  .single-post {
    padding: 25px;
    display: flex;
    flex-direction: column;
    background-color: #fffbf8;
    width: 100%;
    /* border-radius: 15px; */
    margin-bottom: 60px;
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
  }
`;

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        slug
        title
        content
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
`;

const PostTemplate = ({
  data: {
    wpgraphql: { post }
  }
}) => {
  function goBack() {
    window.history.back();
  }
  return (
    <Layout>
      <SEO title="Home" />
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <PostWrap>
        <div className="single-post" key={post.uri}>
          <div className="post-intro">
            {post.categories.nodes.length > 0 && (
              <div className="categories">
                {post.categories.nodes.map(category => {
                  return (
                    <>
                      <div className="single-category">{category.name}</div>
                    </>
                  );
                })}
              </div>
            )}
            <h1 className="post-title">{post.title}</h1>
            {post.featuredImage && (
              <Link to={`/blog/${post.uri}`} className="post-img">
                <Img
                  alt={post.featuredImage.altText}
                  fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                />
              </Link>
            )}
          </div>

          {/* <div className="post-date">
            {new Date(post.date).toUTCString().slice(0, 16)}
          </div> */}

          <div
            className="excerpt"
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
        </div>
        <button onClick={goBack} className="button" to="/">
          Back
        </button>
      </PostWrap>
    </Layout>
  );
};

export default PostTemplate;
