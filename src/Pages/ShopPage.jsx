import Card from '../components/Card'


import { useState } from 'react'

import Hero from '../components/Hero'
import axios from 'axios'


export default function ShopPage() {
    let domain = "https://fakestoreapi.com";
    let endpoint="/products";
    let url = domain+ endpoint
    axios.get(url).then((res) => {
        setPhones(res.data)
        
    }
    )
    .catch((err) =>{
        console.log(err)
    }

    )

    const [phones,setPhones] = useState([])

  return (
   <div className='w-full h-full flex flex-col justify-center items-center'>
    <Hero/>

     <div className='flex  justify-center items-center gap-4'>
           <main className="flex flex-col container mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-8 text-white text-center">Our Collection</h3>
        <div className="grid gap-15 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
          phones.map((el,index) => {
            return(
              <Card key={index} el={el} />
            )
          })
        }
        </div>
      </main>
       
       
       
      </div>
   </div>
  )
}
