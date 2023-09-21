import React, { useState, useEffect } from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import BookIcon from "@mui/icons-material/Book";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GetAppIcon from "@mui/icons-material/GetApp";
import styled from "styled-components";
import Rooms from "./Rooms";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Main.css"
import AssessmentIcon from '@mui/icons-material/Assessment';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Main = () => {
  const [open, setOpen] = useState(false);
  // Add more properties
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [assignments, setAssignments] = useState([
    {
      name: "Take Assesment 1"
    },
    {
      name: "Take Assesment 2"
    }
  ]);
  const [uploadedAssignments, setUploadedAssignments] = useState([
    {
      title: "Listen To Your Favourite Music",
      desc: "Experience the healing power of music"
    },
    {
      title: "Play Some Fun Games",
      desc: "Join the Relaxation Session"
    },
    {
      title: "Chat Anonymously",
      desc: "Just Let your heart out. We are listening"
    },
    {
      title: "Join Communities",
      desc: "Just Let your heart out. We are listening"
    },
    {
      title: "Motivational Videos and Quotes",
      desc: "Just Let your heart out. We are listening"
    },
    {
      title: "Track Your Streak",
      desc: "Just Let your heart out. We are listening"
    }
  ]);

  const navigateToAssesment = () => {
    navigate('/assesment')
  }
  // Axios get req
  //useEffect(() => {}, []);
  return (
    <>
      <Container >
        <Module>
          <Header>
            <LaptopIcon style={{ fontSize: "45px" }} />
            <h3>Welcome to ManoVan</h3>
          </Header>
          <Panel>
            <div className="assignment" style={{ width: "25%" }}>
              <div className="sub-header">
                <h3>Assesments Taken</h3>
              </div>
              <hr />
              <div className="assigment-list">
                {assignments && assignments.length ? (
                  assignments.map((assignment) => (
                    //update key
                    <AssignmentDesc onClick={handleOpen} key={assignment.name} className="ass_name">
                      <AssessmentIcon />
                      {/*Add link to p tag <Link to={"/dashboard/assessment/" + assignmentCode}*/}
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="child-modal-title"
                          aria-describedby="child-modal-description"
                        >
                          <Box sx={{ ...style, width: 200 }}>
                            <h2 id="child-modal-title">It will take only a few seconds</h2>
                            <p id="child-modal-description">
                              Questions are simple. Just answer everything honestly
                            </p>
                            <Button onClick={navigateToAssesment}>Take Assesment Now</Button>
                          </Box>
                        </Modal>
                        <p> {assignment.name}</p>
                      <VisibilityIcon />
                      <GetAppIcon />
                    </AssignmentDesc>


                  ))
                ) : (
                  <p>No Assigned Assignments</p>
                )}
              </div>
            </div>
            <div className="assessment" style={{ width: "80%" }}>
              <div className="sub-header">
                <h3>Join Some Fun Activities and get Incentives</h3>
              </div>
              <hr />
              <div className="assigment-list2" >
                {uploadedAssignments && uploadedAssignments.length ? (
                  uploadedAssignments.map((assignment, key) => (
                    //update key
                    // {/* <AssignmentDesc key={assignment.name}>
                    //   <BookIcon />
                    // <p>{assignment.name}</p>
                    //<VisibilityIcon />
                    //<GetAppIcon />
                    // </AssignmentDesc> */}
                    <Rooms title={assignment.title} img={key} desc={assignment.desc} />
                  ))
                ) : (
                  <p>No Uploaded Assignments</p>
                )}
              </div>
            </div>
          </Panel>
        </Module>
        <Sidebar>
          <h3>Student Information</h3>
          <hr />
          <Infos>
            <Info>
              <h4> Student name: XYZ</h4>
            </Info>
            <Info>
              <h4>Student Academic Details:</h4>
              <center>
                <p>Class : XII</p>
                <p>Section : A</p>
                <p>Age : 17</p>
              </center>
            </Info>
            <Info>
              <h4> Additional Info:</h4>
              <p>Instagram Linked : Pending</p>
              <p>Youtube Linked : Pending</p>
              <p>Facebook Linked : Pending</p>
              <p>Twitter Linked : Pending</p>
            </Info>
          </Infos>
        </Sidebar>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #f2f2f2;
`;
const Sidebar = styled.div`
  padding: 1rem;
  background: #fff;
  margin: 0.5rem 0.5rem 0.5rem 0rem;
  max-width: 250px;
`;
const Module = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  flex: 1;
`;
const Header = styled.div`
  min-height: 10vh;
  background: #fff;
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 1rem;
    font-weight: lighter;
  }
`;
const Panel = styled.div`
  display: flex;
  flex: 1;
  .assignment,
  .assessment {
    background: #fff;
    width: 50%;
    margin: 0.5rem;
    padding: 1rem;
    .sub-header {
      h3 {
        color: #000;
        font-weight: lighter;
      }
    }
    hr {
      border: none;
      height: 1px;
      background-color: #f2f2f2;
    }
  }
  .assessment {
    margin-left: 0;
  }
`;
const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  padding: 1rem;
  border: 1px solid #f2f2f2;
  margin-bottom: 1rem;
`;
const AssignmentDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #f2f2f2;
  margin-top: 1rem;
  a {
    flex: 1;
    margin-bottom: 0;
  }
`;
export default Main;
