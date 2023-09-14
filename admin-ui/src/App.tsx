import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StockFundamentalList } from "./stockFundamental/StockFundamentalList";
import { StockFundamentalCreate } from "./stockFundamental/StockFundamentalCreate";
import { StockFundamentalEdit } from "./stockFundamental/StockFundamentalEdit";
import { StockFundamentalShow } from "./stockFundamental/StockFundamentalShow";
import { StockFundamentalsHistoryList } from "./stockFundamentalsHistory/StockFundamentalsHistoryList";
import { StockFundamentalsHistoryCreate } from "./stockFundamentalsHistory/StockFundamentalsHistoryCreate";
import { StockFundamentalsHistoryEdit } from "./stockFundamentalsHistory/StockFundamentalsHistoryEdit";
import { StockFundamentalsHistoryShow } from "./stockFundamentalsHistory/StockFundamentalsHistoryShow";
import { StrategyList } from "./strategy/StrategyList";
import { StrategyCreate } from "./strategy/StrategyCreate";
import { StrategyEdit } from "./strategy/StrategyEdit";
import { StrategyShow } from "./strategy/StrategyShow";
import { StockFieldList } from "./stockField/StockFieldList";
import { StockFieldCreate } from "./stockField/StockFieldCreate";
import { StockFieldEdit } from "./stockField/StockFieldEdit";
import { StockFieldShow } from "./stockField/StockFieldShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TikStock"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="StockFundamental"
          list={StockFundamentalList}
          edit={StockFundamentalEdit}
          create={StockFundamentalCreate}
          show={StockFundamentalShow}
        />
        <Resource
          name="StockFundamentalsHistory"
          list={StockFundamentalsHistoryList}
          edit={StockFundamentalsHistoryEdit}
          create={StockFundamentalsHistoryCreate}
          show={StockFundamentalsHistoryShow}
        />
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="StockField"
          list={StockFieldList}
          edit={StockFieldEdit}
          create={StockFieldCreate}
          show={StockFieldShow}
        />
      </Admin>
    </div>
  );
};

export default App;
