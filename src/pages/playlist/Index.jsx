import React from 'react';
import {
  Wrapper,
  SearchBar,
  RecentPlayed,
  PlayerContent,
  PlaylistContent,
  ButtonSearch,
  ButtonMenu,
} from './Style';
import { BiMenuAltLeft, BiSearch } from 'react-icons/bi';
import Carousel from './components/Carousel/Index';
import HorizontalCard from './components/HorizontalCard/Index';

function Playlist() {
  const data = [1,2,3,4,5,6,7,8];
  return (
    <Wrapper>
      <SearchBar>
        <ButtonMenu><BiMenuAltLeft /></ButtonMenu>
        <ButtonSearch><BiSearch /></ButtonSearch>
      </SearchBar>

      <RecentPlayed>
        <h1>Recentes</h1>
        <Carousel />
      </RecentPlayed>

      <PlaylistContent>
        <h1>Playlist</h1>
        {
          data.map((d) => <HorizontalCard />)
        }
      </PlaylistContent>

      <PlayerContent>
        player
      </PlayerContent>
    </Wrapper>
  );
}

export default Playlist;
