import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StockFieldCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Sector" source="sector" />
        <TextInput label="Segment" source="segment" />
        <TextInput label="Subsector" source="subsector" />
        <TextInput label="Ticker" source="ticker" />
      </SimpleForm>
    </Create>
  );
};
