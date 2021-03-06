import styled from "styled-components";

export const WaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
  background: transparent;
`;

export const Wave = styled.div`
  width: 100%;
  height: 15vh;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5vw;
  background: rgba(138, 128, 211, 0.5);
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  // &:hover {
  //   background: #ddd;
  // }
`;
