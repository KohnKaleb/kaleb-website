import React from 'react';
import styled from 'styled-components';
import Kaleb_Resume from '../images/KalebResume.pdf';
import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    object {
        width: min(850px, 90vw);
        height: 100%;

        @media (max-width: 768px) {
            width: 95vw;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ObjectContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Resume = () => {
    return (
        <Section id="resume">
            <Navbar />
            <Container>
                <ObjectContainer>
                    <object data={Kaleb_Resume} type="application/pdf">
                        <p>Unable to display PDF file. <a href={Kaleb_Resume}>Download</a> instead.</p>
                    </object>
                </ObjectContainer>
            </Container>
        </Section>
    );
}

export default React.memo(Resume);
