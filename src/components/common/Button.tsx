interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = ({
  title,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;