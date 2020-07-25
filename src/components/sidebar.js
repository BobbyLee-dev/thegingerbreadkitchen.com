import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AboutUsSvg from '../images/about-us';

const Aside = styled.aside`
  max-width: 300px;
  /* margin: 73px 0 auto 0; */
`;

const AboutMeBlock = styled.div`
  .img-wrap {
    border-radius: 11px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
    svg {
      width: 200px;
      height: auto;
    }
  }
  .about-me {
    background: #fffbf8;
    padding: 20px;
  }
`;

const Categories = styled.div`
  a {
    display: block;
    padding: 15px 10px;
    background: #fffbf8;
    margin: 20px 0;
    color: #a24d4a;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    line-height: 100%;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    /* transition: all 0.3s; */
    &:hover {
      background: #d3a595;
      color: #fff;
    }
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
            categories {
              nodes {
                link
                id
                name
                slug
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
                <h2>
                  <AboutUsSvg />
                </h2>
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
          {data.wpgraphql.categories.nodes.length > 1 && (
            <Categories>
              {data.wpgraphql.categories.nodes.map(category => {
                return (
                  <Link to={`category/${category.slug}`}>{category.name}</Link>
                );
              })}
            </Categories>
          )}
        </Aside>
      )}
    />
  );
};

export default Sidebar;
