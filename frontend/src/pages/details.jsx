import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import { useLocation, useParams } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Paper from '@mui/material/Paper';

function Details() {
    let { id } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const [open, setOpen] = React.useState(false); // Define open state
    const handleOpen = () => setOpen(true); // Define handleOpen function
    const handleClose = () => setOpen(false); // Define handleClose function

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
        { icon: <FavoriteIcon />, name: 'Favorite' },
   
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
            onClick={handleClose}
        />
    ))}
</SpeedDial>
                </Box>
            </div>
        </div>
    );
}

export default Details;
