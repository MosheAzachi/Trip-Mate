function Button({ theme, onClick, children }) {
  return (
    <button className={theme} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
