import Head from 'next/head'
import Header from "../pageSections/Header";
import React from "react";
import FeaturesBlocks from "../pageSections/FeaturesBlocks";
import BackgroundSection from "../pageSections/backgroundSection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Head>
                <title>BOXFUL</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
           <BackgroundSection/>

            <main className="flex-grow ">
               <div className="md:-m-10 sm:bt-15">
                   <FeaturesBlocks />
               </div>
            </main>
        </div>
    )
}
