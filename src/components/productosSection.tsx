"use client";
import React from 'react'
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from 'next/image';
import img from '../img/prueba01.jpg';

//todo averiguar tema de las imagenes que no lo toma y como funciona ese image 


export const ProductosSection = () => {
    return (
        <div>

            <div>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                
                    <Image
                        src={img}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                    />
                    <p className="mt-4 mb-2 text-base text-black sm:text-xl dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                    </p>
                    <button className="flex items-center py-1 pl-4 pr-1 mt-4 space-x-1 text-xs font-bold text-white bg-black rounded-full dark:bg-zinc-800">
                        <span>Buy now </span>
                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                            $100
                        </span>
                    </button>
                </BackgroundGradient>
            </div>


        </div>
    )
}
