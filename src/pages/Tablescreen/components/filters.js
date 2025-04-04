import React from "react";
import { Input, CustomInput } from "reactstrap";
import Flatpickr from "flatpickr";
var moment = require('moment');
moment().format(); 

export const Filter = ({ column }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {column.canFilter && column.render("Filter")}
    </div>
  );
};



export const DefaultColumnFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows: { length },
  },
}) => {
  return (
    <Input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${length}) ...`}
    />
  );
};

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <CustomInput
      id="custom-select"
      type="select"
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </CustomInput>
  );
};

export const DateFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id,
  },
  rows
}) => {
  const dates = preFilteredRows.map((val) => moment(val.original[id],"DD/MM/YYYY"))
  const minDate = moment.min(dates).subtract(1,'day') // To include the date
  const maxDate = moment.max(dates).add(1, 'day') 
  return (
    <React.Fragment>
      <Flatpickr
        className='form-control'
        onChange={(date) => {
          if (date.length === 2) {
            setFilter([date[0],date[1]])
          }
        }}
        options={{
          enable: [
            {
              from: minDate.toDate(),
              to : maxDate.toDate()
            }
          ],
          mode : 'range'
        }}
      />

  </React.Fragment>
  ); };
