import {render} from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/theme-provider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>,
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)
