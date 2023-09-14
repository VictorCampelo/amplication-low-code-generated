import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StockFundamentalsHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
