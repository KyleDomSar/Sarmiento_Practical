function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  className = '',
}) {
  const styles =
    variant === 'danger'
      ? 'bg-rose-600 hover:bg-rose-500'
      : 'bg-blue-600 hover:bg-blue-500'

  return (
    <button
      type="button"
      onClick={onClick}
      className={styles + " rounded-xl border-2 border-white/20 px-4 py-2 font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg " + className}
    >
      {children || label}
    </button>
  )
}

export default Button