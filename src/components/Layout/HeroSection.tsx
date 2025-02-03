
import { TextGenerateEffect } from "../ui/text-generate-effect";

import { Spotlight } from "../ui/Spotlight";



const words = `Hello there asfasgasfgasgasfgasfasfas as fas fasfasfasf gsdg
`;

export const HeroSection = () => {
    return (


        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold"><TextGenerateEffect words={words} /></h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>


            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Spotlight <br /> is the new trend.
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        Spotlight effect is a great way to draw attention to a specific part
                        of the page. Here, we are drawing the attention towards the text
                        section of the page. I don&apos;t know why but I&apos;m running out of
                        copy.
                    </p>
                </div>
            </div>
        </div>







    )
}
