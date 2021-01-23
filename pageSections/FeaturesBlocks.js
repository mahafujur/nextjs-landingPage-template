import React from 'react';
import CustomTable from "../reusableComponents/table";
import ProductCardDetails from "../reusableComponents/productCardDetails";

function FeaturesBlocks() {
    return (
        <section className="relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:flex p-2 space-x-4 ">

                <div className="bg-section-1-bg sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">

                    <div className=" p-2 md:flex mx-auto">
                        <div className="md:flex-shrink-0 p-4  md:mr-28 sm:mr-1 ml-10 md:ml-0">
                            <p className="mt-3 text-gray-500">
                                In-Person Access</p>
                            <p className="mt-2 text-2xl font-black ">Boxful-Self Storage</p>

                            <p className="mt-2 text-gray-500 md:pr-15"> Full control of your </p>
                            <p className="mt-1 text-gray-500 md:pr-15"> belongings at Boxful Stores </p>
                        </div>

                        <div className="p-2">
                            <img className="h-48 w-full object-cover  " src="/leftPic.png"
                                 alt="Computer"/>
                        </div>

                    </div>
                    <div className=" m-4 relative flex flex-col items-center  bg-white rounded  ">
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

                        <div>
                            <CustomTable/>

                        </div>
                    </div>

                </div>
                <div className="bg-section-2-bg sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">

                    <div className=" p-2 md:flex mx-auto">
                        <div className="md:flex-shrink-0 p-4  md:mr-28 sm:mr-1 ml-10 md:ml-0">
                            <p className="mt-3 text-gray-500">
                                In-Person Access</p>
                            <p className="mt-2 text-2xl font-black ">Boxful Door to Door</p>

                            <p className="mt-2 text-gray-500 md:pr-15"> Full control of your </p>
                            <p className="mt-1 text-gray-500 md:pr-15"> belongings at Boxful Stores </p>
                        </div>

                        <div className="p-2">
                            <img className="h-48 w-full object-cover  " src="/rightpic.png"
                                 alt="Computer"/>
                        </div>

                    </div>
                    <ProductCardDetails />
                    <ProductCardDetails />



                </div>
            </div>

        </section>
    );
}

export default FeaturesBlocks;
