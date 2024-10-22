import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    // hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        const userinfo={
          email:data.email,
          password:data.password
   }
   await axios.post("http://localhost:4001/user/login",userinfo).then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success("loggedin Successfully");
      document.getElementById("my_modal_3").close();
      setTimeout(()=>{
        window.location.reload()
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      },1000)
    }
   }).catch((err)=>{
    if(err.response){
      console.log("error:",err)
      //alert("Error:"+err.response.data.message)
      toast.error("Error:"+err.response.data.message);
      setTimeout(()=>{},2000)
    }
   })
      }
  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-2 ">
        <dialog id="my_modal_3" className="modal w-82">
          <div className="modal-box">
          
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_modal_3").close()}>
                X
              </Link>
            
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
