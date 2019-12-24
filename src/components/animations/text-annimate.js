import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

const TextAnimation = ({ text }) => {
  const regex = /(<([^>]+)>)/gi;
  const textWithOutHtml = text.replace(regex, '');
  const test = useRef(null);
  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const charArray = test.current.innerHTML.split(' ').map(word => {
      const chars = word.split('').map(char => {
        return `<div class="char" style="position: relative; display:inline-block; margin: 0; z-index: 20;">${char}</div>`;
      });
      return `<div class="word" style="position: relative; display:inline-block;">${chars.join(
        ''
      )}</div>`;
    });
    test.current.innerHTML = charArray.join(' ');
  }, []);

  useEffect(() => {
    const currentArray = test.current.querySelectorAll('div');

    currentArray.forEach(function(i) {
      TweenMax.from(i, 2.5, {
        opacity: 0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: 0.1,
        delay: i * 0.02,
        yoyo: true,
        repeat: -1,
        repeatDelay: 4
      });
    });
  }, []);

  return (
    <div
      style={
        {
          // position: 'relative'
        }
      }
    >
      <div
        style={{
          height: '500px',
          position: 'absolute',
          width: '100%',
          left: '0',
          right: '0',
          padding: '0 20px',
          zIndex: '20'
        }}
        ref={test}
      >
        {textWithOutHtml}
      </div>
    </div>
  );
};

export default TextAnimation;
