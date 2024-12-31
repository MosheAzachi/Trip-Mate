import DestinationHeader from "./DestinationHeader";
import Hotels from "./Hotels";
import Itinerary from "./Itinerary";
import Tips from "./Tips";

function ResultTrip({ tripRecommendation }) {
  const { destination, hotel_recommendations, itinerary, tips } =
    tripRecommendation;

  return (
    <div className="flex flex-col gap-y-11 max-w-3xl mx-auto">
      <DestinationHeader destination={destination} />
      <Hotels hotels={hotel_recommendations} />
      <Itinerary itinerary={itinerary} />
      <Tips tips={tips} />
    </div>
  );
}

export default ResultTrip;
