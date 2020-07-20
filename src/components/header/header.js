import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';
import SiteLogo from '../../images/site-logo';

const HeaderWrapper = styled.header`
  font-family: 'Overpass', sans-serif;

  /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 20px 50px;
  align-items: center;
  @media (min-width: 768px) {
    padding: 100px 20px 75px;
  }
  @media (min-width: 1150px) {
    padding: 120px 20px;
  }
  @media (min-width: 1400px) {
    /* padding: 60px 20px 40px; */
  }
  @media (min-width: 2000px) {
  }
  .site-title {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    svg {
      width: 100%;
      height: auto;
      max-width: 100%;
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

const Header = ({ siteTitle, currentPage }) => {
  return (
    <>
      <HeaderWrapper>
        <MainMenu />
        {currentPage === 'Home' && (
          <h1 className="site-title">
            <Link to="/">
              <SiteLogo />
            </Link>
          </h1>
        )}
        {currentPage !== 'Home' && (
          <div className="site-title">
            <Link to="/">
              <SiteLogo />
            </Link>
          </div>
        )}
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
