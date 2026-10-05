function Button({
  label,
  onClick,
  variant = "primary",
  children,
  className = "",
}) {
  const styles =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-600 hover:bg-blue-700"

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles} rounded border-2 border-white px-4 py-2 font-medium text-white shadow-sm transition hover:shadow-md ${className}`}
    >
      {children || label}
    </button>
  )
}

export default Button