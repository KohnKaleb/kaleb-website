import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Python from "./Python";
import C from "./C";
import ReactModel from "./ReactModel";
import Html from "./Html";
import Css from "./Css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 150vh;
  margin: 0 auto;
  height: 50vh;
`;

const Text = styled.div`
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 100%;
`;

const BottomText = styled.div`
  margin-right: 15px;
  margin-bottom: 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Logos = styled.div`
  width: 100%;
`;

const About = () => {
  return (
    <Section id="about">
      <Navbar />
      <Top>
        <div>
          <Text
            id="carouselContent"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active text-center p-4">
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  I've been coding for over four years dabbling in mobile
                  development, full stack development, AI and data science. I'm
                  a Senior at UW-Madison Graduating in May 2025.
                </p>
              </div>
              <div className="carousel-item text-center p-4">
                <p style={{ fontSize: "20px" }}>
                  Through my studies I have gained experience in various
                  languages and frameworks and have gotten the opportunity to
                  work on a variety of projects ranging from web development to
                  machine learning, and neural networks.
                </p>
              </div>
              <div className="carousel-item text-center p-4">
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  I am also a member of the Wisconsin Air National Guard and act
                  as a maintenance analyst, tracking maintenance trends,
                  analyzing statistics and providing recommendations to
                  leadership.
                </p>
              </div>
              <div className="carousel-item text-center p-4">
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  My Air Force experience has given me the opportunity to work
                  with a variety of people and has taught me the importance of
                  communication and teamwork, as well as statistical analysis
                  and data visualization. I even had the opportunity to get
                  deployed to Saudi Arabia to work on my skills in a combat
                  environment.
                </p>
              </div>
            </div>
            <a
              style={{ left: "-100px" }}
              className="carousel-control-prev"
              href="#carouselContent"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              style={{ right: "-100px" }}
              className="carousel-control-next"
              href="#carouselContent"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </Text>
        </div>
      </Top>
      <Bottom>
        <BottomText>
          <BoldText>Languages</BoldText>: Python, Java, JavaScript, C, HTML,
          CSS, SQL
        </BottomText>
        <BottomText>
          <BoldText>Frameworks</BoldText>: React, Vue.js, Spring MVC, Django,
          Node.js, Express, Android Studio
        </BottomText>
        <Logos>
          <Canvas style={{ width: "100vw", height: "40vh"}}>
              <group scale={[2, 2, 2]}>
                <Stage>
                  <Python
                    position={[-280, 0, 0]}
                    scale={[5.3, 5.3, 5.3]}
                    rotation={[0, 0, 0]}
                  />
                  <C
                    position={[60, 0, 0]}
                    scale={[5.3, 5.3, 5.3]}
                    rotation={[0, 0, 0]}
                  />
                  <ReactModel
                    position={[380, 0, 0]}
                    scale={[73, 73, 73]}
                    rotation={[0, 0, 0]}
                  />
                  <Html
                    position={[-550, -285, 0]}
                    scale={[1.5, 1.5, 1.5]}
                    rotation={[0, 0, 0]}
                  />
                  <Css
                    position={[670, -285, 0]}
                    scale={[1.5, 1.5, 1.5]}
                    rotation={[0, 0, 0]}
                  />
                </Stage>
              </group>
            <OrbitControls />
          </Canvas>
        </Logos>
      </Bottom>
    </Section>
  );
};

export default React.memo(About);
