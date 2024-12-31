import { FaLightbulb } from "react-icons/fa6";

function Tips({ tips }) {
  return (
    <div className="bg-secondary rounded-2xl p-4 flex text-center items-center flex-col gap-4">
      <h1 className="flex gap-2 items-center">
        <FaLightbulb className="text-primary" />
        <span className="text-blue">Tips</span>
      </h1>
      <ul className="flex flex-col gap-3">
        {tips.map((tip, index) => (
          <li
            className="bg-background rounded-2xl p-4 text-primary text-lg"
            key={index}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tips;
