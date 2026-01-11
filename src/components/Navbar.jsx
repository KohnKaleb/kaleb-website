import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext.jsx';
import '../scss/Navbar.scss';

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    top: 0;
    width: 100%;
    padding: 10px 0;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.div`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        gap: 10px;
    }
`;

const ListItem = styled.div`
    cursor: pointer;
`;

const AElements = styled.a`
    color: inherit;
    text-decoration: none;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media only screen and (max-width: 1400px) {
        padding: 0 15px;
    }

    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

const Navbar = () => {
    const { isLight } = useTheme();
    
    return (
        <Section>
            <Container>
                <Links>
                    <List className={isLight ? "nav nav-underline nav-light" : "nav nav-underline"}>
                        <ListItem className="nav-item">
                            <AElements className="nav-link" href="#home">Home</AElements>
                        </ListItem>
                        <ListItem className="nav-item">
                            <AElements className="nav-link" href="#about">About</AElements>
                        </ListItem>
                        <ListItem className="nav-item">
                            <AElements className="nav-link" href="#projects">Projects</AElements>
                        </ListItem>
                        <ListItem className="nav-item">
                            <AElements className="nav-link" href="#resume">Resume</AElements>
                        </ListItem>
                        <ListItem className="nav-item">
                            <AElements className="nav-link" href="#contact">Contact</AElements>
                        </ListItem>
                    </List>
                </Links>
            </Container>
        </Section>
    );
};

export default Navbar;
