import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function From({ path }) {
  const [inLoginUser, setInLoginUser] = useState(true);
  const { user,
    setUser,
    emailPasswordSignup,
    emailPasswordLogin, } = useAuth();

  useEffect(() => {
    if (path === "signup") {
      setInLoginUser(false);
    } else {
      setInLoginUser(true);
    }
  }, [path]);

  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    inLoginUser
      ? emailPasswordLogin(formData.email, formData.password)
      : emailPasswordSignup(formData.email, formData.password, formData.name);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {inLoginUser ? "Sign in to your account" : "Create New Account"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handelSubmit}>
            {!inLoginUser && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    onChange={handelChange}
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  onChange={handelChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  onChange={handelChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                {inLoginUser ? (
                  <Link
                    to="/auth/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Create New Account
                  </Link>
                ) : (
                  <Link
                    to="/auth/singIn"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Already Have a Account: Login
                  </Link>
                )}
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
