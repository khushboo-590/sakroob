import React,{useState} from "react";
import router from "../assets/images/png/computers-Photoroom.png"
import details from '../assets/images/png/delails-small-img.png'
import detailsStar from '../assets/images/svg/stars-details.svg'
import Custombtn from "./common/Custombtn";
import Rewiews from './Rewiews'
import CustomRewiews from './CustomRewiews'
import PopularProduct from "./PopularProduct";
import CheckOut from "./CheckOut";



const ProductDetailPage = () => {
    const colors = ["#000000", "#0D2C47", "#1DF085", "#80A9F7"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="max-w-[1140px] h-[703px] mx-auto  font-montserrat ">
            <div className="grid lg:grid-cols-2 gap-10 p-6  ">
                <div>
                <div className="bg-[#EEF4FB] p-6 lg:p-[42px] lg:w-[517px] h-[240px] md:h-[470px] lg:h-[563px] mb-4" >
                    <img src={router} alt="Router" className=" w-[180px] mx-auto md:w-[320px] lg:w-[432px] rounded-xl mb-4" />
                </div>

                    <div className="flex gap-2 justify-center  mx-auto ">
                        {[...Array(3)].map((_, i) => (
                            <img
                                key={i}
                                src={details}
                                alt={`thumb-${i}`}
                                className=" w-[100px] lg:w-[156px] h-[107px] rounded  object-contain cursor-pointer bg-[#F5F5F5] py-[9px] px-[30px]"
                            />
                        ))}
                    </div></div>
                <div className="space-y-4 max-w-[568px] mx-auto">
                    <h2 className="text-[34px] font-bold leading-[100%]  mb-4">
                    D-Link ADSL Wireless Router DSL2790U                    </h2>
                    <p className="text-base leading-[150%]  mb-4">
                        The D-Link DSL-2790U is a high-speed ADSL2+ wireless router with speeds up to 300 Mbps—ideal for browsing, streaming, and gaming.
                    It features four Ethernet ports, strong security, and guest network support. Perfect for reliable internet in homes and small offices                    </p>
                    <div className="text-[32px] leading-[100%] font-bold  mb-4">$14.95</div>
                    <img src={detailsStar}  className="mb-6"/>

                        <div className="w-[181px]  font-montserrat ">
                            <p className="text-base font-semibold mb-[10px] leading-[100%]">Select Color</p>
                            <div className="flex gap-3">
                                {colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-[29px] h-[29px] rounded-full border-2 flex items-center justify-center transition duration-200 ${selectedColor === color ? "border-[#0D2C47]" : "border-transparent"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    >
                                        {selectedColor === color && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </button>
                                ))}
                            </div>


                            <p className="text-base font-semibold mt-[35px] mb-[15px] leading-[100%]">Select Quantity</p>
                            <div className="flex items-center overflow-hidden rounded-lg">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="w-[48px] h-[44px] bg-[#80A9F7] text-white text-xl font-bold"
                                >
                                    −
                                </button>
                                <div className="w-[85px] h-[44px] bg-white flex items-center justify-center text-[#0D2C47] font-medium">
                                    {String(quantity).padStart(2, "0")}
                                </div>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="w-[48px] h-[44px] bg-[#0D2C47] text-white text-xl font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    <div className="w-full flex flex-col gap-5 mt-[78px]">
                        <Custombtn
                            btntext={"Buy Now"}
                            btnclass={"bg-[#0D2C47] text-white w-full"}
                        />
                        <Custombtn
                            btntext={"Add to Cart"}
                            btnclass={"border border-[#0D2C47] text-[#0D2C47] bg-white w-full"}
                        />
                    </div>

                </div>
            </div>

            {/* Tabs */}
            <Rewiews />
            {/* <CustomRewiews/> */}
            <PopularProduct />
                  {/* <CheckOut /> */}
            
            
            </div>
           
    );
};

export default ProductDetailPage;
