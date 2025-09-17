import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="w-full h-12 flex justify-center bg-gradient-to-r from-cyan-500 text-white backdrop-blur-lg sticky top-0 z-30">
      <div className="container h-full flex justify-between items-center text-white">
        <h1>Logo</h1>

        <div className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </div>

        <button className="btn btn-dash rounded-2xl">Booking</button>
      </div>
    </div>
  );
}
