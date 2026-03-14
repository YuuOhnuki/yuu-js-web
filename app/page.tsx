import Hero from '@/app/components/Hero'
import Features from '@/app/components/Features'
import Screenshots from '@/app/components/Screenshots'
import Steps from '@/app/components/Steps'
import FAQ from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'

export default function Home() {
    return (
        <main className="flex-1">
            <Hero />
            <Features />
            <Screenshots />
            <Steps />
            <FAQ />
            <Footer />
        </main>
    )
}
