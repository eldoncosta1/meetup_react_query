import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { api } from "./services/api";

type User = {
  name: string;
  email: string;
  createdAt: Date;
};

export function User() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    loadUsers();
  }, []);

  async function loadUsers() {
    const { data } = await api.get("users");

    setData(data.users);
    setLoading(false);
  }

  return (
    <>
      <Link to="/" className="min-h-full flex  justify-center pt-5">
        Voltar
      </Link>

      <div className="min-h-full flex items-center justify-center">
        {loading && <ClipLoader color="#be123c" />}
      </div>

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
            {data?.map((user: User) => (
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
