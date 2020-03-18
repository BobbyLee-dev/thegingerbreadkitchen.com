import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';
import SiteLogo from '../../components/site-logo';

const HeaderWrapper = styled.header`
  font-family: 'Overpass', sans-serif;
  background-color: white;
  /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  /* position: fixed; */
  /* left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100; */
  @media (min-width: 1400px) {
    padding: 10px 40px;
  }
  @media (min-width: 2000px) {
    padding: 10px 80px;
  }
  .site-title {
    z-index: 10;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .site-logo {
      width: 200px;
      height: 130px;
      max-width: 300px;
      margin-bottom: 20px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    h1 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 22px;
      margin: 0;
      color: #000;
      @media (min-width: 768px) {
        font-size: 60px;
      }
      @media (min-width: 1400px) {
        font-size: 80px;
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <>
      <HeaderWrapper>
        <MainMenu />
        <Link className="site-title" to="/">
          <div className="site-logo">
            <SiteLogo />
          </div>

          <h1>{siteTitle}</h1>
        </Link>
      </HeaderWrapper>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
