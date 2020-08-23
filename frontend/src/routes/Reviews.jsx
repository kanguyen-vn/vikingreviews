// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     Grid,
//     Typography,
//     Button,
//     TableContainer,
//     Table,
//     TableHead,
//     TableCell,
//     TableBody,
//     TableRow,
//     TablePagination,
//     TableSortLabel,
// } from "@material-ui/core";

// function createData(department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook) {
//     return { department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook };
// }

// const rows = [
//     createData('CMSC', 150, 'intro to CS', 4.3, 2, 2, 2),
//     createData('CMSC', 250, 'intro to CS', 2.3, 2, 2, 2),
//     createData('CMSC', 410, ' Data Structures and Algorithm Analysis  Data Structures and Algorithm Analysis', 4.3, 2, 1, 2),
//     createData('CMSC', 510, 'Data Structures and Algorithm Analysis', 2.3, 5, 2, 3),
//     createData('ECON', 150, 'intro to ECON', 4.3, 2, 2, 2),
//     createData('ECON', 250, 'intro to ECON', 2.3, 2, 2, 2),
//     createData('ENG', 452, 'Samuel Richardsons Clarissa and the #metoo Eighteenth Century', 4.3, 1, 1, 2),
//     createData('ENG', 410, 'Newtonian Lit: Chronicles of a Clockwork Universe', 2.3, 5, 2, 3),
//     createData('MUTH', 151, 'Music Fundamentals, Theory, and Analysis 1', 4.3, 2, 2, 2),
//     createData('MUTH', 250, 'intro 2 to MUTH', 2.3, 2, 2, 2),
//     createData('MUTH', 699, 'Independent Study in Music Theory', 4.1, 2, 1, 2),
//     createData('MUTH', 402, 'Counterpoint in the Style of J.S. Bach II', 2.3, 5, 2, 3),
// ];

// const headCells = [
//     { id: 'department_code', numeric: false, disablePadding: true, label: 'Department', minWidth: 10 },
//     { id: 'course_num', numeric: true, disablePadding: true, label: 'Course#', minWidth: 50 },
//     { id: 'class_name', numeric: false, disablePadding: true, label: 'Course Name', minWidth: 50 },
//     // { id: 'review_sum', numeric: false, label: '# Reviews', minWidth: 80, numeric: true, disablePadding: true, },
//     { id: 'overall', numeric: false, label: 'Overall', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'workload', numeric: false, label: 'Workload', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'enthusiasm', numeric: false, label: 'Enthusiasm', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'textbook', numeric: false, label: 'Textbook Usage', minWidth: 50, numeric: true, disablePadding: true, },
// ];

// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }
  
//   function getComparator(order, orderBy) {
//     return order === 'desc'
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
//   }
  
//   function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) return order;
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   }

// function EnhancedTableHead(props) {
//     const { order, orderBy, onRequestSort } = props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };

//     return (
//         <TableHead>
//             <TableRow>
//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align='center'
//                         padding={headCell.disablePadding ? 'none' : 'default'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
                          
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }

// EnhancedTableHead.propTypes = {
//     classes: PropTypes.object.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
// };


// const useStyles = makeStyles((theme) => ({
//     margin: {
//         //margin: theme.spacing(1),
//         margin: "10px 0 0 0",
//     },
//     pageStyles: {
//         height: "100vh",
//         background: theme.palette.secondary.main,
//     },
//     paperStyles: {
//         height: "90vh",
//         background: "white",
//         boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
//         borderRadius: 16,
//     },
//     tableStyles: {
//         marginBottom: theme.spacing(2),
//         height: "80vh",
//         width: '100vh',
//         background: "white",
//         // boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
//         borderRadius: 16,
//     },
//     notFound: {
//         fontWeight: 300,
//         fontStyle: "italic",
//         color: theme.palette.secondary.dark,
//     },
//     button: {
//         boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
//         fontFamily: "Inter",
//         fontWeight: 300,
//     },
//     errorIcon: {
//         color: theme.palette.primary.main,
//         fontSize: "300px",
//     },
// }));

