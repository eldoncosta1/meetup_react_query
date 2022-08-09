import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center p-16 px-4 sm:px-6 lg:px-8">
      <Link to="/user-list">Lista de usuários</Link>
      <Link to="/user-create">Criar usuário</Link>
    </div>
  );
}

