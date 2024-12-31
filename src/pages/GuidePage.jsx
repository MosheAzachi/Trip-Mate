import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";

function GuidePage() {
  const navigate = useNavigate();
  function navPlan() {
    navigate("/plan-trip");
  }
  return (
    <div className="guide">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1 className="text-primary">
        Welcome to TripMate, your ultimate vacation planning assistant! Here's
        how our app works to help you plan your dream getaway:
      </h1>
      <ol className="list-decimal space-y-4">
        <li>
          Input Your Preferences: Start by telling us your destination
          preferences, trip duration, budget range, activities you enjoy,
          accommodation preferences, and any special requirements.
        </li>
        <li>
          Personalized Recommendations: Based on your preferences, our
          AI-powered recommendation engine generates personalized trip
          recommendations. Explore exciting destinations, accommodation options,
          activities, and more tailored to your interests.
        </li>
        <li>
          Review and Customize: Review the recommendations we provide and
          customize your trip further. Add or remove activities, adjust your
          itinerary, and fine-tune details to create your perfect vacation plan.
        </li>
        <li>
          Book with Confidence: Once you're satisfied with your trip plan,
          easily book accommodations, activities, and transportation right from
          our app. Travel with confidence knowing you've planned a memorable
          vacation.
        </li>
        <li>
          Enjoy Your Getaway: With TripMate, enjoy a seamless travel experience
          and make the most of your vacation time. Discover new places, create
          lasting memories, and have a fantastic trip!
        </li>
      </ol>
      <h1 className="text-blue">
        Ready to plan your next adventure? Let's get started
      </h1>
      <Button theme={"primary"} onClick={navPlan}>
        Plan Your Trip!
      </Button>
    </div>
  );
}

export default GuidePage;
