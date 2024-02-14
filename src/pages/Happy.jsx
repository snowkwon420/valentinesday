import React from 'react';
import styled from 'styled-components';

function Happy() {
  return (
    <StyledSection>
      <iframe
        title='sec'
        src='https://giphy.com/embed/26gsaCAWWq0egVxsY'
        width='300'
        height='300'
        style={{ pointerEvents: 'none', marginTop: '100px' }}
      ></iframe>
      <StlyedComment>Happy Valentine's Day 🥰</StlyedComment>
      <iframe
        title='thd'
        src='https://giphy.com/embed/tNSjGZ4KLJetOgGyZX'
        width='200'
        height='200'
        style={{ pointerEvents: 'none', marginTop: '100px' }}
      ></iframe>
    </StyledSection>
  );
}

const StlyedComment = styled.div`
  margin-top: 30px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 30px;
`;
const StyledSection = styled.section`
  height: 100vh;
  padding-top: 0px;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

export default Happy;
