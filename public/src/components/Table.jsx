import React, {Component} from 'react';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const tableOptions = {
  page: 1,
  sizePerPage: 15,
  hideSizePerPage: true
};

const selectRowProp = {
  mode: 'checkbox'
};

const searchDelayTime = 1000;

class Table extends Component {

  render() {
    let columns = this.getColumns();

    const customizationOptions = {
      data: this.props.data,
      pagination: this.props.pagination || false,
      search: this.props.search || false,
      deleteRow: this.props.deleteRow || false,
      selectRow: this.props.deleteRow ? selectRowProp : null
    };

    let options = _.defaults({}, {
      noDataText: this.props.noDataText,
      clearSearch: this.props.search,
      searchDelayTime: this.props.search ? searchDelayTime : 0,
      onDeleteRow: this.props.onDeleteRow,
      defaultSearch: 'ad'
    }, tableOptions);

    return (
      <BootstrapTable {...customizationOptions} options={options}>
        {columns}
      </BootstrapTable>
    );
  }

  getColumns() {
    let columns = this.props.columns.map(function (col) {
      let headerOptions = {
        dataField: col.field,
        isKey: col.isKey,
        dataSort: col.sort,
        width: col.width
      };

      return (
        <TableHeaderColumn key={col.title} {...headerOptions}>
          {col.title}
        </TableHeaderColumn>
      );
    });

    return columns;
  }

}


Table.propTypes = {
  columns: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired,
  noDataText: React.PropTypes.string.isRequired,
  pagination: React.PropTypes.bool,
  search: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  onDeleteRow: React.PropTypes.func
};

export default Table;