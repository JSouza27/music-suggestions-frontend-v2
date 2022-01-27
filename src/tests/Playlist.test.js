import React from "react";
import { render, screen } from "@testing-library/react";
import Playlist from "../pages/playlist/Index";

describe('test playlist page', () => {
  test('checks if there is a bust button', () => {
    // acessar os elementos da tela
      render(<Playlist />);
      const searchButton = screen.getByTestId("btn-search");
    
    // fazer os testes
      expect(searchButton).toBeInTheDocument();
    });
});


// acessar os elementos da tela

// interagir com os elementos (se for necessário)

// fazer os testes