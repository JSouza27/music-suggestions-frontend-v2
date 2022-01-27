import React from 'react';
import {
  Wrapper,
  SearchBar,
  RecommendedContent,
  PlayerContent,
  PlaylistContent,
  ButtonSearch,
  ButtonMenu,
} from './Style';
import { BiMenuAltLeft, BiSearch } from 'react-icons/bi';

function Playlist() {
  return (
    <Wrapper>
      <SearchBar>
        <ButtonMenu><BiMenuAltLeft /></ButtonMenu>
        <ButtonSearch><BiSearch /></ButtonSearch>
      </SearchBar>
      <RecommendedContent>
        carrousel de recomendados
      </RecommendedContent>
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
