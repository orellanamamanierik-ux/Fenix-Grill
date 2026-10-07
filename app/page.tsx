import { About } from '@/components/about'
import { Cart } from '@/components/cart'
import { CartProvider } from '@/components/cart-provider'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'
import { MenuSection } from '@/components/menu-section'
import { Navbar } from '@/components/navbar'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <Cart />
      <WhatsAppButton />
    </CartProvider>
  )
}
