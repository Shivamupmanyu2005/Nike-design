import { useState } from 'react'
import nikeLogo from './assets/nike-logo.png'
import nikeShoe from './assets/hero-shoe.png'
import { motion } from 'motion/react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navLinks = ["New & Featured", "Men", "Women", "Kids", "Sale"];

  return (
    <>
      <div className="bg-[url('src/assets/sky.png')] h-screen w-screen bg-cover">
        <nav className='fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-8 lg:px-16 py-5 bg-white/80 backdrop-blur-md border-b border-border/30 shadow-2xl shadow-neutral-700/40'>
          <img src={nikeLogo} alt="" srcset="" className='h-5 shadow-2xl shadow-neutral-700' />

          <ul className=' md: flex items-center gap-8 '>
            {navLinks.map((link) => {
              return <li key={link}>

                <a href='#' className='text-sm font-body hover: transition-colors uppercase tracking-widest'>
                  {link}
                </a>


              </li>

            })}

          </ul>

          <div className='flex items-center gap-6'>
            <a href="#" className='text-sm font-body hover: transition-colors uppercase tracking-widest'>
              Search
            </a>
            <a href="#" className='text-sm font-body hover: transition-colors uppercase tracking-widest'>
              Cart (0)
            </a>




          </div>


        </nav>

        <section className='relative min-h-screen flex items-center'>
          <div className='absolute inset-0 bg-white/20'>  </div>

          <div className='relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-34'>

            <div className='flex flex-col gap-6'>

              <span className='text-sm uppercase tracking-[0.3em] accent font-display font-medium'>
                Just Do It.
              </span>

              <h1 className='font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase leading-[0.9] tracking-tight '>
                Air Max <br />
                <span className='accent-neutral-950 text-red-500 text-shadow-lg text-shadow-neutral-900'>90</span>
              </h1>
              <p className='text-base md:text-lg max-w-md leading-relaxed font-body font-light'>
                Nothing as iconic, nothing as comfortable. The Air Max 90 stays true to its roots with bold design and visible Air cushioning.
              </p>

              <div className='flex gap-4 mt-4'>
                <motion.button
                
                whileHover={{
                  scale: [1, 1.05, 1],

                }}
                transition={{
                  ease: 'easeIn',
                  duration: 0.5
                }}
                
                className='relative overflow-hidden  px-11 py-5  text-sm font-display bg-blue-600/40 rounded-t-lg rounded-b-one rounded-l-2xl rounded-r-2xl border-3 shadow-2xl shadow-neutral-950/60'>
                  Shop Now
                </motion.button>

                <motion.button 
                whileHover={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  ease: 'easeIn',
                  duration: 0.5
                }}
                className='relative overflow-hidden  px-10 py-5  text-sm font-display bg-white/40 rounded-t-lg rounded-b-one rounded-l-2xl rounded-r-2xl border-3 shadow-2xl shadow-neutral-950/60'>

                  Explore

                </motion.button>

              </div>
              <p className='text-xs uppercase tracking-widest font-body mt-2'>
                Starting at $130
              </p>
            </div>

            {/* Shoe Section */}

            <div className='relative z-20 flex items-center justify-center'>
              <div className='absolute w-100 h-100 lg: w-125 lg: h-125 rounded-full bg-accent/20 blur-3xl' />
              <motion.img 
              
            
              whileHover={{
                scale: 1.05,
                rotate: 34
              }}

              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 100
              }}
              
              src={nikeShoe} alt=""
                width={1024}
                height={1024}
                className='relative z-10 w-full drop-shadow-2xl drop-shadow-blue-700'

              />



            </div>




          </div>
          



        </section>

        <section className='bg-linear-240 mask-r-from-85% from-blue-500 border-t border-border/30 py-16 px-8 lg:px-16 '>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Free Shipping", desc: "On orders over $100" },
            { label: "Member Rewards", desc: "Exclusive access & offers" },
            { label: "Easy Returns", desc: "30-day return policy" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="font-display text-xl uppercase tracking-wider font-semibold">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 font-body font-light">
                {item.desc}
              </p>
            </div>
          ))}


        </div>


        </section>

        <footer className='bg-linear-240 mask-r-from-88% from-blue-500  py-12 px-8  lg:px-16 border-t '>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
          <img src={nikeLogo} alt="" className='h-4 opacity-40' />
          <p className='font-body pr-4'>
            © 2026 Nike, Inc. All Rights Reserved. Design concept only.
          </p>

        </div>



        </footer>



      </div>



    </>
  )
}

export default App
