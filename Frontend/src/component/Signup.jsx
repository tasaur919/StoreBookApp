import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
    // hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex h-screen items-center justify-center  ">
        <div  className="">
          <div className="modal-box w-full md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                X
              </Link>
            
            <h1 className="text-3xl mx-4 mb-8 text-pink-500">Registration</h1>
{/* name */}
<div>
              <span className="mt-10 mx-4">Name:</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullName"
                className="mx-5 px-4 mt-2 w-72 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {/* error */}
              {errors.name && <span className="mx-7 text-sm text-red-500">This field is required</span>}
            </div>
            {/* Email */}
            <div>
              <span className="mt-10 mx-4">Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="mx-5 px-4 mt-2 w-72 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {/* error */}
              {errors.email && <span className="mx-7 text-sm text-red-500">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4">
              <span className="mt-10 mx-4">Password:</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="mx-5 px-4 mt-2 w-72 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {/* error */}
              {errors.password && <span className="mx-7 text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-row justify-around mt-6">
              <button className="bg-pink-500 border px-3 py-1 text-white rounded-md">
                Signup
              </button>
              <div>
                <span>Have account?</span>
                <button
                  className="text-blue-500 underline"
                  onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
