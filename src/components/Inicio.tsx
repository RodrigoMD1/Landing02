
import { Features } from './Features'
import { HeroSection } from './Layout/HeroSection'
import { ProductosSection } from './productosSection'



export const Inicio = () => {
    return (
        <div className='text-white '>

            <HeroSection />

            <Features />
            
            <ProductosSection />

        </div>
    )
}
