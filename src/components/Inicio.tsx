
import { Features } from './Features'
import { HeroSection } from './Layout/HeroSection'
import { ProductosSection } from './productosSection'
import { SobreNosotros } from './SobreNosotros'




export const Inicio = () => {
    return (
        <div className='text-white '>

            <HeroSection />
            <div className="flex flex-col items-center justify-start w-full h-full bg-gradient-to-b from-black to-bg-neutral-950 ">
            <SobreNosotros/>
            </div>
            <Features />
         
            <ProductosSection />

        </div>
    )
}
