import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessAdd = () => {
  return (
    <div className="h-[10rem] w-[20rem] bg-black opacity-75 rounded-md  z-10 relative mx-auto bottom-[25rem] flex items-center">
      <div className="flex flex-col justify-center items-center mx-auto">
        <CheckCircleIcon sx={{ fontSize: 40 }} color='primary' />
        <h1 className="text-white">Successfully add item to cart!</h1>
      </div>
    </div>
  );
};

export default SuccessAdd;
