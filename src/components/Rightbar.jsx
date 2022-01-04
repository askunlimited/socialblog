import React from 'react';

import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: "0",
    },
    title: {
        fontSize: "16px",
        fontWeight: "500px",
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        
        color: "#333",
    },
    link: {
        marginRight: theme.spacing(1),
        color: "#333",
        marginBottom: 5,
    }
}));

const Rightbar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
           <Typography gutterBottom className={classes.title}>Friends Online</Typography>
           <AvatarGroup max={4} gutterBottom>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
            
            <Typography className={classes.title}>Gallery</Typography>
            <ImageList rowHeight={120} className={classes.imageList} cols={3}>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="Images" />
                </ImageListItem>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="Images" />
                
                </ImageListItem>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="Images" />
                
                </ImageListItem>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="Images" />

                </ImageListItem>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="Images" />

                </ImageListItem>
                <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/olive.jpg" alt="Images" />
                </ImageListItem>
  
            </ImageList>
            <Typography className={classes.title}>Categories</Typography>
            <Link className={classes.link} href="#" variant="body2">
                Food
            </Link>
            <Link className={classes.link} href="#" variant="body2">
                Movies
            </Link>
            <Link className={classes.link} href="#" variant="body2">
                Coding
            </Link>
            <Divider flexItem style={{marginBottom: 5}} />
            <Link className={classes.link} href="#" variant="body2">
                Science
            </Link>
            <Link className={classes.link} href="#" variant="body2">
                Religion
            </Link>
            <Link className={classes.link} href="#" variant="body2">
                Security
            </Link>
        </Container>
    )
}

export default Rightbar
