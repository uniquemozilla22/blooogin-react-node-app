const Card = ({ data }) => {
  data.description += "...";
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
