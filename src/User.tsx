import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "./hooks/useUsers";

type User = {
  name: string;
  email: string;
  createdAt: Date;
};

export function User() {
  const { data, isLoading, isFetching, error } = useUsers();

  if (isLoading)
    return (
      <div className="min-h-full flex items-center justify-center pt-36 px-4 sm:px-6 lg:px-8">
        Carregando..
      </div>
    );

  if (error) return <div className="App">Erro ao buscar dados</div>;

  return (
    <>
      <Link to="/" className="min-h-full flex  justify-center pt-5">
        Voltar
      </Link>
      {!isLoading && isFetching && (
        <p className="min-h-full flex  justify-center">Atualizando dados..</p>
      )}

      <div className="min-h-full flex items-center justify-center p-16 px-4 sm:px-6 lg:px-8">
        <table className="table-auto">
          <thead className="border-b">
            <tr>
              <th className="text-sm font-medium text-brand-700 px-6 py-4 text-left">
                Nome
              </th>
              <th className="text-sm font-medium text-brand-700 px-6 py-4 text-left">
                Email
              </th>
              <th className="text-sm font-medium text-brand-700 px-6 py-4 text-left">
                CreatedAt
              </th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user: User) => (
              <tr key={user.email} className="border-b">
                <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
