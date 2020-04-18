import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaInstagram, FaRunning } from 'react-icons/fa';

const LowerFooter = () => {
  const LowerFooterSection = styled.section`
    background-color: #191919;
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px !important;
    a {
      &:hover {
        color: #dea08c;
      }
    }
    .back-to-top {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .b2topWrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const SocialWrap = styled.div`
    display: flex;
    margin-bottom: 20px;
    svg {
      font-size: 42px;
    }
  `;

  const SocialItem = styled.div`
    width: 55px;
    height: 55px;
    margin: 0 10px;
    @media (min-width: 768px) {
      margin: 0 15px;
    }
    a {
      font-size: 24px;
      line-height: 24px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
    }
  `;

  const FooterNav = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    li {
      margin: 10px 20px;
      a {
        color: #fff;
      }
    }
  `;

  const CopyRight = styled.div`
    font-family: 'Overpass', sans-serif;
    font-size: 16px;
    font-family: 'Amiri', serif;
    font-size: 14px;
    a {
      color: #fff;
      text-decoration: none;
    }
    /* .running-coder {
      &:hover {
        color: rgb(250, 208, 0);
      }
    } */
    svg {
      margin-top: 5px;
      font-size: 22px;
    }
  `;

  const mainNav = useStaticQuery(graphql`
    query FooterNavQuery {
      wpgraphql {
        menus {
          nodes {
            menuItems {
              nodes {
                url
                label
                id
                childItems {
                  nodes {
                    label
                    url
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const navItemObjects = mainNav.wpgraphql.menus.nodes[0].menuItems.nodes;

  return (
    <LowerFooterSection className="content">
      <div>View more and see my most recent creations:</div>
      <SocialWrap>
        <SocialItem>
          <a
            className="instagram"
            title="Instagram"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/sonia.d.lee/"
          >
            <FaInstagram />
          </a>
        </SocialItem>
      </SocialWrap>

      <FooterNav>
        {navItemObjects.map(item => {
          return (
            <React.Fragment key={item.id}>
              <li
                className={
                  item.childItems.nodes.length > 0 ? 'has-sub-menu' : ''
                }
              >
                <Link
                  to={(() => {
                    if (item.url.includes('sapphireapi.com')) {
                      return item.url.replace(
                        'https://sapphireapi.com/sofya',
                        ''
                      );
                    } else {
                      return item.url; // make into no link somehow
                    }
                  })()}
                >
                  {item.label}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </FooterNav>

      <CopyRight>
        <div>
          Copyright ©{new Date().getFullYear()} The Gingerbread Kitchen -
          Healthy Comfort Food. All rights reserved
        </div>
        <a
          className="running-coder"
          href="https://www.therunningcoder.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Website developed by The Running Coder</div>
          <div>
            <FaRunning />
          </div>
        </a>
      </CopyRight>
    </LowerFooterSection>
  );
};

export default LowerFooter;
