
export default function Post({el}) {
  return (
    <div className="bg-white text-black w-full border-1 p-5 h-96 gap-3 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full h-15 shadow-black p-5 gap-2 flex items-center border-1 rounded-2xl">
            <img src={el.img} alt="userimg" className="w-[36px] rounded-2xl h-[36px] object-contain" />
            <h1>{el.username}</h1>
        </div>
        <div className=" text=b w-full h-78 shadow p-5 flex ">
            {el.content}
        </div>
        <div className="w-full h-9 flex justify-between items-center">
            <button className="btn btn-dash">like</button>
            <button className="btn btn-dash">coment</button>
            <button className="btn btn-dash">shere</button>
        </div>
    </div>
  )
}
