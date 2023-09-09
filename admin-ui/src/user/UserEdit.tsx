import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { StrategyTitle } from "../strategy/StrategyTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Lastname" source="lastname" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "ADMIN", value: "ADMIN" },
            { label: "USER", value: "USER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="strategy"
          reference="Strategy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StrategyTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
