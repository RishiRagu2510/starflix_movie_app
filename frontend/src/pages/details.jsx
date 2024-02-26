import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import { useLocation, useParams } from "react-router-dom";
import { Alert, Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Paper from '@mui/material/Paper';

import Snackbar from '@mui/material/Snackbar';

function Details() {
    let { id } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const [open, setOpen] = React.useState(false); // Define open state
    const handleOpen = () => setOpen(true); // Define handleOpen function
    const handleClose = () => setOpen(false); // Define handleClose function

    const [openSnackbar, setOpenSnackbar] = React.useState(false); // Define open state for Snackbar
    const handleClick1 = () => {
      setOpenSnackbar(true);
    };
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };

    useEffect(() => {
        // Your useEffect logic
    }, [location]);

    if (!location.state) {
        return <div>No movie details available.</div>;
    }
    const handleClick = () => {
        alert('Added to favorites');
      };
    const { title, bg, trailer, des, i, i1, i2, i3, i4 } = location.state;
    const actions = [
        
        { icon: <CommentIcon/>, name: 'Comment' },
        { icon: <FavoriteIcon onClick={handleClick1}/>, name: 'Favorite' },
   
    ];

    return (
        <div className="details" style={{fontFamily:'Roboto'}}>
            <div style={{ display: 'flex' }}>
                <Card sx={{ width: '30%', maxWidth: '30%', marginTop: '10px' }}>
                    <CardActionArea>
                        <CardMedia component="img" image={bg} sx={{ width: '100%', objectFit: 'cover' }} />
                    </CardActionArea>
                </Card>
               
                <Box height={300} width={750} alignItems="center" style={{ marginLeft: '40px', marginTop: '10px' }}>
                    <Typography sx={{ color: 'purple', textDecoration: "uppercase", fontWeight: "bold" }} variant="h4">
                        {title}
                        <Divider color='white' variant="fullWidth"/>
                    </Typography>
                    <br></br>
                    <Typography sx={{ color: 'white',}} variant="body1">
                        {des}
                        <br></br>
                    </Typography>
                    
                    {trailer && (
                        <div>
                            <iframe
                                width="745"
                                height="300"
                                src={trailer}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                            <br></br>
                            <Divider color='white' variant="fullWidth"/>
                        </div>
                    )}

                    <Typography sx={{ color: 'purple', textDecoration: "uppercase", fontWeight: "bold" }} variant="h4">
                        CAST & CREW
                        <Divider color='white' variant="fullWidth"/>
                    </Typography>
                    <br></br>
                    <Stack direction="row" spacing={1}>
                        {[i, i1, i2, i3, i4].map((img, index) => (
                            <Paper key={index} elevation={0} style={{ height: '200px', width:'200px'}}>
                                <CardMedia
                                    component="img"
                                    image={img}
                                    style={{ height: '100%' }}
                                />
                            </Paper>
                        ))}
                    </Stack>

                </Box>
                <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <Backdrop open={open} />
                    <SpeedDial
    ariaLabel="SpeedDial tooltip example"
    sx={{ position: 'fixed', bottom: -350, right: 80}} // Adjusted position
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
>
    {actions.map((action) => (
        <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
                action.onClick && action.onClick();
                handleClose();
            }}
        />
    ))}
</SpeedDial>

      
                </Box>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={1000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position Snackbar at top right
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Added to favorites!
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default Details;