// export default function EnhancedTable() {
//     const classes = useStyles();
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('calories');

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     console.log(rows[0]);
//     return (
//         <Grid
//             container
//             className={classes.pageStyles}
//             justify="center"
//             alignItems="center"
//             direction="row"
//         >
//             <Grid
//                 item
//                 xs={10}
//                 sm={10}
//                 container
//                 className={classes.tableStyles}
//                 justify="center"
//                 alignItems="center"
//                 direction="column"
//             >
               
//                     <TableContainer>
//                         <Table
//                             className={classes.table}
//                             aria-labelledby="tableTitle"
//                             aria-label="enhanced table"
//                         >
//                             <EnhancedTableHead
//                                 classes={classes}
//                                 order={order}
//                                 orderBy={orderBy}
//                                 onRequestSort={handleRequestSort}
//                                 rowCount={rows.length}
//                             />
//                             <TableBody>
//                                 {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
//                                         return (
//                                             <TableRow
//                                                 hover
//                                                 //   onClick={}
//                                                 role="checkbox"
//                                                 tabIndex={-1}
//                                                 key={row.department_code}
//                                             >
//                                                 <TableCell align="center"> {row.department_code} </TableCell>
//                                                 <TableCell align="center">{row.course_num}</TableCell>
//                                                 <TableCell align="right">{row.class_name}</TableCell>
//                                                 <TableCell align="center">{row.review_sum}</TableCell>
//                                                 <TableCell align="center">{row.overall}</TableCell>
//                                                 <TableCell align="center">{row.workload}</TableCell>
//                                                 <TableCell align="center">{row.enthusiasm}</TableCell>
//                                                 <TableCell align="center">{row.textbook}</TableCell>
//                                             </TableRow>
//                                         );
//                                     })}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>

//                 </Grid>
//         </Grid>
//     );
// }


import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Grid from '@material-ui/core/Grid';


// function createData(department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook) {
//     return { department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook };
// }

// const rows = [
//     createData('CMSC', 150, 'intro to CS', 4.3, 2, 2, 2),
//     createData('CMSC', 250, 'intro to CS', 2.3, 2, 2, 2),
//     createData('CMSC', 410, ' Data Structures and Algorithm Analysis  Data Structures and Algorithm Analysis', 4.3, 2, 1, 2),
//     createData('CMSC', 510, 'Data Structures and Algorithm Analysis', 2.3, 5, 2, 3),
//     createData('ECON', 150, 'intro to ECON', 4.3, 2, 2, 2),
//     createData('ECON', 250, 'intro to ECON', 2.3, 2, 2, 2),
//     createData('ENG', 452, 'Samuel Richardsons Clarissa and the #metoo Eighteenth Century', 4.3, 1, 1, 2),
//     createData('ENG', 410, 'Newtonian Lit: Chronicles of a Clockwork Universe', 2.3, 5, 2, 3),
//     createData('MUTH', 151, 'Music Fundamentals, Theory, and Analysis 1', 4.3, 2, 2, 2),
//     createData('MUTH', 250, 'intro 2 to MUTH', 2.3, 2, 2, 2),
//     createData('MUTH', 699, 'Independent Study in Music Theory', 4.1, 2, 1, 2),
//     createData('MUTH', 402, 'Counterpoint in the Style of J.S. Bach II', 2.3, 5, 2, 3),
// ];

// const headCells = [
//     { id: 'department_code', numeric: false, disablePadding: true, label: 'Department', minWidth: 10 },
//     { id: 'course_num', numeric: true, disablePadding: true, label: 'Course#', minWidth: 50 },
//     { id: 'class_name', numeric: false, disablePadding: true, label: 'Course Name', minWidth: 50 },
//     // { id: 'review_sum', numeric: false, label: '# Reviews', minWidth: 80, numeric: true, disablePadding: true, },
//     { id: 'overall', numeric: false, label: 'Overall', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'workload', numeric: false, label: 'Workload', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'enthusiasm', numeric: false, label: 'Enthusiasm', minWidth: 50, numeric: true, disablePadding: true, },
//     { id: 'textbook', numeric: false, label: 'Textbook Usage', minWidth: 50, numeric: true, disablePadding: true, },
// ];

