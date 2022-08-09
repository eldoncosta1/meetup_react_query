import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
};

export function UserCreate() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<CreateUserFormData>();

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    
  };

  return (
    <>
      <Link to="/" className="min-h-full flex  justify-center pt-5">
        Voltar
      </Link>

      <div className="min-h-full justify-center items-center text-brand-500  p-16 px-4 sm:px-6 lg:px-8">
        <form
          className="flex flex-col  justify-center items-center "
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <label className="flex flex-col">
            Nome
            <input {...register("name")} className="mb-3" />
          </label>
          <label className="flex flex-col">
            E-mail
            <input {...register("email")} className="mb-3" />
          </label>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}
