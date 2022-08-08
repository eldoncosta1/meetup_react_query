import { Routes as Switch, Route, Navigate } from "react-router-dom";

import { Dashboard } from "../Dashboard";
import { User } from "../User";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Switch>
  );
};

export default Routes;
