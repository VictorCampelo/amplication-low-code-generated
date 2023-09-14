import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StockFundamentalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="C5y" source="c5y" />
        <NumberInput label="Cotacao" source="cotacao" />
        <NumberInput label="Divbpatr" source="divbpatr" />
        <NumberInput label="Dy" source="dy" />
        <NumberInput label="Evebit" source="evebit" />
        <NumberInput label="Evebitda" source="evebitda" />
        <NumberInput label="Liq2m" source="liq2m" />
        <NumberInput label="Liqc" source="liqc" />
        <NumberInput label="Mrgebit" source="mrgebit" />
        <NumberInput label="Mrgliq" source="mrgliq" />
        <NumberInput label="Pa" source="pa" />
        <NumberInput label="Pacl" source="pacl" />
        <TextInput label="Papel" source="papel" />
        <NumberInput label="Patrliq" source="patrliq" />
        <NumberInput label="Pcg" source="pcg" />
        <NumberInput label="Pebit" source="pebit" />
        <NumberInput label="Pl" source="pl" />
        <NumberInput label="Psr" source="psr" />
        <NumberInput label="Pvp" source="pvp" />
        <NumberInput label="Roe" source="roe" />
        <NumberInput label="Roic" source="roic" />
      </SimpleForm>
    </Edit>
  );
};
