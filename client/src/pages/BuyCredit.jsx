import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const BuyCredit = () => {

  const {user} = useContext(AppContext)

  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    
    className='min-h-[90vh] text-center pt-14 mb-10' >
      
      <button className='border border-gray-400 rounded-full px-10 py-2 mb-6'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-10 sm:mb-10'>
        Choose the plan
      </h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((plan,idx)=>(
          
          <div key={idx} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <img src={assets.logo_icon} alt="" width='40'/>
            <p className='mt-3 mb-1 font-semibold'>
              {plan.id}
            </p>
            <p className='text-sm'>
              {plan.desc}
            </p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'> ${plan.price}</span> / {plan.credits} credits
            </p>

            <button className='w-full bg-gray-800 text-sm text-white rounded-md py-2.5 mt-8 hover:bg-gray-700 transition-all duration-300 min-w-52'>
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit