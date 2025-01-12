export const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full mt-10">
        <section className="min-w-[728px] max-w-[728px] overflow-y-auto m-auto">
          <div>
            <h1 className="text-5xl font-semibold">sithija shehara</h1>
            <h6 className="text-xl text-slate-500 mt-2">nsithija@gmail.com</h6>
          </div>
          <form action="" className="flex flex-col gap-4 mt-8 px-1">
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-black text-white text-sm rounded-md px-4 py-2">
                Save Changes
              </button>
            </div>
          </form>
        </section>
        <section className="min-w-[368px] max-w-[368px] px-[24px] bg-slate-200 mx-auto">
          avatar section
        </section>
      </div>
    </div>
  );
};
