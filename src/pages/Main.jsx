import React, { useState } from 'react';
import Happy from './Happy';
import Button from '../components/Button';
import styled from 'styled-components';

function Main() {
  const [yesButtonWidth, setYesButtonWidth] = useState(100); // 초기 크기 설정
  const [yesButtonHeight, setYesButtonHeight] = useState(50); // 초기 크기 설정
  const [yesButtonSize, setYesButtonSize] = useState(15); // 초기 크기 설정
  const [commentNum, setCommentNum] = useState(0);
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const noComment = [
    'NO',
    'R U Sure?',
    '진짜 no? ',
    '정말로?',
    'FORREAL?',
    'i hate u',
  ];
  const handleNoButtonClick = () => {
    // No 버튼 클릭 시 Yes 버튼 크기 증가
    setYesButtonWidth((prevSize) => prevSize + 40);
    setYesButtonHeight((prevSize) => prevSize + 20);
    setYesButtonSize((prev) => prev + 10);

    if (commentNum < 5) {
      setCommentNum((prev) => prev + 1);
    } else {
      setCommentNum(5);
    }
  };

  const handleYesButtonClick = () => {
    setShowOtherComponent(true);
  };

  return showOtherComponent ? (
    <Happy />
  ) : (
    <BodySection>
      <iframe
        title='first'
        src='https://giphy.com/embed/9tZebYjE6ZhyfVpEac'
        width='300'
        height='300'
        nonClick
        style={{ pointerEvents: 'none', marginTop: '100px' }}
      ></iframe>
      <h1 style={{ marginTop: '30px' }}>Would you be my Valentine?</h1>
      <ButtonSection>
        <Button
          content='YES'
          primary='blue'
          width={yesButtonWidth}
          height={yesButtonHeight}
          fontSize={yesButtonSize}
          onClick={handleYesButtonClick}
        />
        <Button content={noComment[commentNum]} onClick={handleNoButtonClick} />
      </ButtonSection>
    </BodySection>
  );
}

const BodySection = styled.section`
  box-shadow: inset 0 0 10px blue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonSection = styled.section`
  display: flex;
  gap: 10px;
`;

export default Main;
