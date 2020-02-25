import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: #202124;
  width: 700px;
  height: 500px;
  border: rgb(80, 80, 85) 1px solid;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
`;

const TopBar = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 2px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin: 0px 2px;
  background-color: ${props => props.color};
`;

export function Window({ children }) {
  return (
    <Body>
      <TopBar>
        <Circle color="#EC6559" />
        <Circle color="#E1C04C" />
        <Circle color="#72BE47" />
      </TopBar>
      {children}
    </Body>
  );
}
