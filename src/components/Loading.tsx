const Loading = () => {
  return (
    <div className={"absolute top-0 w-full h-full bg-primary bg-opacity-50"}>
      <progress className=" progress w-full "></progress>
    </div>
  );
};

export default Loading;
