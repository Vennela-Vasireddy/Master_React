import { render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "./MOCKS/mockData.json"
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
 return Promise.resolve({
    json: () => 
        { return Promise.resolve(MOCK_DATA)
    },
  });
});


it("Should render search component", async() => {

    await act( async() =>
     {
        render(
        <BrowserRouter> 
        <Body/>
        </BrowserRouter>
        )
     })

    const bodyElement = screen.getByRole("button", {name: "Search"})

    expect(bodyElement).toBeInTheDocument()

})