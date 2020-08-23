import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    TablePagination,
    TableSortLabel,
} from "@material-ui/core";

function createData(department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook) {
    return { department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook };
}

const rows = [
    createData('CMSC', 150, 'intro to CS', 2, 4.3, 2, 2, 2),
    createData('CMSC', 250, 'intro to CS', 2, 2.3, 2, 2, 2),
    createData('CMSC', 350, 'some CS', 1, 4.3, 2, 1, 2),
    createData('CMSC', 450, 'internship in CS', 2, 2.3, 5, 2, 3),
    createData('ECON', 150, 'intro to ECON', 2, 4.3, 2, 2, 2),
    createData('ECON', 250, 'intro to ECON', 2, 2.3, 2, 2, 2),
    createData('ECON', 350, 'some ECON', 1, 4.3, 1, 1, 2),
    createData('ECON', 450, 'internship in ECON', 2, 2.3, 5, 2, 3),
    createData('MUTH', 150, 'intro to MUTH', 2, 4.3, 2, 2, 2),
    createData('MUTH', 250, 'intro 2 to MUTH', 2, 2.3, 2, 2, 2),
    createData('MUTH', 350, 'some MUTH', 1, 4.1, 2, 1, 2),
    createData('MUTH', 450, 'internship in MUTH', 2, 2.3, 5, 2, 3),
];

const headCells = [
    { id: 'department_code', numeric: false, disablePadding: true, label: 'Department', minWidth: 10 },
    { id: 'course_num', numeric: true, disablePadding: true, label: 'Course #', minWidth: 50 },
    { id: 'class_name', numeric: false, disablePadding: true, label: 'Course Name', minWidth: 50 },
    { id: 'review_sum', numeric: false, label: '# Reviews', minWidth: 80, numeric: true, disablePadding: true, },
    { id: 'overall', numeric: false, label: 'Overall', minWidth: 50, numeric: true, disablePadding: true, },
    { id: 'workload', numeric: false, label: 'Workload', minWidth: 50, numeric: true, disablePadding: true, },
    { id: 'enthusiasm', numeric: false, label: 'Enthusiasm', minWidth: 50, numeric: true, disablePadding: true, },
    { id: 'textbook', numeric: false, label: 'Textbook Usage', minWidth: 50, numeric: true, disablePadding: true, },
];

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

function EnhancedTableHead(props) {
    const { classes, order, orderBy, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
    margin: {
        //margin: theme.spacing(1),
        margin: "10px 0 0 0",
    },
    pageStyles: {
        height: "100vh",
        background: theme.palette.secondary.main,
    },
    paperStyles: {
        height: "90vh",
        background: "white",
        boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
        borderRadius: 16,
    },
    tableStyles: {
        height: "85vh",
        width: '100vh',
        background: "white",
        // boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
        borderRadius: 16,
    },
    notFound: {
        fontWeight: 300,
        fontStyle: "italic",
        color: theme.palette.secondary.dark,
    },
    button: {
        boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
        fontFamily: "Inter",
        fontWeight: 300,
    },
    errorIcon: {
        color: theme.palette.primary.main,
        fontSize: "300px",
    },
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    console.log(rows[0]);
    return (
        <Grid
            container
            className={classes.pageStyles}
            justify="center"
            alignItems="center"
            direction="row"
        >
            <Grid
                item
                xs={10}
                sm={10}
                container
                className={classes.paperStyles}
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
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            aria-label="enhanced table"
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
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {

                                        return (
                                            <TableRow
                                                hover
                                                //   onClick={}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.department_code}
                                            >
                                                <TableCell align="right"> {row.department_code} </TableCell>
                                                <TableCell align="right">{row.course_num}</TableCell>
                                                <TableCell align="right">{row.class_name}</TableCell>
                                                <TableCell align="right">{row.review_sum}</TableCell>
                                                <TableCell align="right">{row.overall}</TableCell>
                                                <TableCell align="right">{row.workload}</TableCell>
                                                <TableCell align="right">{row.enthusiasm}</TableCell>
                                                <TableCell align="right">{row.textbook}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={rows.length}
                        rowsPerPage='10'
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                </Grid>
            </Grid>
        </Grid>
    );
}
