import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StyledExerciseTable from './ExerciseTable.style';

class ExerciseTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = this.props.exerciseList;

    return (
      <StyledExerciseTable>
        <div className='exerciseTableContainer'>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Durée</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.exerciseName}
                    </TableCell>
                    <TableCell align="right">{row.exerciseType}</TableCell>
                    <TableCell align="right">{row.exerciseDescription}</TableCell>
                    <TableCell align="right">{row.totalTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </StyledExerciseTable>
    );
  }
}

export default ExerciseTable;
