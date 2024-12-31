import { FaLocationDot } from "react-icons/fa6";

function DestinationHeader({ destination }) {
  return (
    <div className="bg-blue rounded-2xl text-background font-bold text-3xl flex gap-4 p-4 items-center justify-center">
      <FaLocationDot />
      {destination.name}, {destination.country}
    </div>
  );
}

export default DestinationHeader;
