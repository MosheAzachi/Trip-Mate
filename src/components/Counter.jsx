import { UpOutlined, DownOutlined } from "@ant-design/icons";
import Button from "./Button";

function Counter({ minValue = 1, setValue }) {
  const increment = () => setValue((val) => Math.min(val + 1, 10));
  const decrement = () => setValue((val) => Math.max(minValue, val - 1));

  return (
    <div className="flex flex-col gap-y-2">
      <Button theme="number-btn" onClick={increment}>
        <UpOutlined className="text-blue" />
      </Button>
      <Button theme="number-btn" onClick={decrement}>
        <DownOutlined className="text-blue" />
      </Button>
    </div>
  );
}

export default Counter;
