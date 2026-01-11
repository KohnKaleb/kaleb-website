import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import BarHop from '../images/BarHop.png';
import RunCrafter from '../images/RunCrafter.png';
import OpeningChessPractice from '../images/OpeningChess.png';
import CustomModal from './CustomModal';


const Section = styled.div`
    height: 100%;
    scroll-snap-align: center;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`
const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 3%;
    flex: 1;
`

const Card = styled.div`
    width: 18rem;
    height: 10%;

    &:hover {
        box-shadow: 0 0 0 2px;
        transform: translate3d(0px, -1px, 0px);
    }
`

const CardImg = styled.img`
    object-fit: cover;
    width: '100%';
    height: '100%';
`

const NavStyle = {
  zIndex: 2000
}

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectHead, setProjectHead] = useState("");
    const [pieData, setPieData] = useState([]);
    const [barData, setBarData] = useState([]);
    const [modalBody, setModalBody] = useState(0);

    const projectText = (project) => {
        switch (project) {
            case "Bar Hop":
                return () => {
                    setShowModal(true);
                    setProjectHead(project);
                    setPieData([{name: "Java", value: 100}]);
                    setBarData([{name: "10/15 - 10/21", value: 2}, {name: "10/29 - 11/4", value: 2},  {name: "11/5 - 11/11", value: 6}, {name: "11/12 - 11/18", value: 1}, {name: "11/19 - 11/25", value: 6}, {name: "11/26 - 12/2", value: 7}, {name: "12/3 - 12/9", value: 3}, {name: "12/10 - 12/16", value: 4}])
                    setModalBody(2732);
                }
            case "Run Crafter":
                return () => {
                    setShowModal(true);
                    setProjectHead(project);
                    setPieData([{name: "Python", value: 69.8}, {name: "HTML", value: 26.3}, {name: "CSS", value: 3.9}]);
                    setBarData([{name: "9/24 - 9/30", value: 18}, {name: "10/1 - 10/7", value: 11},  {name: "10/8 - 10/14", value: 4}, {name: "10/15 - 10/21", value: 2}])
                    setModalBody(1042);
                }
            case "Opening Chess Practice":
                return () => {
                    setShowModal(true);
                    setProjectHead(project);
                    setPieData([{name: "JavaScript", value: 92.8}, {name: "HTML", value: 3.3}, {name: "CSS", value: 3.9}]);
                    setBarData([{name: "3/19 - 3/25", value: 2}, {name: "3/26 - 4/1", value: 5},  {name: "4/2 - 4/8", value: 4}, {name: "4/9 - 4/15", value: 1}, {name: "4/16 - 4/22", value: 10}, {name: "4/23 - 4/29", value: 2}, {name: "4/30 - 5/6", value: 7}]);
                    setModalBody(5938);
                }
            default:
              return () => {}
        }
    }

    return (
      <Section id="projects">
          <Navbar style={NavStyle} />
        <CustomModal showModal={showModal} setShowModal={setShowModal} modalHeading={projectHead} modalBody={modalBody} pieData={pieData} barData={barData} />
        <Cards>
          <div onClick={projectText("Bar Hop")}>
            <Card className="card">
              <CardImg
                src={BarHop}
                style={{ height: "125px" }}
                className="card-img-top img-fluid"
                alt="The login page of a mobile application"
              />
              <div className="card-body">
                <h5 className="card-title">Bar Hop</h5>
                <p className="card-text">
                  Android Social Media App connecting people through bars they
                  visit
                </p>
                  <a
                    href="https://github.com/KohnKaleb/BarHop"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
              </div>
            </Card>
          </div>
          <div onClick={projectText("Run Crafter")}>
            <Card className="card">
              <CardImg
                src={RunCrafter}
                className="card-img-top img-fluid"
                alt="A map with various running routes"
              />
              <div className="card-body">
                <h5 className="card-title">Run Crafter</h5>
                <p className="card-text">
                  Website that allows runners to choose different running routes
                  based on some chosen criteria
                </p>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "5%" }}>
                <a
                  href="https://github.com/KohnKaleb/create_my_runs"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                    href="https://routely.vercel.app/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div onClick={projectText("Opening Chess Practice")}>
            <Card className="card">
              <CardImg
                src={OpeningChessPractice}
                className="card-img-top img-fluid"
                alt="A map with various running routes"
              />
              <div className="card-body">
                <h5 className="card-title">Opening Chess Practice</h5>
                <p className="card-text">
                  Website that lets chess practitioners practice 
                  their desired opening lines for move correctness
                </p>
                <a
                  href="https://github.com/KohnKaleb/Opening-Chess-Practice"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </Card>
          </div>
        </Cards>
      </Section>
    );
}

export default React.memo(Projects)