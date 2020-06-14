import React from 'react';
import styled from 'styled-components';
// import UpperFooter from './upper-footer';
import LowerFooter from './lower-footer';

const FooterWrap = styled.footer``;

const Footer = () => {
  return (
    <FooterWrap>
      {/* <UpperFooter /> */}
      <LowerFooter />
    </FooterWrap>
  );
};

export default Footer;
