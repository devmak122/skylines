import React from 'react'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import group from '../assets/images/group.svg'
import elipse4 from '../assets/images/elipse4.svg'

const ClientsSection = () => {
  return (
    <div>
        <img src={group} alt=""  className=' absolute  right-0 h-16 top-[300px] z-0'/>
       <img src={elipse4} alt="" className='  absolute right-0  top-[370px] z-0' />
       <img src={elipse4} alt="" className='  absolute -right-[300px] h-80 w-80 top-[370px] z-0' />

       <div className='flex mt-[100px] justify-evenly '>
        <img className='h-[258px] w-[265px]'  src={client1} alt="" />
        <img className='mt-12 h-[393px] w-[471px]' src={client2} alt="" />
        <img className=' mt-[230px] w-[320px] h-[248px]' src={client3} alt="" />
       </div>
    </div>
  )
}

export default ClientsSection
