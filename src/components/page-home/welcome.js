import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const WelcomeWrap = styled.section`
  position: relative;
  font-family: monospace;
  font-size: 18px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 22px;
    /* padding: 200px 0; */
  }
  .header-img-wrap {
    max-width: 100%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
  }
  .welcome-content {
    padding: 20px;
    max-width: 900px;
    margin: auto;
    text-align: center;
    line-height: 2em;
    a {
      text-decoration: none;
      color: #fff;
      z-index: 30;
      position: relative;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .svgcolor {
    position: absolute;
    top: 0;
  }
  .svgcolor-2 {
    position: absolute;
    bottom: 0;
    transform: scaleY(-1);
  }
`;

// const HomeWelcome = props => {
//   return (
//     <WelcomeWrap className={props.class} id={props.id}>
//

//       <div
//         className="welcome-content"
//         dangerouslySetInnerHTML={{ __html: props.content }}
//       />

//
//       {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
//     </WelcomeWrap>
//   );
// };

// export default HomeWelcome;

export default props => (
  <StaticQuery
    query={graphql`
      query headerImg {
        wpgraphql {
          pageBy(uri: "home") {
            featuredImage {
              altText
              sourceUrl
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
    `}
    render={data => {
      const imageData = data.wpgraphql.pageBy.featuredImage;
      console.log(data.wpgraphql.pageBy.featuredImage);

      return (
        <WelcomeWrap>
          <div className="header-img-wrap">
            <Img
              alt={imageData.altText}
              fluid={imageData.imageFile.childImageSharp.fluid}
            />
          </div>
          <div
            className="welcome-content"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </WelcomeWrap>
      );
    }}
  />
);
