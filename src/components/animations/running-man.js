import React from 'react';
import styled from 'styled-components';

const speed = `${1}s`;
const halfSpeed = `${0.5}s`;

const RunningArea = styled.div`
  margin-bottom: 40px;
  @keyframes robot {
    0%,
    50%,
    100% {
      transform: translateY(0px) rotate(7deg);
    }
    15%,
    65% {
      transform: translateY(-4px) rotate(5deg);
    }
  }
  @keyframes head {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    25%,
    75% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
  @keyframes trans {
    0%,
    100% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(3px);
    }
  }
  @keyframes arms1 {
    0%,
    100% {
      transform: rotate(50deg);
    }
    50% {
      transform: rotate(-70deg);
    }
  }
  @keyframes arms2 {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(-100deg);
    }
  }
  @keyframes legs1 {
    0%,
    100% {
      transform: rotate(60deg);
    }
    40% {
      transform: rotate(-90deg);
    }
  }
  @keyframes legs2 {
    0%,
    100% {
      transform: rotate(2deg);
    }
    33% {
      transform: rotate(150deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
  @keyframes shadow {
    0%,
    50%,
    100% {
      transform: scale(1.5);
    }
    25%,
    75% {
      transform: scale(0.98);
    }
  }
`;

const Robot = styled.div`
  position: relative;
  height: 78px;
  width: 20px;
  margin: 0 auto;
  animation: robot ${speed} infinite ease-in-out;
  z-index: 2;
  div {
    position: absolute;
    transform-origin: 50% 0;
  }
  .r div {
    background: red;
  }
  .l div {
    background: rgb(158, 255, 255);
  }
  .leg.r,
  .arm.l {
    animation: trans ${halfSpeed} infinite linear;
  }
  .leg.l,
  .arm.r {
    animation: trans ${speed} infinite linear;
  }
  .head {
    border-radius: 50%;
    top: 10px;
    left: 5px;
    width: 9px;
    height: 10px;
    margin: 0 auto;
    transform-origin: 20% 80%;
    animation: head ${speed} infinite linear;
    background: rgb(158, 255, 255);
  }
  .arm {
    left: 5px;
    top: 22.5px;
    width: 8px;
    /* height: 5.5px; */
    div {
      border-radius: 2px;
      top: 100%;
      left: 0;
      width: 100%;
      height: 10px;
      box-sizing: border-box;
      transform: rotate(5deg);
      animation: arms1 ${speed} infinite linear;
      div {
        animation: arms2 ${speed} infinite linear;
      }
    }
    &.l div {
      animation-delay: -${halfSpeed};
    }
  }
  .leg {
    top: 45px;
    left: 5px;
    width: 8px;
    /* height: 4px; */
    div {
      border-radius: 5px;
      width: 100%;
      height: 15px;
      top: 100%;
      animation: legs1 ${speed} infinite linear;
      div {
        animation: legs2 ${speed} infinite linear;
      }
    }
    &.r div {
      animation-delay: -${halfSpeed};
    }
  }
`;

const Shadow = styled.div`
  position: relative;
  width: 22px;
  height: 3px;
  margin: 0 auto;
  border-radius: 50%;
  background: #05314f;
  animation: shadow ${speed} infinite linear;
  z-index: 1;
`;

const RunningMan = ({ color, shadowColor }) => {
  return (
    <RunningArea>
      <Robot>
        <div style={{ border: `solid 1px ${color}` }} className="head"></div>
        <div style={{ border: `solid 1px ${color}` }} className="arm l">
          <div style={{ border: `solid 1px ${color}` }}>
            <div style={{ border: `solid 1px ${color}` }}></div>
          </div>
        </div>
        <div style={{ border: `solid 1px ${color}` }} className="leg l">
          <div style={{ border: `solid 1px ${color}` }}>
            <div style={{ border: `solid 1px ${color}` }}></div>
          </div>
        </div>
        <div style={{ border: `solid 1px ${color}` }} className="leg r">
          <div style={{ border: `solid 1px ${color}` }}>
            <div style={{ border: `solid 1px ${color}` }}></div>
          </div>
        </div>
        <div style={{ border: `solid 1px ${color}` }} className="arm r">
          <div style={{ border: `solid 1px ${color}` }}>
            <div style={{ border: `solid 1px ${color}` }}></div>
          </div>
        </div>
      </Robot>
      <Shadow style={{ border: `solid 1px ${shadowColor}` }} />
    </RunningArea>
  );
};

export default RunningMan;
