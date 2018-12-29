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
import ResponsiveEmbed from 'react-responsive-embed';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    piano: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        flex: '1 0 auto'
    },
});

class Piano extends Component {

    state = {

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant='h3' align='center'>Piano </Typography>
                <Card className={classes.piano}>
                    <CardContent>
                        <Typography variant='h5' align='center'>One Summer's Day - Spirited Away </Typography>
                    </CardContent>
                    <CardMedia>
                        <ResponsiveEmbed src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fandrew.huynh.374%2Fvideos%2F1894642993911495%2F&show_text=0&mute=0" />
                    </CardMedia>
                </Card>

                <Card className={classes.piano}>
                    <CardContent>
                        <Typography variant='h5' align='center'>Merry Go Round of Life - Howl's Moving Castle </Typography>
                    </CardContent>
                    <ResponsiveEmbed src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fandrew.huynh.374%2Fvideos%2F1942432469132547%2F&show_text=0&mute=0" />
                </Card>
            </div >
        );
    }
}

Piano.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Piano);

