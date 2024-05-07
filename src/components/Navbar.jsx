import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.div`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.div`
    cursor: pointer;
`

const AElements = styled.a`
    all: initial;
    cursor: pointer;
    color: inherit; 
    text-decoration: none; 
    &:hover {
        text-decoration: underline; 
        text-decoration-color: purple;
        color: purple;
    }
    &:focus {
        text-decoration: underline; 
        background-color: purple; 
    }
`

const Icons = styled.div`
`


const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem className="nav-item"><AElements className="nav-link" href="#home">Home</AElements></ListItem>
                        <ListItem className="nav-item"><AElements className="nav-link" href="#about">About</AElements></ListItem>
                        <ListItem className="nav-item"><AElements className="nav-link" href="#projects">Projects</AElements></ListItem>
                        <ListItem className="nav-item"><AElements className="nav-link" href="#resume">Resume</AElements></ListItem>
                        <ListItem className="nav-item"><AElements className="nav-link" href="#contact">Contact</AElements></ListItem>
                    </List>
                </Links>
                <Icons>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar