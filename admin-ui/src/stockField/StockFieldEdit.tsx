import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StockFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Sector" source="sector" />
        <TextInput label="Segment" source="segment" />
        <TextInput label="Subsector" source="subsector" />
        <TextInput label="Ticker" source="ticker" />
      </SimpleForm>
    </Edit>
  );
};
