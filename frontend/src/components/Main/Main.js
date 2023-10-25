import React, { useState, useEffect } from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import styled from "styled-components";
import Rooms from "./Rooms";
import { useNavigate } from "react-router-dom";
import "./Main.css"
import { useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TrackCard from "./TrackCard/TrackCard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import TakeAssesment from "./TakeAssesment/TakeAssesment";
import Profile from "./Profile/Profile.js"
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

  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token")
  const [open, setOpen] = useState(false);
  const [displayTrack, setDisplayTrack] = useState(false);

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
      name: "Take Assessment"
    },
    {
      name: "Take Assessment"
    }
  ]);
  const [uploadedAssignments, setUploadedAssignments] = useState([{
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
    desc: "Be a part of our global community"
  },
  {
    title: "Motivational Videos and Quotes",
    desc: "You are not alone. Seek Solution from Experience"
  },
  {
    title: "Track Your Streak",
    desc: "How's Your streak going? Keep Going"
  }])


  useEffect(() => {
    console.log(typeof (token))
    if (token === "123") {
      setDisplayTrack(true);
    }
  }, [])


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
            <h3 className="main_heading">Welcome to ManoVan</h3>
          </Header>
          <Panel>
            <div className="assignment" style={{ width: "25%" }}>
              <div className="sub-header">
                <h3>Assessments Taken</h3>
              </div>
              <hr />
              <div className="assigment-list">
                {assignments && assignments.length ? (
                  assignments.map((assignment) => (
                    //update key
                    <div onClick={handleOpen}>
                      {/* <AssignmentDesc   key={assignment.name} className="ass_name"> */}
                      <TakeAssesment name={assignment.name} />
                      {/* <Button variant="contained" >Start </Button> */}
                      {/* <AssessmentIcon /> */}
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
                          <Button onClick={navigateToAssesment}>Take Assessment Now</Button>
                        </Box>
                      </Modal>
                      {/* </AssignmentDesc> */}
                    </div>


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
              {displayTrack ? <TrackCard /> : <p> <ArrowCircleLeftIcon /> Take Assessment now in order to Unlock Your Track</p>}
              <div className="assigment-list2" >
                <br />
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
                  <p>Take Assesment now in order to Unlock Your Track</p>
                )}
              </div>
            </div>
          </Panel>
        </Module>
        <Sidebar>
          <Profile />
          {/* <h3>Student Information</h3>
          <hr />
          <Infos>
            <Info>
              <h4> Student name: Mark</h4>
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
              <p>Instagram Linked : Linked</p>
              <p>Youtube Linked : Linked</p>
              <p>Facebook Linked : Pending</p>
              <p>Twitter Linked : Linked</p>
            </Info>
          </Infos> */}
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
