import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import SubMenuButton from './sub-menu-button';

const mobileNavBreakPoint = `890px`;
const mobileNavMaxBreakPoint = `889px`;

const MainNav = styled(animated.nav)`
  padding-left: 40px;
  @media (max-width: ${mobileNavMaxBreakPoint}) {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    padding-top: 100px;
    z-index: 11;
  }
  @media (min-width: 600px) {
    padding-left: 150px;
  }
  @media (min-width: ${mobileNavBreakPoint}) {
    display: block !important;
    opacity: 1 !important;
    padding-left: 0;
  }
  &.open {
    background: linear-gradient(
      90deg,
      rgba(51, 12, 131, 1) 29%,
      rgba(55, 180, 146, 1) 100%
    );
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  @media (min-width: ${mobileNavBreakPoint}) {
    display: flex;

    justify-content: flex-end;
  }
  li {
    margin: 0;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      font-style: italic;
      display: block;
      padding: 16px 20px;
      text-decoration: none;
      font-size: 20px;
      line-height: 100%;
      transition: opacity 0.2s;
      @media (min-width: 600px) {
        font-size: 30px;
      }
      @media (min-width: ${mobileNavBreakPoint}) {
        padding: 10px 20px;
        font-size: 18px;
      }
      /* &:hover {
        opacity: 0.7;
        text-decoration: underline;
      } */
    }
    &.has-sub-menu {
      position: relative;
      a {
        padding-right: 5px;
      }
      ul {
        list-style: none;
        background: #122738;
        position: absolute;
        margin: 0;
        border-top: 2px solid rgb(255, 120, 248);
        right: -120px;
        @media (min-width: 600px) {
          right: -175px;
        }
        @media (min-width: ${mobileNavBreakPoint}) {
          top: 48px;
          right: 0;
        }
        @media (min-width: 1400px) {
          top: 51px;
        }
        li {
          a {
            padding: 10px 20px;
            width: max-content;
            display: block;
          }
        }
      }
    }
  }
`;

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  &:focus {
    outline: none;
  }
  @media (min-width: ${mobileNavBreakPoint}) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }
`;

const MainMenu = ({ style }) => {
  const mainNav = useStaticQuery(graphql`
    query MainNavQuery {
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

  // Sub Menu
  const [isSubMenuToggled, setSubMenuToggle] = useState(false);
  const revealSubMenu = useSpring({
    display: isSubMenuToggled ? 'block' : 'none',
    opacity: isSubMenuToggled ? '1' : '0'
  });

  // Mobile Nav
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    opacity: isNavOpen ? `1` : `0`,
    display: isNavOpen ? `flex` : `none`
  });

  // Hamburger
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const topBun = useSpring({
    transform: isBurgerOpen ? 'rotate(45deg)' : 'rotate(0deg)'
  });
  const meat = useSpring({
    transform: isBurgerOpen ? 'translateX(-20px)' : 'translateX(0px)',
    opacity: isBurgerOpen ? '0' : '1'
  });
  const bottomBun = useSpring({
    transform: isBurgerOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
  });

  return (
    <>
      <StyledBurger
        isBurgerOpen={isBurgerOpen}
        setBurgerOpen={setBurgerOpen}
        onClick={() => {
          setBurgerOpen(!isBurgerOpen);
          setNavOpen(!isNavOpen);
        }}
      >
        <animated.div style={topBun} />
        <animated.div style={meat} />
        <animated.div style={bottomBun} />
      </StyledBurger>
      <MainNav className={isNavOpen ? 'open' : ''} style={navAnimation}>
        <Menu>
          {navItemObjects.map(item => {
            return (
              <React.Fragment key={item.id}>
                <li
                  className={
                    item.childItems.nodes.length > 0 ? 'has-sub-menu' : ''
                  }
                >
                  <Link
                    onClick={() => {
                      setBurgerOpen(!isBurgerOpen);
                      setNavOpen(!isNavOpen);
                    }}
                    to={(() => {
                      if (item.url.includes('sapphireapi.com')) {
                        return item.url.replace(
                          'https://sapphireapi.com/therunningcoder',
                          ''
                        );
                      } else {
                        return item.url; // make into no link somehow
                      }
                    })()}
                  >
                    {item.label}
                  </Link>
                  {item.childItems.nodes.length > 0 && (
                    <SubMenuButton
                      setSubMenuToggle={setSubMenuToggle}
                      isSubMenuToggled={isSubMenuToggled}
                    />
                  )}

                  {item.childItems.nodes.length > 0 && (
                    <animated.ul style={Object.assign(revealSubMenu)}>
                      {item.childItems.nodes.map(childItem => {
                        return (
                          <li key={childItem.id}>
                            <Link
                              to={childItem.url.replace(
                                'https://sapphireapi.com/therunningcoder',
                                ''
                              )}
                            >
                              {childItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </animated.ul>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </Menu>
      </MainNav>
    </>
  );
};

export default MainMenu;
