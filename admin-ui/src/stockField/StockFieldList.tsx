import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StockFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StockFields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Sector" source="sector" />
        <TextField label="Segment" source="segment" />
        <TextField label="Subsector" source="subsector" />
        <TextField label="Ticker" source="ticker" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
