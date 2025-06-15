import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";

    test("Should load header component with a login button", () => {
        render(
        <BrowserRouter>
        

            <Provider store={appStore}>
            <Header/>
            </Provider>
                </BrowserRouter>

        )

        const loginButton = screen.getByRole("button", { name: "Log_In" });
        expect(loginButton).toBeInTheDocument();
    
    })

    test("Should change names", () => {
        render(
        <BrowserRouter>
        

            <Provider store={appStore}>
            <Header/>
            </Provider>
                </BrowserRouter>

        )

        const loginButton = screen.getByRole("button", { name: "Log_In" });
        const logoutButton = screen.getByRole("button", { name: "Log_Out" });

        fireEvent.click(loginButton);

        expect(logoutButton).toBeInTheDocument();
    
    })