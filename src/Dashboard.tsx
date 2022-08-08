import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="min-h-full flex items-center justify-center p-16 px-4 sm:px-6 lg:px-8">
      <Link to="/user">/Usuários</Link>
    </div>
  );
}
