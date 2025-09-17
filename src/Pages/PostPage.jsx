import photo1 from '../assets/imges/صورة-كاملة-لطفلة-لغلق-فيس-بوك-4.jpeg'
import photo2 from '../assets/imges/downloadboy.jpeg'
import photo3 from '../assets/imges/الصورة-الجديدة-لغلق-الفيس-بوك-3.jpeg'
import photo4 from '../assets/imges/images.jpeg'


import Post from '../components/Post'
import { useState } from 'react'
import ProfilrInfo from '../components/ProfilrInfo'


export default function PostPage() {
    const [posts,setposts] =useState([
        {img:photo1  , username:'Mohamed Ahmed'  , content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'   },
        {img:photo2  , username:  'Ahmed Hassn', content: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.'  },
        {img:photo3  , username:  'Mage ali', content: 'Suspendisse potenti. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.'  },
        {img:photo4  , username:  'Hossam Ibrahim', content: 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.'  },
    ])
  return (
  <div className='w-full flex h-full p-5 gap-50 text-2xl justify-center text-black bg-white '>
    <div className=' w-1/4 h-100vh rounded-t-2xl container   '>
       <ProfilrInfo/>
    </div>
      <div className='h-full flex flex-col gap-5 w-1/2 '>
        {
            posts.map((el,index) => {
                return(
                    <Post key={index} el={el}/>
                )
            })
        }
    </div>
  </div>
  )
}
