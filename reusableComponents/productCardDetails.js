import React from "react";

export default  function ProductCardDetails() {
    return(
        <div className=" m-4 relative flex flex-col items-center  bg-white-700 hover:bg-white rounded-lg shadow  ">
            <div className="  md:flex ">
                <div className=" p-0">
                    <img className="h-auto sm:h-48 w-36 sm:w-full" src="/left-pc.png"
                         alt="Computer"/>

                </div>

                <div className="md:flex-shrink-0 p-2">
                    <p className="mt-3 text-xl font-black"> Store Locations </p>
                    <p className="tracking-tighter">24x private access to your belogings </p>

                    <p className="mt-3 text-gray-500"> from $494/month </p>
                    <p className="mt-0 text-gray-500 pr-15"> 1 free access per month, 1 free pickup trip</p>

                </div>
            </div>

        </div>
    )
}
