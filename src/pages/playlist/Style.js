import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #F7FAFF;
  color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export const SearchBar = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;

export const ButtonSearch = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 28px;
  justify-content: center;
  height: 32px;
  margin-right: 1rem;
  outline: none;
  width: 32px;
`;

export const ButtonMenu = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 32px;
  justify-content: center;
  height: 48px;
  margin-left: 1rem;
  outline: none;
  width: 48px;
`;

export const RecommendedContent = styled.div`
  border: 1px solid red;
  height: 255px;
  margin: 20px 0 20px 17px;
`;

export const PlaylistContent = styled.div`
  border: 1px solid green;
  height: 100%;
  padding: 17px;
`;

export const PlayerContent = styled.div`
  border: 1px solid blue;
  bottom: 0;
  display: block;
  height: 125px;
  margin-top: 32px;
  position: fixed;
  width: 100%;
`;
