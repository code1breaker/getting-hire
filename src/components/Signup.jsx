import React from "react";
import Header from "./Header";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center py-8">
        <div className="w-[30%] bg-white p-5 rounded-xl flex flex-col gap-5 bg-blue-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
            <p className="text-gray-400 text-md">
              Enter your email and password to sign up!
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label>First name</label>
              <input
                className={`py-2 px-4 w-full border-2 outline-none rounded-xl placeholder-gray-400 text-black  $`}
                placeholder="First name"
                type="text"
                name="firstname"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Last name</label>
              <input
                className={`py-2 px-4 w-full border-2 outline-none rounded-xl placeholder-gray-400 text-black `}
                placeholder="Last name"
                type="text"
                name="lastname"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              className={`py-2 px-4 border-2 outline-none rounded-xl  placeholder-gray-400 text-black `}
              placeholder="mail@simmmple.com"
              type="text"
              name="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              className={`py-2 px-4 border-2 outline-none rounded-xl  placeholder-gray-400 text-black`}
              placeholder="password"
              type="text"
              name="password"
            />
          </div>

          <button className="bg-[#4b7db1] outline-none mt-4 py-3 rounded-xl text-white">
            Create my account
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
