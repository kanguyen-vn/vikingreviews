import React from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../misc/useWindowDimensions';
import {
    makeStyles,
    Box,
    Table,
    TableBody,
    TableCell,
    Grid,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography
} from '@material-ui/core';
import AddReviewButton from "../components/AddReviewButton";
import grey from "@material-ui/core/colors/grey";


function createData(edit_time, instructor, user, workload, grading, enthusiasm, textbook, review) {
    return {
        edit_time,
        instructor,
        user,
        workload,
        grading,
        enthusiasm,
        textbook,
        review
    };
}

const rows = [
    createData('2020-08-15', 'Instructor someone', 'Username A', 2.0, 3, 2, 5, 'The class was super informative. You would probably need to attend all the classes and get 80% for every exam to get C+. '),
    createData('2020-08-15', 'Instructor someone', 'Username B', 2.0, 4.3, 2, 4.5, 'The class was super informative. You would probably need to attend all the classes and get 80% for every exam to get C+. '),
    createData('2020-01-12', 'Barack Obama', 'Anonymous', 2.0, 4.3, 1.6, 2.9, 'The class was super informative. You would probably need to attend all the classes and get 80% for every exam to get C+. '),
    createData('2020-08-15', 'Barack Obama', 'Username K', 2.0, 4.9, 2, 1.5, 'You would probably need to attend all the classes and get 80% for every exam to get C+. '),
    createData('2020-08-15', 'Barack Obama', 'Anonymous', 4.0, 4.3, 2, 1.0, 'The class was super informative. You would probably need to attend all the classes and get 80% for every exam to get C+. '),
    createData('2020-08-15', 'Instructor someone', 'Username C', 5.0, 4.3, 2, 4.2, 'The class was super informative. You would probably need to attend all the classes and get 80% for every exam to get C+. '),
];

// Department, Course #, Name, Overall, Workload, Enthusiasm, Textboo Usage

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
// function createData(edit_time, instructor, user, workload, grading, enthusiasm, textbook, review) {

const headCells = [
    { id: 'edit_time', numeric: false, disablePadding: true, label: 'Edit Time' },
    { id: 'instructor', numeric: true, disablePadding: true, label: 'Instructor' },
    { id: 'user', numeric: true, disablePadding: true, label: 'User' },
    { id: 'workload', numeric: true, disablePadding: true, label: 'Workload' },
    { id: 'grading', numeric: true, disablePadding: true, label: 'Grading' },
    { id: 'enthusiasm', numeric: true, disablePadding: true, label: 'Enthusiasm' },
    { id: 'textbook', numeric: true, disablePadding: true, label: 'Textbook Usage' },
    { id: 'review', numeric: true, disablePadding: true, label: 'Comment' },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

// Department, Course #, Name, Overall, Workload, Enthusiasm, Textboo Usage

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    margin: {
        //margin: theme.spacing(1),
        margin: "10px 0 0 0",
    },

    p: {
        textAlign: "center",
        // color: grey[700],
        fontSize: "100%",
    },

    pageStyles: {
        height: "100vh",
        weight: '100vh',
        background: theme.palette.secondary.main,
    },
    headerStyles: {
        // height: "15vh",
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "28vh",
        },
        [theme.breakpoints.up('sm')]: {
            height: '15vh',
        },
        background: "white",
        boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
        borderRadius: 16,
    },
    courseNumberStyles: {
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "6vh",
        },
        [theme.breakpoints.up('sm')]: {
            height: '4vh',
        },
        // background: grey[100],
        borderRadius: 8,
    },
    courseNameStyles: {
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "7vh",
        },
        [theme.breakpoints.up('sm')]: {
            height: '4vh',
        },
        // background: grey[100],
        borderRadius: 8,
    },

    // courseDescriptionStyles: {},
    courseScoreStyle: {
        // height: "8vh",
        // [theme.breakpoints.between('xs', 'sm')]: {
        //     height: "16vh",
        // },
        // [theme.breakpoints.up('sm')]: {
        //     height: '8vh',
        // },
        // background: grey[100],
        borderRadius: 8,
    },
    courseScoreBoxStyles: {
        // height: "7vh",
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "7vh",
        },
        [theme.breakpoints.up('sm')]: {
            height: '7vh',
        },
        // background: grey[200],
        borderRadius: 8,
    },
    addReviewButtonStyles: {},

    paperbodyStyles: {
        // height: "65vh",
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "65vh",
        },
        [theme.breakpoints.up('sm')]: {
            height: '75vh',
        },
        background: "white",
        boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
        borderRadius: 16,
    },
    tableStyles: {
        height: "60vh",
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '30vh',
            font: '9px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '54vh',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '84vh',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: '115vh',
        },
        [theme.breakpoints.up('xl')]: {
            width: '140vh',
        },
        // width: '130vh',
        background: "white",
        borderRadius: 16,
    },
}));

