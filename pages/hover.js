import Image from "next/image";
import Head from "next/head";
import React from "react";
import Script from 'next/script'

const HoverImage=()=>{

    return(
        <>
            <Head>
                <title>image magnifier</title>
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-[#0582f0]">
                <div className="mainframe bg-white p-4 m-4 rounded-md min-w-[200px] min-h-[200px]">
                    {/*--- main image ---*/}
                    <div className="main-image-container relative w-[350px] h-[350px] rounded-md overflow-hidden hover:cursor-zoom-in group">
                        <Image
                            src={'/images/img2.jpg'}
                            alt='test'
                            layout="responsive"
                            width={100}
                            height={100}
                            className='transition-all ease-linear'
                        />
                        <span className="absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold bg-[rgba(0,0,0,0.6)] py-2 px-4 text-center group-hover:hidden">Hover Me</span>
                    </div>
                    {/* --- image list --- */}
                    <ul className="product-list list-none flex justify-between max-w-[350px] mt-4">
                        <li className="relative w-[22%] cursor-pointer overflow-hidden rounded-md transition-all active">
                            <Image
                                src={'/images/img2.jpg'}
                                alt='test'
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </li>
                        <li className="relative w-[22%] cursor-pointer overflow-hidden rounded-md transition-all">
                            <Image
                                src={'/images/img3.jpg'}
                                alt='test'
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </li>
                        <li className="relative w-[22%] cursor-pointer overflow-hidden rounded-md transition-all">
                            <Image
                                src={'/images/img4.jpg'}
                                alt='test'
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </li>
                        <li className="relative w-[22%] cursor-pointer overflow-hidden rounded-md transition-all">
                            <Image
                                src={'/images/img5.jpg'}
                                alt='test'
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <Script src="/scripts/magnifier.js" strategy="afterInteractive"/>
        </>
    )
}
export default HoverImage