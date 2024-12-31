import { FaCalendarCheck } from "react-icons/fa6";

function Itinerary({ itinerary }) {
  return (
    <div className="bg-secondary rounded-2xl p-4 flex items-center flex-col gap-4">
      <h1 className="flex gap-2 items-center">
        <FaCalendarCheck className="text-primary" />
        <span className="text-blue">Day Recommendations</span>
      </h1>
      {itinerary.map((day, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="text-blue font-bold text-2xl text-center">
            Day {day.day}
          </h2>
          <ul className="bg-primary rounded-2xl p-4 text-background text-lg">
            {day.activities.map((activity, idx) => (
              <li key={idx}>
                <span className="font-bold">{activity.name}</span>
                {activity.time !== "N/A" && ` - ${activity.time}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
