import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
    // hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-2 ">
        <dialog id="my_modal_3" className="modal w-82">
          <div className="modal-box">
          
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                X
              </a>
            
            <h1 className="text-3xl mx-4 mb-8 text-pink-500">Login</h1>
            {/* Email */}
            <div>
              <span className="mt-10 mx-4">Email:</span>
              <br />
              <input type="text" {...register("email", { required: true })} placeholder="Enter your Email" className="mx-5 px-4 mt-2 w-72 border rounded-md outline-none" />
              <br />
              {/* error */}
              {errors.email && <span className="mx-7 text-sm text-red-500">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4">
              <span className="mt-10 mx-4">Password:</span>
              <br />
              <input type="text" {...register("password", { required: true })} placeholder="Enter your password" className="mx-5 px-4 mt-2 w-72 border rounded-md outline-none" />
              <br />
              {/* error */}
              {errors.password && <span className="mx-7 text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-row justify-around mt-6">
                <button className="bg-pink-500 border px-3 py-1 text-white rounded-md">Login</button>
                <div>
                    <span>not Registered?</span>
                    <Link to="/signup" className="text-blue-500 underline">Registration</Link>
                </div>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
