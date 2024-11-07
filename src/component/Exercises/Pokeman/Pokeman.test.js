import PokemanReducer from "./PokemanReducer"
import { render, screen } from "@testing-library/react";
import React from "react";

/**
 * @jest-environment jsdom
 */
it('test pokeman', async ()=>{
    // render(<App />);
    render(<PokemanReducer initialUrl='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'/>);
    expect(await screen.findByRole('list')).toBeInTheDocument();
})