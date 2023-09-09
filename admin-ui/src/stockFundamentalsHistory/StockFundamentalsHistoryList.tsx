import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StockFundamentalsHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StockFundamentalsHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="C5y" source="c5y" />
        <TextField label="Cotacao" source="cotacao" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Divbpatr" source="divbpatr" />
        <TextField label="Dy" source="dy" />
        <TextField label="Evebit" source="evebit" />
        <TextField label="Evebitda" source="evebitda" />
        <TextField label="Id" source="id" />
        <TextField label="Liq2m" source="liq2m" />
        <TextField label="Liqc" source="liqc" />
        <TextField label="Mrgebit" source="mrgebit" />
        <TextField label="Mrgliq" source="mrgliq" />
        <TextField label="Pa" source="pa" />
        <TextField label="Pacl" source="pacl" />
        <TextField label="Papel" source="papel" />
        <TextField label="Patrliq" source="patrliq" />
        <TextField label="Pcg" source="pcg" />
        <TextField label="Pebit" source="pebit" />
        <TextField label="Pl" source="pl" />
        <TextField label="Psr" source="psr" />
        <TextField label="Pvp" source="pvp" />
        <TextField label="Roe" source="roe" />
        <TextField label="Roic" source="roic" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
