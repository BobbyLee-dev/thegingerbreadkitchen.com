import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaInstagram, FaWalking } from 'react-icons/fa';

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
    margin-bottom: 40px;
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
      &:hover {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        background: -webkit-radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        background-clip: text;
        -webkit-background-clip: text;
      }
      .instagram {
        color: transparent;
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
      }
    }
  `;

  const CopyRight = styled.div`
    font-family: 'Overpass', sans-serif;
    font-size: 16px;
    .ginger-copy {
      color: #fbf5ed;
    }
    span {
      color: #dea08c;
    }
    .running-coder {
      font-family: 'Amiri', serif;
      font-size: 14px;
      font-style: italic;
    }
  `;

  return (
    <LowerFooterSection className="content">
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
      <CopyRight>
        <p className="ginger-copy">
          The Gingerbread Kitchen <span>©{new Date().getFullYear()}</span>
        </p>
        <p className="running-coder">
          Website developed by The Running Coder <FaWalking />
        </p>
      </CopyRight>
    </LowerFooterSection>
  );
};

export default LowerFooter;
