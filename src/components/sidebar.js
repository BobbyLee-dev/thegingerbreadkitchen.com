import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Aside = styled.aside`
  max-width: 600px;
  margin: 73px 0 auto 0;
`;

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        wpgraphql {
          pageBy(uri: "sidebar") {
            Sidebar {
              aboutMeText
              aboutMeImage {
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
    render={data => (
      <Aside>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className="about-me-block sidebar-block">
          <div className="img-wrap">
            <Img
              alt="About Me"
              fluid={
                data.wpgraphql.pageBy.Sidebar.aboutMeImage.imageFile
                  .childImageSharp.fluid
              }
            />
          </div>
          <div
            className="about-me"
            dangerouslySetInnerHTML={{
              __html: data.wpgraphql.pageBy.Sidebar.aboutMeText
            }}
          />
        </div>
      </Aside>
    )}
  />
);

export default Sidebar;
