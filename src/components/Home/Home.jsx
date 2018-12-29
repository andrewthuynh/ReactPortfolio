import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 10,
  },

  media: {
    width: 366,
    height: 366,
  },

  content: {
    flex: '1 0 auto',
    maxWidth: '30vw',
  },

  card: {
    display: 'flex'
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    backgroundColor: '#fff176',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smView: {
    margin: 10,

  }

});

const Links = () => {
  return (
    <div align='center' style={{
      backgroundColor: '#fff176',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Button target="_blank" href="https://www.facebook.com/andrew.huynh.374">
        Facebook
          </Button>
      <Button target="_blank" href="https://www.instagram.com/andrewhuynhs/">
        Instagram
          </Button>
      <Button target="_blank" href="https://github.com/andrewthuynh">
        Github
          </Button>
      <Button target="_blank" href="https://www.linkedin.com/in/andrewtaylorhuynh/">
        LinkedIn
          </Button>
      <Button target="_blank" href="mailto:andrewtaylorhuynh@gmail.com">
        Email
          </Button>
    </div>
  )
};

class Home extends Component {

  state = {
    about: `I'm a senior at the University of Georgia majoring in Computer Science. I enjoy, piano, gaming, web and app development,
    and good company. Here you can find out more about me and what I like to do.`,

  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Hidden xsDown>
          <Grid
            container
            spacing={16}
            className={classes.root}
            justify='center'
            direction='row'
            alignItems='center'
          >
            <Paper>
              <Card className={classes.card}>

                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant='h3' align='center'>Hello, I'm</Typography>
                    <Typography variant='h3' align='center' gutterBottom>Andrew Huynh</Typography>
                    <Divider />
                    <Typography variant='body1' align='center'>Welcome to my website! </Typography>
                    <Typography variant='body1' align='center' gutterBottom>
                      {this.state.about}
                    </Typography>
                    
                    <Typography variant='body1' align='center'>
                      (If you're curious, this website was made with ReactJS and Material UI)
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={classes.media}
                  image={require('../../img/portrait.jpg')}
                />
              </Card>
              <Links />
            </Paper>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Card className={classes.smView}>
            <CardMedia
              className={classes.media}
              image={require('../../img/portrait.jpg')}
            />
            <CardContent>
              <Typography variant='h3' align='center'>Hello, I'm</Typography>
              <Typography variant='h3' align='center' gutterBottom>Andrew Huynh</Typography>
              <Divider />
              <Typography variant='body1' align='center'>Welcome to my website! </Typography>
              <Typography variant='body1' align='center' gutterBottom>
                {this.state.about}
              </Typography>
              
              <Typography variant='body1' align='center'>
                (If you're curious, this website was made with ReactJS and Material UI)
              </Typography>
            </CardContent>
            <Links />
          </Card>
          
        </Hidden>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

