function Activity({ item, index, isActive, toggle }) {
  return (
    <div
      className={`activity ${isActive && "active"}`}
      key={index}
      onClick={toggle}
    >
      <item.icon className="text-primary" />
      <span className="text-blue">{item.value}</span>
    </div>
  );
}

export default Activity;
