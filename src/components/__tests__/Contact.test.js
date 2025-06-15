const { render, screen } = require("@testing-library/react")
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<ContactUs/>)

    const heading = screen.getByRole("heading");
    

})