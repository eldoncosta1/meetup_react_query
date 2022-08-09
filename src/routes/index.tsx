import { Routes as Switch, Route, Navigate } from "react-router-dom";

import { Dashboard } from "../Dashboard";
import { User } from "../User";
import { UserCreate } from "../UserCreate";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user-list" element={<User />} />
      <Route path="/user-create" element={<UserCreate />} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Switch>
  );
};

export default Routes;
