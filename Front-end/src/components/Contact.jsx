import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";

const Contact = () => {
  return (
    <section className="bg-gray-900  p-4 flex items-center justify-center ">
  <div className="wrapper w-full max-w-5xl py-2 flex flex-col ss:flex-row items-center justify-between gap-6 lg:gap-20">
    <span className="text-gray-300 font-bold text-center ss:text-left">
      BE IN TOUCH WITH US:
    </span>
    <div className="flex flex-col sm:flex-row items-center bg-slate-800 text-white rounded  w-full sm:max-w-none">
      <input
        type="text"
        placeholder="Enter your email..."
        className="w-full p-3 border-none rounded-t sm:rounded-t-none sm:rounded-l bg-slate-800 outline-none"
      />
      <button className="w-full  sm:w-auto p-3 text-white bg-slate-800 rounded-b sm:rounded-b-none sm:rounded-r border-none font-normal font-poppins text-sm">
        JOIN US
      </button>
    </div>
    <div className="flex gap-3 text-white justify-center ss:justify-start">
      <FacebookIcon />
      <InstagramIcon />
      <XIcon />
      <GoogleIcon />
    </div>
  </div>
</section>

  );
};

export default Contact;
