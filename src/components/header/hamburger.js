// Moved to menu.js so that I could use animations ie - when on the home page and home is clicked on the mobile nav
// animate the nav.

// import React, { useState } from 'react';

// import styled from 'styled-components';
// import { useSpring, animated } from 'react-spring';

// const mobileNavBreakPoint = `890px`;

// const StyledBurger = styled.button`
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }
//   @media (min-width: ${mobileNavBreakPoint}) {
//     display: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: #fff;
//     border-radius: 10px;
//     position: relative;
//     transform-origin: 1px;
//   }
// `;

// const Burger = ({ isNavOpen, setNavOpen }) => {
//   const [isBurgerOpen, setBurgerOpen] = useState(false);

//   const topBun = useSpring({
//     transform: isBurgerOpen ? 'rotate(45deg)' : 'rotate(0deg)'
//   });

//   const meat = useSpring({
//     transform: isBurgerOpen ? 'translateX(-20px)' : 'translateX(0px)',
//     opacity: isBurgerOpen ? '0' : '1'
//   });

//   const bottomBun = useSpring({
//     transform: isBurgerOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
//   });

//   return (
//     <>
//       <StyledBurger
//         isBurgerOpen={isBurgerOpen}
//         setBurgerOpen={setBurgerOpen}
//         onClick={() => {
//           setBurgerOpen(!isBurgerOpen);
//           setNavOpen(!isNavOpen);
//         }}
//       >
//         <animated.div style={topBun} />
//         <animated.div style={meat} />
//         <animated.div style={bottomBun} />
//       </StyledBurger>
//     </>
//   );
// };

// export default Burger;
