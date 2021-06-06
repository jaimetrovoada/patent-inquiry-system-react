import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "../functions/columns";
import { SortAlphaDown, SortAlphaUpAlt } from "react-bootstrap-icons";

const Table = (apiData) => {
  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: Object.values(apiData)[0],
        initialState: {
          sortBy: [
            {
              id: "id",
              desc: false,
            },
          ],
        },
        disableSortRemove: true,
      },
      useSortBy
    );

  return (
    <div className="table-responsive tile--custom-scrollbar">
      <table
        className="table table-striped table-hover align-middle table-fixed"
        {...getTableProps()}
      >
        <thead className="table-light noSelect">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortAlphaUpAlt />
                    ) : (
                      <SortAlphaDown />
                    )
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} /* className="table-secondary" */>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
