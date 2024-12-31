import { FaBellConcierge } from "react-icons/fa6";

function Result({ hotels }) {
  return (
    <div className="bg-secondary rounded-2xl p-4 flex flex-col text-center items-center gap-4 max-w-2xl mx-auto">
      <h1 className="flex gap-2 items-center">
        <FaBellConcierge className="text-primary" />
        <span className="text-blue">Hotels</span>
      </h1>
      <ul className="flex flex-col gap-3">
        {hotels.map((hotel, index) => (
          <li
            key={index}
            className="bg-primary rounded-2xl p-3 text-background text-lg"
          >
            <span className="font-bold">{hotel.name}</span> - {hotel.address} -
            <span className="font-bold"> (Rating: {hotel.rating})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
