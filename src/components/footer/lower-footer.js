import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaCodepen, FaList } from 'react-icons/fa';

const LowerFooter = () => {
  const LowerFooterSection = styled.section`
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
      background-color: #262f38;
      font-size: 24px;
      line-height: 24px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
      cursor: pointer;
      &:hover {
        background-color: rgb(85, 26, 139);
        box-shadow: 0 0 0 3px rgba(4, 94, 201, 0.1);
        transform: scale(0.9);
      }
    }
  `;

  const CopyRight = styled.div`
    text-transform: uppercase;
    color: #8f9aa7;
    font-size: 14px;
    span {
      color: #e31b6d;
      font-family: 'Open Sans';
    }
  `;

  return (
    <LowerFooterSection className="content">
      <SocialWrap>
        <SocialItem>
          <a
            title="LinkedIn"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/robert-lee-254341108/"
          >
            <FaLinkedinIn />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            title="GitHub"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://github.com/runningCoder81"
          >
            <FaGithub />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            title="CodePen"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://codepen.io/runningCoder/"
          >
            <FaCodepen />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            title="Sapphire Lists"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://sapphirelists.netlify.com/"
          >
            <FaList />
          </a>
        </SocialItem>
      </SocialWrap>
      <CopyRight>
        Bobby Lee <span>©{new Date().getFullYear()}</span>
      </CopyRight>
    </LowerFooterSection>
  );
};

export default LowerFooter;
