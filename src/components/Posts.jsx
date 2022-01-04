import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }
    },
}));

const Posts = () => {
    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                className={classes.media} 
                image="https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg?cs=srgb&dl=pexels-egor-kamelev-751689.jpg&fm=jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">My First Post</Typography>
                    <Typography variant="body2">Culpa eu tempor irure consequat laboris in aliquip officia ex. Ut ipsum labore tempor anim eiusmod eiusmod sint consequat labore elit in irure ex. Velit nulla dolor elit ea ut laboris amet anim. Laborum pariatur proident do et Lorem incididunt pariatur deserunt dolore exercitation. In incididunt duis excepteur consequat Lorem elit nulla aliqua ipsum consectetur tempor. Quis amet esse excepteur non occaecat magna voluptate occaecat incididunt ut tempor cupidatat.Eu culpa labore culpa occaecat deserunt eu cillum dolor nisi veniam enim duis proident. Elit eu sit dolor cillum ex cillum. Cupidatat magna consectetur est cupidatat dolor in excepteur. Quis ut do proident laborum nulla Lorem incididunt deserunt ex qui eu id mollit. Fugiat quis magna duis ea aute laborum dolore non aliqua dolor sit officia. Qui laboris nostrud amet fugiat Lorem ut quis in officia occaecat laborum tempor fugiat anim. Dolor ad culpa deserunt non occaecat magna duis labore commodo.</Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Posts
