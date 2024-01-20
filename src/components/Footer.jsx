import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import {footer} from '../data/data.js'


const Footer = () => {

  return (
    <div className="footer bg-black w-full h-auto pb-5">
      < div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pl-5 lg:pl-0">
          {footer.map((item, index) => (
          <div className="grid-cols-2" key={index}>
            <div className="title">
              <h6 className="text-white font-bold text-lg pb-3 mb-0">{item.title}</h6>
            </div>
            <div className="title-content">
              <ul className="text-gray-500 list-none pl-0">
                {item.content.map((content, i) => (
                  <li className="py-1 mb-0" key={i}>
                    <a href={content.link} className="hover:text-white no-underline">{content.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
          <div className="grid-cols-4">
            <div className="title">
              <h6 className="text-white text-lg pb-3 font-bold mb-0">Download App</h6>
            </div>
            <div className="flex flex-wrap flex-row justify-center my-5">
              <div className="app max-w-[160px] w-1/2 px-1">
                <a href="https://apps.apple.com/vn/app/kfc-vietnam/id562164615?l=en" className="inline-block bg-contain border-[1px] border-solid border-gray-200 rounded-md  w-full h-[48px] xl:h-[34px]"><span className="sr-only">App store</span></a>
              </div>
              <div className="play max-w-[160px] w-1/2 px-1">
                <a href="https://play.google.com/store/apps/details?id=kfc.vietnam&hl=en" className="inline-block bg-contain border-[1px] border-solid border-gray-200 rounded-md  w-full h-[48px] xl:h-[34px]"><span className="sr-only">CH play</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pb-[36px] h-full border-b-[1px] border-solid border-gray-200">
          <div className="my-5">
            <h6 className="text-white text-center">Copyright © 2023 HeyPuddinn</h6>
          </div>
          <div className="text-white text-center lg:absolute top-0 right-0 my-5">
            <div className="icon">
              <a href="https://www.facebook.com/HeyPudin" className="inline-block border-[1px] rounded-full border-solid border-gray-200 p-2 mx-4">
                <CiFacebook size={25}/>
              </a>
              <a href="https://www.facebook.com/HeyPudin" className="inline-block border-[1px] rounded-full border-solid border-gray-200 p-2 mx-4">
                <BsInstagram size={25}/>
              </a>
              <a href="https://www.facebook.com/HeyPudin" className="inline-block border-[1px] rounded-full border-solid border-gray-200 p-2 mx-4">
                <AiOutlineYoutube size={25}/>
              </a>
              <a href="https://www.facebook.com/HeyPudin" className="inline-block border-[1px] rounded-full border-solid border-gray-200 p-2 mx-4">
                <CiTwitter size={25}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Footer;