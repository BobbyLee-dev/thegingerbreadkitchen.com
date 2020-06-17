import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Aside = styled.aside`
  max-width: 300px;
  margin: 73px 0 auto 0;
`;

const AboutMeBlock = styled.div`
  .img-wrap {
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
  }
`;

const Sidebar = props => {
  const { currentPage } = props;

  return (
    <StaticQuery
      query={graphql`
        query SidebarQuery {
          wpgraphql {
            pageBy(uri: "sidebar") {
              Sidebar {
                aboutMeText
                aboutMeButtonText
                aboutMeImage {
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
      render={data => (
        <Aside>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {currentPage !== 'About' && (
            <AboutMeBlock className="about-me-block sidebar-block">
              <div className="img-wrap">
                <Img
                  alt="About Me"
                  fluid={
                    data.wpgraphql.pageBy.Sidebar.aboutMeImage.imageFile
                      .childImageSharp.fluid
                  }
                />
              </div>
              <div className="about-me">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.wpgraphql.pageBy.Sidebar.aboutMeText
                  }}
                />
                <Link to="/about" className="button">
                  {data.wpgraphql.pageBy.Sidebar.aboutMeButtonText}
                </Link>
              </div>
            </AboutMeBlock>
          )}
        </Aside>
      )}
    />
  );
};

export default Sidebar;
