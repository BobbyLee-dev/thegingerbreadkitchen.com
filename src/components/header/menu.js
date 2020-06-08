import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import SubMenuButton from './sub-menu-button';
import { FaInstagram } from 'react-icons/fa';

const mobileNavBreakPoint = `890px`;
const mobileNavMaxBreakPoint = `889px`;

const NavWrap = styled.div`
  @media (max-width: ${mobileNavMaxBreakPoint}) {
    height: 40px;
  }
  padding: 10px 20px;
  background-color: #fbf5ed;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }
  @media (min-width: ${mobileNavBreakPoint}) {
    padding: 10px 40px;
  }
`;

const MainNav = styled(animated.nav)`
  padding-left: 40px;
  @media (max-width: ${mobileNavMaxBreakPoint}) {
    background-color: #fbf5ed;
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
    /* background-color: white; */
    padding-left: 0;
    /* padding: 0 40px; */
    /* position: fixed; */
    /* left: 0;
    right: 0;
    width: 100%;
    top: 0;
    z-index: 100; */
    display: flex !important;
    justify-content: center;
    align-items: flex-end;
    opacity: 1 !important;
  }
  &.open {
    background-color: #fbf5ed;
    /* background: linear-gradient(
      90deg,
      rgba(51, 12, 131, 1) 29%,
      rgba(55, 180, 146, 1) 100%
    ); */
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
      color: #000;
      text-transform: uppercase;
      display: block;
      padding: 16px 20px;
      text-decoration: none;
      font-size: 11px;
      line-height: 100%;
      transition: opacity 0.2s;
      @media (min-width: 600px) {
        /* font-size: 30px; */
      }
      @media (min-width: ${mobileNavBreakPoint}) {
        padding: 10px 20px;
        font-size: 11px;
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

const SocialNav = styled.div`
  position: absolute;
  width: fit-content;
  right: 20px;
  z-index: 100;
  display: flex;
  @media (min-width: 768px) {
    left: 40px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #222;
    font-size: 11px;
  }
  svg {
    margin: 0 5px;
    font-size: 12px;
    @media (min-width: ${mobileNavBreakPoint}) {
      /* font-size: 18px; */
    }
  }
`;

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 2rem; */
  height: 16px;
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
    width: 19px;
    height: 2px;
    background: black;
    border-radius: 10px;
    position: relative;
    transform-origin: 2px;
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
      <NavWrap>
        <SocialNav>
          <a
            href="https://www.instagram.com/sonia.d.lee/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <FaInstagram /> Follow Me
          </a>
        </SocialNav>
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
      </NavWrap>
    </>
  );
};

export default MainMenu;
