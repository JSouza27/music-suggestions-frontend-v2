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
  display: flex;
  justify-content: space-between;
  height: 6.24rem;
  width: 100%;
`;

export const ButtonSearch = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 1.75rem;
  justify-content: center;
  height: 3rem;
  margin-right: 1rem;
  outline: none;
  width: 3rem;
`;

export const ButtonMenu = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  height: 3rem;
  margin-left: 1rem;
  outline: none;
  width: 3rem;
`;

export const RecentPlayed = styled.div`
  height: 15.93rem;
  margin: 20px 0 20px 17px;

  & > h1 {
    font-size: 24px;
    font-weight: 500;
    padding: 0;
  }
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
  height: 7.81rem;
  margin-top: 2rem;
  position: fixed;
  width: 100%;
`;
