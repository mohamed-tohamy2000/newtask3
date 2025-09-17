import cover from '../assets/imges/cover.jpeg'
import profile from '../assets/imges/profile.jpeg'

export default function ProfilrInfo() {
  return (
     <div className='w-full h-full flex flex-col gap-3' >
                <div className='w-full h-56   '>
                    <img src={cover} alt=" caver image" className='w-full rounded-t-2xl object-contain ' />
                    <img src={profile} alt="" className=' w-40 h-40 rounded-full bottom-15 left-3 border-8 border-white relative ' />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Mohamed Tohamy Ahmed</h1>
                </div>
                <div>
                    <p>Front-End Developer | React.js | JavaScript | HTML | CSS | Strapi CMS | Building Responsive & User-Friendly Interfaces</p>
                </div>
            </div>
  )
}
