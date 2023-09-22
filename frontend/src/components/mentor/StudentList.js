// import React from 'react'
// import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
// import { Button } from '@material-ui/core';

// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from '@mui/icons-material/Visibility';

// // import { Navigate } from 'react-router-dom';

// const StudentList = () => {

//   const orders = [{
//     name:"boat",
//     price:199,
//     quantity:3,
//     image:"",
//     product:{

//     }
// }]



//   const columns = [
//     {field : "id",headerName : "Order ID",minWidth : 250,flex:0.7},
//     {
//         field : "status",
//         headerName : "Status",
//         minWidth : 150,
//         flex : 0.5,
//     },
//     {
//         field : "itemsQty",
//         headerName : "Items Qty",
//         type : "number",
//         minWidth : 150,
//         flex : 0.3,

//     },
//     {
//         field : "amount",
//         headerName : "Amount",
//         type : "number",
//         minWidth : 270,
//         flex : 0.5,
//         cellClassName : "redColor"
//     },
//     {
//       field: "actions",
//       flex: 0.3,
//       headerName: "Actions",
//       minWidth: 150,
//       type: "number",
//       sortable: false,
//       renderCell: () => {
//         return (
//           <>

//               <EditIcon />

//             <Button >
//               <VisibilityIcon />

//             </Button>
//           </>
//         )
//       }
//     }
//   ]






//   const rows = [
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",

//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//     {
//         id : 123,
//         itemsQty: 2,
//         amount : 3000,
//         status : "confirm",
//     },
//   ];






//   return (
//     <>

//          

//           <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick className='productListTable' autoHeight />

//         
//     </>
//   )
// }

// export default StudentList;
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import CommentIcon from '@mui/icons-material/Comment';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import Button from "@material-ui/core";/
import Button from '@mui/material/Button';
import ocean from './ocean.png'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Fade from '@mui/material/Fade';
import BarChartIcon from '@mui/icons-material/BarChart';
import report from "./report.pdf";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function StudentList() {

    const [comment, setComment] = useState("")
    const [viewComment, setViewComment] = useState("")

    const [open, setOpen] = useState(false);

    const [chartOpen, setChartOpen] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    const handleChartClose = () => {
        setChartOpen(false)
    }
    const handleChartOpen = () => {
        setChartOpen(true)
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleCommentOpen = () => {
        setCommentOpen(true);
    }
    const handleCommentClose = (e) => {
        setCommentOpen(false);
        if (e.target.id === "submit")
            setViewComment(comment)
        setComment("");
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'Mental_Health_Scale',
            headerName: 'Mental Health Scale',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type: "number",
        },
        {
            field: 'Ocean_Chart',
            headerName: 'Ocean Chart Report',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <div style={{ margin: "auto", cursor: "pointer" }} >
                        <BarChartIcon onClick={handleChartOpen} />
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={chartOpen}
                            onClose={handleChartClose}
                            className="mentor_feedback"
                        >
                            <Fade in={chartOpen}>
                                <Box sx={style}>
                                    <Typography style={{textAlign: "center"}} id="transition-modal-title" variant="h6" component="h2">
                                        {params.row.firstName}'s Chart
                                    </Typography>
                                    <img style={{ width: 400 }} src={ocean} />
                                    <Button onClick={handleChartClose} variant="contained">
                                        Ok
                                    </Button>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                );
            }
        },
        {
            field: 'Connect_With_Parent',
            headerName: 'Connect with Parent',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <Button variant="contained" sx={{ width: 50, fontSize: 10, margin: "auto" }} >Conect</Button>
                );
            }
        },
        {
            field: 'Connect_With_Student',
            headerName: 'Connect with Student',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <Button variant="contained" sx={{ width: 50, fontSize: 10, margin: "auto" }} >Conect</Button>
                );
            }
        },
        {
            field: 'mentor_feedback',
            headerName: 'Mentor\'s Feedback',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <div style={{ backgoundmargin: "auto", cursor: "pointer" }}>
                        <CommentIcon onClick={handleCommentOpen} className="submitReview" />
                        <Dialog aria-labelledby='simple-dialog-title'
                            open={commentOpen}
                            onClose={handleCommentClose}
                            className="mentor_feedback"
                        >
                            <DialogTitle>Review for {params.row.firstName}</DialogTitle>
                            <DialogContent className='submitDialog'>

                                <textarea className='submitDialogTextArea' cols="60" rows="15" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCommentClose} color='secondary'>cancel</Button>
                                <Button onClick={handleCommentClose} id="submit" color='primary'>submit</Button>
                            </DialogActions>
                        </Dialog>
                        <VisibilityIcon onClick={handleOpen} />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modalBackground"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {viewComment ? viewComment : `No comments now`}
                                </Typography>
                                <Button onClick={handleClose} variant="contained" >
                                    Ok
                                </Button>
                            </Box>
                        </Modal>
                    </div>
                );
            }
        },
        {
            field: 'Report',
            headerName: 'Report of Student',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <div style={{ margin: "auto", cursor: "pointer" }}>
                    <a href={report} download ><SimCardDownloadIcon /></a>
                    </div>
                );
            }
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Mental_Health_Scale: 5, },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Mental_Health_Scale: 5, },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Mental_Health_Scale: 5, },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Mental_Health_Scale: 5, },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 21, Mental_Health_Scale: 5, },
        { id: 6, lastName: 'Melisandre', firstName: 'Mia', age: 150, Mental_Health_Scale: 5, },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Mental_Health_Scale: 5, },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Mental_Health_Scale: 5, },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, Mental_Health_Scale: 5, },
        { id: 11, lastName: 'Adam', firstName: 'Stanley', age: 32, Mental_Health_Scale: 7, },
        { id: 12, lastName: 'Sophie', firstName: 'Fox', age: 21, Mental_Health_Scale: 8, },
        { id: 13, lastName: 'Eva', firstName: 'Mendes', age: 42, Mental_Health_Scale: 4, },
        { id: 14, lastName: 'Shaun', firstName: 'Micheal', age: 55, Mental_Health_Scale: 7, },
    ];



    return (
        <div className="dashboard">
            <div className="productListContainer">
                <h1 id="productListHeading">
                    ALL STUDENTS
                    <Button className="community" variant="contained">Manage Community</Button>
                </h1>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[20]}
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
}
