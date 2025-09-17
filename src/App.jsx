import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./Pages/PostPage";
import ShopPage from "./Pages/ShopPage";
import Header from "./components/Header";




export default function App() {
  
  return (
    <div className='w-full dark flex flex-col justify-center items-center'>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage/>} /> 
        <Route path="/posts" element={<PostPage/>} />  
         
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}
