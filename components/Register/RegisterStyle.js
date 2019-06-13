import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
    footer2: {
        background: '#020523',
        display: 'flex',
        flexDirection: 'row',
        height: '70px',
        justifyContent: 'space-between',
        marginTop: '3545px',
    },
    form: {
        marginTop: theme.spacing(10),
        width: '100%', // Fix IE 11 issue.
    },
    image: {
        backgroundImage: 'url("../../static/img/about.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(8, 4),
    },
    root: {
        height: '100vh',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

export default useStyles;
