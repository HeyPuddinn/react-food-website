import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "../assets/images/ModContentLeftRight/h2_img-5.jpg";
import image2 from "../assets/images/ModContentLeftRight/h2_img-6.jpg";
import image3 from "../assets/images/ModContentLeftRight/h2_img-7.jpg";

const ModContentLeftRight = () => {
  return (
    <div>
      <Navbar />
      <div className="modcontentleftright">
        <div className="container mx-auto">
          <div className="modcontentinner">
            <div className="modtitle mb-3">
              <h2 className="text-center text-red-600 text-sm lg:text-lg ">
                WHY CHOOSE FASFOOD ?
              </h2>
            </div>
            <div className="">
              <h2 className="text-center uppercase text-black text-2xl lg:text-7xl font-bold">
                BURGERS MADE WITH
                <br />
                LOVE AND CARE
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center pt-5">
                <div className="rowimg mb-5 mt-5">
                  <img src={image1} alt="" className="rounded-full" />
                </div>
                <div className="">
                  <h4 className="uppercase text-center font-bold">
                    OUR BURGERS
                  </h4>
                </div>
                <p className="text-center">
                  At Fazfood , we only use quality ingredients and treat them
                  with care! We flame grill our steaks, and by using open
                  kitchens we ensure that guests can always follow the process.
                </p>
              </div>

              <div className="flex flex-col items-center pt-5 ">
                <div className="row2img mb-5 mt-[70px]">
                  <img src={image2} alt="" className="rounded-full" />
                </div>
                <div className="">
                  <h4 className="uppercase text-center font-bold">
                    Your opinion is important
                  </h4>
                </div>
                <p className="text-center">
                  We take all constructive feedback seriously, and we would love
                  along with our staff – to spend every single day making
                  Fasfood even better! Send your feedback on your experience
                  with us here.
                </p>
              </div>

              <div className="flex flex-col items-center pt-5">
                <div className="rowimg mb-5 mt-5">
                  <img src={image3} alt="" className="rounded-full" />
                </div>
                <div className="">
                  <h4 className="uppercase text-center font-bold">
                    CHICKEN BURGERS
                  </h4>
                  <p className="text-center">
                    At Fazfood, we want to make sure that everyone can get their
                    hands on a good burger. Go hunting in our versatile burger
                    menu there is something for every taste and for all sizes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ModContentLeftRight;
