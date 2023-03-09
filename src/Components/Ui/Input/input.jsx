const input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case "input":
      inputElement = (
        <input
          className="w-full  rounded-xl bg-transparent text-headingColor font-normal text-2xl pr-6   placeholder:text-2xl md:placeholder:text-2xl  placeholder:text-disable  placeholder:font-normal"
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className="w-full  rounded-xl  bg-transparent text-headingColor font-normal text-2xl pr-6   placeholder:text-2xl md:placeholder:text-2xl  placeholder:text-disable  placeholder:font-normal py-8 lg:py-7"
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
  }

  return <>{inputElement}</>;
};

export default input;
