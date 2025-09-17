

export default function Card({el}) {
  return (
  <div className="card bg-cyan-800 w-96 shadow-sm">
  <figure>
    <img className="w-[250px] h-[400px] object-contain "
      src={el.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{el.title}</h2>
    <h1>{el.price}</h1>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