// function createData(department_code, calories, fat, carbs, protein) {
//   return { department_code, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
//   createData('Lollipop2', 392, 0.2, 98, 0.0),
//   createData('Marshmallow2', 318, 0, 81, 2.0),
//   createData('Nougat2', 360, 19.0, 9, 37.0),
//   createData('Oreo2', 437, 18.0, 63, 4.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
//   createData('Lollipop2', 392, 0.2, 98, 0.0),
//   createData('Marshmallow2', 318, 0, 81, 2.0),
//   createData('Nougat2', 360, 19.0, 9, 37.0),
//   createData('Oreo2', 437, 18.0, 63, 4.0),
// ];

function createData(department_code, course_num, class_name, review_sum, overall, workload, enthusiasm, textbook) {
  return { 
      department_code, 
      course_num, 
      class_name, 
      review_sum, 
      overall, 
      workload, 
      enthusiasm, 
      textbook 
  };
}

const rows = [
  createData('CMSC', 150, 'intro to CS', 2, 4.3, 2, 2, 2),
  createData('CMSC', 250, 'intro to CS', 2, 2.3, 2, 2, 2),
  createData('CMSC', 410, ' Data Structures and Algorithm Analysis  Data Structures and Algorithm Analysis', 1, 4.3, 2, 1, 2),
  createData('CMSC', 510, 'Data Structures and Algorithm Analysis', 2, 2.3, 5, 2, 3),
  createData('ECON', 150, 'intro to ECON', 2, 4.3, 2, 2, 2),
  createData('ECON', 250, 'intro to ECON', 2, 2.3, 2, 2, 2),
  createData('ENG', 452, 'Samuel Richardsons Clarissa and the #metoo Eighteenth Century', 1, 4.3, 1, 1, 2),
  createData('ENG', 410, 'Newtonian Lit: Chronicles of a Clockwork Universe', 2, 2.3, 5, 2, 3),
  createData('MUTH', 151, 'Music Fundamentals, Theory, and Analysis 1', 2, 4.3, 2, 2, 2),
  createData('MUTH', 250, 'intro 2 to MUTH', 2, 2.3, 2, 2, 2),
  createData('MUTH', 699, 'Independent Study in Music Theory', 1, 4.1, 2, 1, 2),
  createData('MUTH', 402, 'Counterpoint in the Style of J.S. Bach II', 2, 2.3, 5, 2, 3),
  createData('MUTH', 152, 'Music Fundamentals, Theory, and Analysis 2', 2, 4.3, 2, 2, 2),
  createData('MUTH', 251, 'intro 3 to MUTH', 2, 2.3, 2, 2, 2),
  createData('MUTH', 698, 'Independent Study in Music Theory 2', 1, 4.1, 2, 1, 2),
  createData('MUTH', 401, 'Counterpoint in the Style of J.S. Bach III', 2, 2.3, 5, 2, 3),
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

const headCells = [
  { id: 'department_code', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'course_num', numeric: true, disablePadding: false, label: 'course_num' },
  { id: 'class_name', numeric: true, disablePadding: false, label: 'class_name' },
  { id: 'overall', numeric: true, disablePadding: false, label: 'overall' },
  { id: 'workload', numeric: true, disablePadding: false, label: 'workload' },
  { id: 'enthusiasm', numeric: true, disablePadding: false, label: 'enthusiasm' },
  { id: 'textbook', numeric: true, disablePadding: false, label: 'textbook' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
              {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null} */}
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


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
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
  // const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

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
            size='medium'
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
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      
                      <TableCell align = 'center' component="th" id={labelId} scope="row" padding="none">
                        {row.department_code}
                      </TableCell>
                      <TableCell align="center">{row.course_num}</TableCell>
                      <TableCell align="right">{row.class_name}</TableCell>
                      <TableCell align="center">{row.overall}</TableCell>
                      <TableCell align="center">{row.workload}</TableCell>
                      <TableCell align="center">{row.enthusiasm}</TableCell>
                      <TableCell align="center">{row.textbook}</TableCell>
                    </TableRow>
                  );
                })}
            
            </TableBody>
          </Table>
        </TableContainer> 
      </Grid></Grid></Grid>
  );
}