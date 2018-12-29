import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px'
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'100%',
        height:'auto',
    },

});

class Code extends Component {

    state = {

    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant='h3' align='center'>Code</Typography>
                </Paper>
                <Card className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} lg={6} xl={6}>
                            <img src={require('../../img/code/ebooking.png')} className={classes.image} />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6}>
                            <Typography variant='h4' align='center' gutterBottom>Cinema Ticket Booker</Typography>
                            <Typography variant='h6' align='center' gutterBottom><b>CSCI4050 - Software Engineering</b> </Typography>
                            <Divider />
                            <Typography variant='body1'>
                                For this term project, I worked mostly with front-end, using HTML, CSS, Bootstrap, and vanilla JS. I also assisted with creating templates and controllers for endpoint connections.We used the Java with the Spring framework in order to create a responsive application that easily handles JDBC connection to the MySQL database.
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} lg={6} xl={6}>
                            <img src={require('../../img/code/joinotes.png')} className={classes.image} />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6}>
                            <Typography variant='h4' align='center'>DogBot</Typography>
                            <Typography variant='h6' align='center' gutterBottom><b>UGAHacks 2018</b> </Typography>
                            <Divider />
                            <Typography variant='body1'>
                            A mobile app that we built in around 50 real-time hours. The concept for the app was to use speech-to-text in order to easily take notes during a lecture. These notes can be shared within class groups created on the app. There is also a general chat room to message colleagues in real-time. Built using JavaScript, React Native, and MySQL.
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} lg={6} xl={6}>
                            <img src={require('../../img/code/dogbot.png')} className={classes.image} />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6}>
                            <Typography variant='h4' align='center'>DogBot</Typography>
                            <Typography variant='h6' align='center' gutterBottom><b>Personal Project </b> </Typography>
                            <Divider />
                            <Typography variant='body1'>
                            A simple server built in Python using the Discord API. Using commands, the bot will automatically perform actions, all dog-related! Nothing like some cute dogs to cheer up your day!
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>

            </React.Fragment>
        );
    }
}

Code.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Code);

