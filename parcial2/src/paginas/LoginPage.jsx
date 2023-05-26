import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      const response = await axios.post("http://localhost:2000/login", {
        email: email.value,
        password: password.value,
      });
      const rol = response.data["rol"];
      sessionStorage.setItem("rol", rol);
      setLoginStatus("Success");
    } catch (error) {
      alert(error.response.data.message);
      setLoginStatus("Error");
    }
  };

  return (
    <div className="bg-neutral-600/70 flex justify-center items-center w-screen h-screen">
      <div className="flex w-[750px] h-[550px] bg-white">
        <div className="flex flex-col justify-evenly items-center w-1/2 h-full p-6 bg-[#B7CCC2]">
          <img src={process.env.PUBLIC_URL + '/books.png'} alt="books" className="h-[250px]"/>
          <h1 className="text-2xl text-white font-semibold text-center justify-center">Encuentra hasta el libro que no estabas buscando</h1>
        </div>
        <div className="flex flex-col items-center justify-evenly w-1/2 h-full p-6 text-gray-700">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-white">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight justify-center items-center tracking-tight text-black md:text-2xl dark:text-gray-700">
                Tu Libreria Aliada
              </h1>
              <form
                onSubmit={handleSubmit}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                  >
                    <FormattedMessage id="User" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#B7CCC2] dark:border-[#B7CCC2] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
                    placeholder="name@mail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                  >
                    <FormattedMessage id="Password" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#B7CCC2] dark:border-[#B7CCC2] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        <FormattedMessage id="Remember" />
                      </label>
                    </div>
                  </div>
                  <a
                    href="/"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <FormattedMessage id="Forgot" />
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-gray-700 bg-[#B7CCC2] hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <FormattedMessage id="Login" />
                </button>
                {loginStatus && (
                  <p
                    style={{
                      paddingTop: "20px",
                      justifyContent: "center",
                      display: "flex",
                      color: "red",
                    }}
                  >
                    {loginStatus === "Success" ? (
                      navigate(`/home`)
                    ) : (
                      <FormattedMessage id="LoginFailed" />
                    )}
                  </p>
                )}
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  <FormattedMessage id="DontHave" />
                  {" "}
                  <a
                    href="/"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                  <FormattedMessage id="Register" />
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
