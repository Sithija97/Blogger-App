import { RiProfileLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { ChangePasswordPayload } from "../models";
import { changeUserPassword, logoutUser } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";
import { LoadingStates } from "../enums";
import { LOGIN } from "../routes/router";

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loggedInUser, changeUserPasswordStatus, changeUserPasswordSuccess } =
    useAppSelector((state: RootState) => state.authentication);

  const initialState: ChangePasswordPayload = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const [passwords, setPasswords] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(changeUserPassword(passwords));
  };

  const logout = () => {
    dispatch(logoutUser());
    navigate(LOGIN);
  };

  useEffect(() => {
    if (changeUserPasswordSuccess) {
      logout();
    }
  }, [changeUserPasswordSuccess]);

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full mt-10">
        <section className="min-w-[728px] max-w-[728px] overflow-y-auto m-auto">
          <div>
            <h1 className="text-5xl font-semibold">
              {loggedInUser && loggedInUser.username}
            </h1>
            <h6 className="text-xl text-slate-500 mt-2">
              {loggedInUser && loggedInUser.email}
            </h6>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-8 px-1"
          >
            <h2 className="text-md font-medium mb-4">
              Change account's password
            </h2>
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Current Password
              </label>
              <div className="mt-2">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="currentPassword"
                  required
                  autoComplete="currentPassword"
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="newPassword"
                  required
                  autoComplete="newPassword"
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm New Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="confirmNewPassword"
                  required
                  autoComplete="confirmNewPassword"
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="bg-black text-white text-sm rounded-md px-4 py-2"
              >
                {changeUserPasswordStatus === LoadingStates.LOADING
                  ? `Saving...`
                  : `Save Changes`}
              </button>
            </div>
          </form>
        </section>
        <section className="min-w-[368px] max-w-[368px] px-[24px] bg-slate-50 flex flex-col items-center justify-center">
          <RiProfileLine size={180} color="gray" />
          <button className="bg-blue-700 bottom-0 text-white text-sm rounded-md px-4 py-2">
            Update Profile Picture
          </button>
        </section>
      </div>
    </div>
  );
};
