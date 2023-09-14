import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Id" source="id" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <ReferenceManyField
          reference="Strategy"
          target="authorId"
          label="Strategies"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Author" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Filter By" source="filterBy" />
            <TextField label="Id" source="id" />
            <TextField label="Order By" source="orderBy" />
            <BooleanField label="Promoted" source="promoted" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
