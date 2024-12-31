import Activity from "./Activity";

function Activities({ activeActivities, setActiveActivities, items }) {
  function toggleActivity(index) {
    setActiveActivities((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <div className="flex flex-col items-center bg-secondary rounded-2xl py-3 gap-2 w-full max-w-xl">
      <h2 className="text-blue font-extrabold text-lg">Activities</h2>
      <div className="flex gap-2 flex-wrap justify-center">
        {items.map((item, index) => (
          <Activity
            item={item}
            key={index}
            isActive={activeActivities.includes(index)}
            toggle={() => toggleActivity(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Activities;
