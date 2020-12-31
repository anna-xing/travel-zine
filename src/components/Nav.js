import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { darkGrey, lightGrey } from "../theme";

const NavTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 800;
    margin: 0;
    line-height: 0;
    text-transform: uppercase;

    & > a {
        color: black;
        text-decoration: none;
    }
`;

const NavItem = styled.li`
    line-height: 0;
    margin: 0 8px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: ${darkGrey};
    }
`;

const LinkContainer = styled.ul`
    display: float;
    right: 0;
    padding: 0 28px;
    list-style-type: none;
`;

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 2em;
    font-family: "Sorts Mill Goudy", serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 12px 20px;
    border-bottom: 1px solid ${lightGrey};
`;

export const Nav = () => {
    return (
        <NavBar>
            <NavTitle>
                <Link to="/">Internet Travels</Link>
            </NavTitle>
            <LinkContainer>
                <NavItem>
                    <StyledLink to="/explore">Explore</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/submit">Submit</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/about">About</StyledLink>
                </NavItem>
            </LinkContainer>
        </NavBar>
    );
};