export default function Reviews() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [isLoggedIn] = React.useState(true);
    const { height, width } = useWindowDimensions();
    console.log(width);
    console.log(rows[0]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, name) => {
    };

    return (
        <Grid
            container
            className={classes.pageStyles}
            justify="center"
            alignItems="center"
            direction="row"
        >
            {/* score board */}
            <Grid
                // item
                xs={10}
                sm={10}
                container
                className={classes.headerStyles}
                justify="center"
                alignItems="center"
                direction="row"
            >
                <Grid
                    item
                    xs={2}
                    sm={2}
                    className={classes.courseNumberStyles}
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Typography
                        gutterBottom
                        className={classes.p}
                    >
                        <Box fontWeight="fontWeightBold" textAlign="center">
                            ARHI 205
                            </Box>
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={10}
                    md={8}
                    className={classes.courseNameStyles}
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Typography
                        gutterBottom
                        // className={classes.p}
                        variant={width < 460 ? ("body2") : "body1"}
                    >
                        <Box textAlign="left">
                            Vikings to Vaultings: Art and Architecture of Medieval Northern Culture
                            </Box>
                    </Typography>

                </Grid>
                {/* score board */}
                {/* // Department, Course #, Name, Workload, Grading ,Enthusiasm, Textboo Usage */}
                <Grid
                    item
                    container
                    xs={10}
                    direction="row"
                    className={classes.courseScoreStyle}
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={3}
                        sm={2}
                        className={classes.courseScoreBoxStyles}
                    >
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                Workload
                                </Box>
                        </Typography>
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                4.5
                                </Box>
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={3}
                        sm={2}
                        className={classes.courseScoreBoxStyles}
                    >
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                Grading
                                </Box>
                        </Typography>
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                4.1
                                </Box>
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={3}
                        sm={2}
                        className={classes.courseScoreBoxStyles}
                    >
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                Enthusiasm
                                </Box>
                        </Typography>
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                3.9
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={2}
                        className={classes.courseScoreBoxStyles}
                    >
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                Textbook
                                </Box>
                        </Typography>
                        <Typography variant={width < 460 ? ("body2") : 'body1'}>
                            <Box textAlign="center" mx="auto">
                                3.2
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={2}
                        className={classes.courseScoreBoxStyles}
                    >
                        <AddReviewButton text={width < 750 ? ("Add Review") : 'Add YOUR review'} />

                    </Grid>
                </Grid>

            </Grid>



            {/* reviews table */}
            <Grid
                item
                xs={10}
                sm={10}
                container
                className={classes.paperbodyStyles}
                justify="center"
                alignItems="center"
                direction="column"
            >
                <Grid
                    container
                    className={classes.tableStyles}
                    justify='center'
                    direction='row'
                >
                    <Table stickyHeader size="small">
                        <TableContainer
                            className={classes.tableStyles}

                        >
                            <EnhancedTableHead
                                classes={classes}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        // (edit_time, instructor, user, workload, grading, enthusiasm, textbook, review)
                                        return (
                                            <TableRow // !!!!!!!!!! do not change this !!!!!!!!!!!!!!!!!! 
                                                hover
                                                onClick={(event) => handleClick(event, row.name)}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.name}
                                            >

                                                <TableCell align='center' component="th" id={labelId} scope="row" padding="none">
                                                    {row.edit_time}
                                                </TableCell>
                                                {width < 1280 ? (
                                                    <TableCell align="right">{row.instructor.substring(0, 5)}...</TableCell>
                                                ) : <TableCell align="right">{row.instructor}</TableCell>}
                                                <TableCell align="center">{row.user}</TableCell>
                                                <TableCell align="center">{row.workload}</TableCell>
                                                <TableCell align="center">{row.grading}</TableCell>
                                                <TableCell align="center">{row.enthusiasm}</TableCell>
                                                <TableCell align="center">{row.textbook}</TableCell>
                                                {isLoggedIn ? (
                                                    <TableCell align="right">{row.review}</TableCell>
                                                ) : <TableCell align="right">You need to log in to view this comment</TableCell>}
                                            </TableRow>
                                        );
                                    })}

                            </TableBody>
                        </TableContainer>
                    </Table>
                </Grid>
            </Grid>
        </Grid>
    );
}