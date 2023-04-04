export const Button = ({ company, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      data-id={company}
      type="button"
      className={className}
    >
      {company}
    </button>
  )
}
