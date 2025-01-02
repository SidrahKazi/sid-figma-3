import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white body-font py-8">
      <div className="container mx-auto px-5 flex flex-col md:flex-row md:justify-between relative">
        <div className="flex justify-end absolute top-4 right-4 space-x-4">
          <a href="https://twitter.com" className="text-white">
            <AiFillTwitterCircle size={30} />
          </a>
          <a href="https://facebook.com" className="text-white">
            <BiLogoFacebookCircle size={30} />
          </a>
          <a href="https://youtube.com" className="text-white">
            <TiSocialYoutubeCircular size={30} />
          </a>
          <a href="https://instagram.com" className="text-white">
            <TiSocialInstagram size={30} />
          </a>
        </div>

        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">FIND A STORE</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>SEND US FEEDBACK</li>
            <li>STUDENT DISCOUNTS</li>
          </nav>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">GET HELP</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquires</li>
            <li>Contact Us On All Other Inquires</li>
          </nav>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">ABOUT NIKE</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </nav>
        </div>
        
        <div className="bg-black mt-48 text-xs space-x-1 flex justify-between items-center absolute"> 
          <a> <MdLocationOn size={20} /> </a>
           <p> Pakistan </p>

           
            <p className="text-gray-500 text-xs flex justify-start"> © 2023 Nike, Inc. All Rights Reserved </p>
</div>
<div className="flex justify-between items-center abolute-right mt-48 text-xs whitespace-nowrap">
        <ul className="flex space-x-4">
                        <li>
                            Guides
                        </li>

                      <li> 
                          Terms of Sale
                          </li>

                        <li>
                          Terms of Use
                        </li>
                            
                        <li>
                           Nike Privacy Policy
                        </li>

                    </ul>
        </div>
      </div>
    </footer>
  );
}

