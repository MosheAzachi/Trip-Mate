import Option from "./Option";

function OptionBlock({ option }) {
  return (
    <div className="flex flex-wrap justify-center bg-secondary rounded-2xl px-4 py-2 gap-4">
      {Array.isArray(option) ? (
        option.map((opt, index) => <Option key={index} option={opt} />)
      ) : (
        <Option option={option} />
      )}
    </div>
  );
}

export default OptionBlock;
