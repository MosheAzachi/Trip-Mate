import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";

function HomePage() {
  const navigate = useNavigate();
  function navGuide() {
    navigate("/guide");
  }

  function navPlan() {
    navigate("/plan-trip");
  }

  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="text-primary text-center">
        Discover Your Perfect Getaway!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Button theme={"secondary"} onClick={navGuide}>
          How Does It Work?
        </Button>
        <Button theme={"primary"} onClick={navPlan}>
          Plan Your Trip!
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
