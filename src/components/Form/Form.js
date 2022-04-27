import Header from "./Header";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";

function Form() {
  return (
    <div className="container mx-auto md:px-20 px-5">
      <Header />

      <div className="mt-10">
        <form className="md:w-6/12 pb-32 xl:w-4/12 w-full grid grid-cols-2 p-2">
          <FirstName />
          <LastName />
          <Email />
          <Password />
          <button
            type="button"
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
