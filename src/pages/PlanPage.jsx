import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import OptionBlock from "../components/OptionBlock";
import Activities from "../components/Activities";
import {
  dest_items,
  place_items,
  budget_items,
  activityItems,
} from "../common/planTripData";
import { useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { planTrip } from "../services/tripService";
import ResultTrip from "../components/ResultTrip";

function PlanPage() {
  const [dest, setDest] = useState(0);
  const [duration, setDuration] = useState(1);
  const [place, setPlace] = useState(0);
  const [budget, setBudget] = useState(1);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(1);
  const [activeActivities, setActiveActivities] = useState([]);
  const [tripRecommendation, setTripRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmitTrip() {
    setLoading(true);
    const tripResponse = await planTrip({
      dest,
      duration,
      place,
      budget,
      adults,
      children,
      activeActivities,
    });
    console.log(tripResponse);
    setLoading(false);
    setTripRecommendation(tripResponse);
  }

  function handleNewTrip() {
    setTripRecommendation(null);
    setDest(0);
    setDuration(1);
    setPlace(0);
    setBudget(1);
    setAdults(1);
    setChildren(0);
    setActiveActivities([]);
    setLoading(false);
  }

  const options = [
    {
      title: "Destination Prefs",
      items: dest_items,
      value: dest,
      setValue: setDest,
    },
    {
      title: "Trip Duration",
      value: duration,
      setValue: setDuration,
      type: "number",
    },
    {
      title: "Accommodation",
      items: place_items,
      value: place,
      setValue: setPlace,
    },
    {
      title: "Budget Range",
      items: budget_items,
      value: budget,
      setValue: setBudget,
    },
    [
      { title: "Adults", value: adults, setValue: setAdults, type: "number" },
      {
        title: "Children",
        value: children,
        setValue: setChildren,
        type: "number",
      },
    ],
  ];
  return (
    <div className="plan">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      {loading ? (
        <>
          <h1 className="text-blue">Planning your trip...</h1>
          <CgSpinnerTwoAlt className="text-4xl text-blue animate-spin720" />
        </>
      ) : tripRecommendation ? (
        <>
          <ResultTrip tripRecommendation={tripRecommendation} />
          <div className="flex justify-center">
            <Button theme={"secondary"} onClick={handleNewTrip}>
              Plan New Trip!
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue rounded-2xl px-6 py-4 text-3xl font-bold text-primary">
            Plan Your Trip
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {options.map((option, index) => (
              <OptionBlock key={index} option={option} />
            ))}
          </div>
          <Activities
            activeActivities={activeActivities}
            setActiveActivities={setActiveActivities}
            items={activityItems}
          />
          <Button theme={"primary"} onClick={handleSubmitTrip}>
            Plan Your Trip!
          </Button>
        </>
      )}
    </div>
  );
}

export default PlanPage;
