import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'flex',
        marginBottom: '10px',
        margin: '20px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});
const Comment = (props) => {
    const classes = useStyles();
    const { name, body, id, email } = props.comment;


    const [picture,setPicture] =useState([])
    const image =`https://jsonplaceholder.typicode.com/photos/${id}`
    useEffect(() => {
        fetch(image)
            .then(res => res.json())
        .then(data =>setPicture(data))
    })
    const {thumbnailUrl} = picture;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className="content.text">
                <Typography className={classes.title} color="textPrimary">
                    User: {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textPrimary">
                    Email: {email}
                </Typography>
                <Typography variant="body2" component="p">
                    Body: {body}
                </Typography>
                <IconButton aria-label="reply">
                    <ReplyIcon/>
                </IconButton>
            </CardContent>
            <CardContent>
                <img src={thumbnailUrl}/>
            </CardContent>
        </Card>

    );
};

export default Comment;