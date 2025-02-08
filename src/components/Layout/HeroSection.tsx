
import { TextGenerateEffect } from "../ui/text-generate-effect";

import { Spotlight } from "../ui/Spotlight";
import { SobreNosotros } from "../SobreNosotros";




const words = `TITULO DEL HERO SECTION `;

export const HeroSection = () => {
    return (


        <div className=" hero justify-items-center">

            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="left-0 -top-40 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="relative z-10 w-full p-4 pt-20 mx-auto max-w-7xl md:pt-0">
                    <h1 className="text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                        <TextGenerateEffect words={words} />
                    </h1>
                    <p className="max-w-lg mx-auto mt-4 text-base font-normal text-center text-neutral-300">
                        Texto
                    </p>


                </div>

            </div>
            <div className="flex flex-col items-center justify-start w-full h-full bg-gradient-to-b from-black to-bg-neutral-950 ">
                <SobreNosotros />
            </div>
            
            
            
            
        </div>







    )
}
