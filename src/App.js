import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./theme";
import { Nav, PageContainer } from "./components";
import { ExplorePage, SubmitPage, AboutPage, HomePage } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="App">
                <Nav />
                <PageContainer>
                    <Switch>
                        <Route path="/explore">
                            <ExplorePage />
                        </Route>
                        <Route path="/submit">
                            <SubmitPage />
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </PageContainer>
            </div>
        </BrowserRouter>
    );
}
