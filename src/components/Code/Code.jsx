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
        margin: theme.spacing.unit*2
    },

});

class Code extends Component {

    state = {

    }

    render() {
        const { classes } = this.props;

        return (

            <Paper className={classes.root}>
                <Typography variant='h3' align='center'>Code</Typography>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={6} xl={6}> 
                        <Typography>test</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} xl={6}> 
                        <Typography>test</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

Code.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Code);

