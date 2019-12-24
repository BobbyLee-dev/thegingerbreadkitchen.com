import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';

const HeaderWrapper = styled.header`
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  @media (min-width: 1400px) {
    padding: 10px 40px;
  }
  @media (min-width: 2000px) {
    padding: 10px 80px;
  }
  .site-title {
    z-index: 10;
    text-decoration: none;
    h1 {
      font-size: 22px;
      margin: 0;
      color: #fff;
      @media (min-width: 768px) {
        font-size: 30px;
      }
      @media (min-width: 1400px) {
        font-size: 40px;
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <>
      <HeaderWrapper>
        <Link className="site-title" to="/">
          <h1>{siteTitle}</h1>
        </Link>

        <MainMenu />
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
