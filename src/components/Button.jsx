const Button = (props) => {
  return (
    <button
      className={`relative flex flex-col ${props.paddingx} h-12 ${props.bgcolor} ${props.textcolor} rounded-lg overflow-hidden group cursor-pointer`}
    >
      <span className="absolute inset-0 gap-2 md:gap-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
        {props.title}
        <img
          src={props.icon}
          className="transition-transform duration-300 group-hover:translate-x-20"
        />
      </span>
      <span className="h-full w-full gap-2 md:gap-4 flex items-center justify-center translate-y-20 transition-transform duration-300 group-hover:translate-y-0">
        {props.title}
        <img
          src={props.icon}
          className="transition-transform duration-300 -translate-x-10 group-hover:translate-x-0"
        />
      </span>
    </button>
  );
};

export default Button;
