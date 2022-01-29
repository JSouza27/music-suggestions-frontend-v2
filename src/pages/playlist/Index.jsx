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
import CardCarrousel from './components/CardCarrousel/Index';

function Playlist() {
  return (
    <Wrapper>
      <SearchBar>
        <ButtonMenu><BiMenuAltLeft /></ButtonMenu>
        <ButtonSearch><BiSearch /></ButtonSearch>
      </SearchBar>
      <RecentPlayed>
        <h1>Recentes</h1>
        <CardCarrousel />
      </RecentPlayed>
      <PlaylistContent>
        lista de musicas
      </PlaylistContent>
      <PlayerContent>
        player
      </PlayerContent>
    </Wrapper>
  );
}

export default Playlist;
