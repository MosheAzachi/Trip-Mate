import { Dropdown as AntDropdown } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { FaUserGroup, FaChildReaching } from "react-icons/fa6";
import Counter from "./Counter";
import IconWrapper from "./IconWrapper";

function Option({ option }) {
  const { title, value, setValue, items, type } = option;

  const Icon =
    title === "Adults"
      ? FaUserGroup
      : title === "Children"
      ? FaChildReaching
      : items
      ? items[value].icon
      : null;

  if (type === "number") {
    return (
      <div className="flex justify-center items-center gap-x-3">
        {title === "Trip Duration" ? (
          <IconWrapper value={value} label={"days"} />
        ) : (
          <IconWrapper Icon={Icon} label={value} />
        )}
        <span className="text-blue text-lg font-bold">{title}</span>
        <Counter setValue={setValue} minValue={title === "Children" ? 0 : 1} />
      </div>
    );
  }
  {
    const menuItems = items.map((item, index) => ({
      key: index,
      label: <div>{item.name}</div>,
    }));

    const menu = {
      items: menuItems,
      onClick: (e) => setValue(parseInt(e.key, 10)),
    };

    return (
      <AntDropdown menu={menu} trigger={["hover"]}>
        <div className="flex items-center cursor-pointer gap-x-3">
          <IconWrapper Icon={Icon} label={items[value].name} />
          <span className="text-blue text-lg font-bold">{title}</span>
          <DownOutlined className="text-blue" />
        </div>
      </AntDropdown>
    );
  }
}

export default Option;
