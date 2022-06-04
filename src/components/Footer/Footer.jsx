import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import payment from "../../asset/kindpng_440249.png";
const Footer = () => {
  return (
    <div className="bg-slate-50 h-[17rem]  w-full text-center mt-[20px]">
      <div className="flex justify-center gap-[10rem] text-left pt-7  border-t-orange-500 border-t-4  ">
        {/* Section 1 */}

        <div>
          <h1 className="mb-1">Customer Services</h1>
          <ul>
            <li className="hover:text-orange-600 cursor-pointer">Help Center</li>
            <li className="hover:text-orange-600 cursor-pointer">Shopaa Blog</li>
            <li className="hover:text-orange-600 cursor-pointer">Shopaa Mall</li>
            <li className="hover:text-orange-600 cursor-pointer">Shopping Instruction</li>
            <li className="hover:text-orange-600 cursor-pointer">Delivery</li>
            <li className="hover:text-orange-600 cursor-pointer">Guarantee Policy</li>
          </ul>
        </div>

        {/* Section 2 */}

        <div>
          <h1 className="mb-1">About us</h1>
          <ul>
            <li className="hover:text-orange-600 cursor-pointer">About Shopaa</li>
            <li className="hover:text-orange-600 cursor-pointer">Jobs</li>
            <li className="hover:text-orange-600 cursor-pointer">Terms</li>
            <li className="hover:text-orange-600 cursor-pointer">Policy</li>
          </ul>
        </div>

        {/* Section 3 */}

        <div>
          <h1 className="mb-1">Follow us</h1>
          <ul>
            <li className="flex gap-1">
              <FacebookIcon /> 
              <p className="hover:text-orange-600 cursor-pointer">Facebook</p> 
            </li>
            <li className="flex gap-1">
              <InstagramIcon /> 
              <p className="hover:text-orange-600 cursor-pointer">Instagram</p> 
            </li>
            <li className="flex gap-1">
              <LinkedInIcon /> 
              <p className="hover:text-orange-600 cursor-pointer">LinkedIn</p> 
            </li>
          </ul>
        </div>

        {/* Section 4 */}

        <div>
          <h1 className="mb-1">Contact</h1>
          <ul>
            <li>
              <LocationOnIcon /> 112 Cupertino, CA 95014. United States
            </li>
            <li>
              <PhoneIcon /> +1 234 5678
            </li>
            <li>
              <EmailIcon /> contact@shopaa.com
            </li>
            <li className="mt-3">
              <img src={payment} alt="payment" className="h-14" />
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-5">©2022 Shopaa. created by anhkhoitran</p>
    </div>
  );
};

export default Footer;
