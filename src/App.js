import styled from "styled-components";
import React, { useEffect } from "react";
import About from "./components/Aboutc.jsx";
import Contact from "./components/Contactc.jsx";
import Home from "./components/Homec.jsx";
import Projects from "./components/Projectsc.jsx";
import Resume from "./components/Resume.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-size: cover;
  background-position: center;
  scrollbar-width: none;
  font-family: var(--bs-font-sans-serif);

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

function AppContent() {
  const { currentTheme, theme } = useTheme();

  useEffect(() => {
    const container = document.getElementById("container");

    const handleScroll = (event) => {
      event.preventDefault();
      const speed = 0.5; // Adjust this value for desired scroll speed

      container.scrollBy({
        top: event.deltaY * speed,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <Container
      id="container"
      data-bs-theme={theme}
      style={{
        color: currentTheme.textColor,
        backgroundImage: `url(${currentTheme.background})`,
      }}
    >
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
