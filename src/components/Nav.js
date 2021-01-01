import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NAV_HEIGHT = "2em";

const NavTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 800;
    margin: 0;
    line-height: 0;
    text-transform: uppercase;

    & > a {
        color: ${(props) => props.theme.color.textPrimary};
        text-decoration: none;
    }
`;

const NavItem = styled.li`
    line-height: 0;
    margin: 0 8px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.color.textPrimary};

    &:hover {
        color: ${(props) => props.theme.color.textSecondary};
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
    z-index: ${(props) => props.theme.zIndex.nav};
    width: 100%;
    height: ${NAV_HEIGHT};
    font-family: ${(props) => props.theme.fontFamily.body};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.color.backgroundPrimary};
    padding: 12px 20px;
    border-bottom: 1px solid ${(props) => props.theme.color.outline};
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
