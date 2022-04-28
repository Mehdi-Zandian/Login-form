import Header from "./Header";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
// redux
import { useDispatch } from "react-redux";
import { signUp } from "../../app/features/user/userSlice";
// form api
import { useForm } from "react-hook-form";

function Form() {
  // redux
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => dispatch(signUp(data));

  return (
    <div className="container mx-auto md:px-20 px-5">
      <Header />

      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-6/12 pb-32 xl:w-4/12 w-full grid grid-cols-2 p-2"
          autoComplete="off"
        >
          <FirstName register={register} errors={errors} />
          <LastName register={register} errors={errors} />
          <Email register={register} errors={errors} />
          <Password register={register} errors={errors} />
          <button
            type="reset"
            className="bg-gray-500 text-white py-3 mr-4 mt-4 rounded-2xl opacity-40 transition-opacity hover:opacity-100"
          >
            Clear all
          </button>
          <button
            type="submit"
            className="bg-fblue-100 text-white opacity-70 transition-all shadow-sm shadow-transparent hover:shadow-blue-500 hover:opacity-100 py-3 rounded-2xl ml-4 mt-4"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
