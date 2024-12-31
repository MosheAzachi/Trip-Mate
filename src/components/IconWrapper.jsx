function IconWrapper({ Icon = null, value = null, label = null }) {
  return (
    <div className="flex flex-col items-center justify-center bg-background rounded-full w-20 h-20 text-primary">
      {Icon ? (
        <Icon className="text-2xl" />
      ) : (
        <span className="text-2xl">{value}</span>
      )}
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default IconWrapper;
