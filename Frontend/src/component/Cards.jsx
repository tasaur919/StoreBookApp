import React from "react";


function Cards({item}) {
    //console.log(item)
  return (
    <>
      <div className="max-w-screen-xl container gap-2 mt-5 mb-4">
        <div className="card  bg-base-100 md:w-80 w-96 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline px-4 py-2 hover:py-2 rounded-full hover:bg-pink-500 cursor-pointer hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
