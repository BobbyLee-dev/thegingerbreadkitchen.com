import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SoupSpoonSvg from '../images/soup-spoon';
import ApronSvg from '../images/apron';
import PotSvg from '../images/pot';

const PostWrap = styled.div`
  max-width: 750px;
  .single-post {
    display: flex;
    flex-direction: column;
    background-color: #fffbf8;
    width: 100%;
    /* border-radius: 15px; */
    margin-bottom: 60px;
    width: 100%;
    @media (min-width: 768px) {
    }
    .post-intro {
      border-bottom: 3px solid #e3c6bc;
      background-color: #fffbf8;
      padding: 40px 20px;
      @media (min-width: 768px) {
        padding: 40px;
      }
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
      margin-bottom: 20px;
      text-align: center;
      font-size: 32px;
      line-height: 1.1em;
      font-weight: 700;
      color: #000000;
      text-transform: uppercase;
    }
    .post-date {
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      color: #414141;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .post-content {
      /* font-family: 'Amiri', serif; */
      font-size: 16px;

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
    .post-recipe {
      background-color: #fff;
      padding: 40px 20px;
      @media (min-width: 768px) {
        padding: 40px;
      }
    }
    .recipe-heading {
      font-size: 26px;
      font-weight: 600;
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
              fluid(traceSVG: { color: "#FBF5ED" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        recipe {
          servingSize
          prepTime
          cookTime
          ingredients {
            fieldGroupName
            ingredient
          }
          preparation {
            fieldGroupName
            prepItem
          }
          notes

          fieldGroupName
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
                      <div className="cat-sep">/</div>
                    </>
                  );
                })}
              </div>
            )}
            <h1 className="post-title">{post.title}</h1>
            {post.featuredImage && (
              <div className="post-img">
                <Img
                  alt={post.featuredImage.altText}
                  fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                />
              </div>
            )}
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: post.content
              }}
            />
          </div>

          {/* <div className="post-date">
            {new Date(post.date).toUTCString().slice(0, 16)}
          </div> */}

          {post.recipe.servingSize && (
            <div className="post-recipe">
              <div className="recipe-heading">Recipe:</div>
              <div className="recipe-about">
                <div className="serving-size">
                  <SoupSpoonSvg />
                  {post.recipe.servingSize}
                </div>
                <div className="prep-time">
                  <ApronSvg />
                  {post.recipe.prepTime}
                </div>
                <div className="cook-time">
                  <PotSvg />
                  {post.recipe.cookTime}
                </div>
              </div>
              {post.recipe.ingredients > 0 && (
                <div className="recipe-ingredients">
                  <div className="ingredients-heading">Ingredients:</div>
                  <ul>
                    {post.recipe.ingredients.map(ingredient => {
                      return <li>{ingredient.ingredient}</li>;
                    })}
                  </ul>
                </div>
              )}
              {post.recipe.preparation > 0 && (
                <div className="recipe-preparation">
                  <div className="preparation-heading">preparation:</div>
                  <ol>
                    {post.recipe.preparation.map(item => {
                      return <li>{item.prepItem}</li>;
                    })}
                  </ol>
                </div>
              )}
              {post.recipe.notes && (
                <div
                  className="recipe-notes"
                  dangerouslySetInnerHTML={{
                    __html: post.recipe.notes
                  }}
                ></div>
              )}
              {/* <pre>{JSON.stringify(post.recipe, null, 2)}</pre> */}
            </div>
          )}
        </div>
        <button onClick={goBack} className="button" to="/">
          Back
        </button>
      </PostWrap>
    </Layout>
  );
};

export default PostTemplate;
