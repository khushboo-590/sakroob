
import React from 'react';
import Heading from './common/Heading';
import sensorImg from '../assets/images/png/close-up-computer.png'
import pcPartsImg from "../assets/images/png/custom-pc.png"
import diyImg  from "../assets/images/png/div-tools.png"
import cablesImg from "../assets/images/png/cable-img.png"
import gamingImg from '../assets/images/png/gaming-img.png'
import raspberryImg from '../assets/images/png/rasberryimg.png'

const Shop = () => {
    return (
        <div id='diy-services' className="py-14 bg-white text-center px-4 mb-10 md:mb-[100px] lg:mb-[132px]">
            <p className="text-center italic text-lg md:text-xl text-[#112D49] mb-2">
                Featured Categories            </p>
            <Heading headText="Shop Our Most Popular Products" headClass="!mb-10 !max-w-[602px] !mx-auto" />
            <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
                <div className="rounded-xl pt-6 flex flex-col md:flex-row justify-between items-center gap-6 bg-light-blue w-full md:w-[680px] md:pl-16">
                    <div className="text-left">
                        <Heading headText="Sensors & Modules" headClass="!text-lg md:!text-[28px] lg:!text-[32px] !mb-4" />
                    </div>
                    <img src={sensorImg} alt="Sensors & Modules" className="w-[300px] md:w-[372px] h-[200px] md:h-[261px]" />
                </div>
                <div className="rounded-xl pt-8 flex flex-col justify-between items-center w-full md:w-[328px] bg-blue px-4">
                    <Heading headText="Custom PC Parts" headClass="!text-lg md:!text-[28px] lg:!text-[32px] max-w-[213px]" />
                    <img src={pcPartsImg} alt="Custom PC Parts" className="w-[150px] md:w-[174px] h-[180px] md:h-[213px] mt-auto mx-auto" />
                </div>
                <div className="rounded-xl pt-[46px] pb-4 flex flex-col text-center items-center w-full md:w-[328px] px-4 bg-silver">
                    <Heading headText="DIY Tools" headClass="!text-lg md:!text-[28px] lg:!text-[32px] !mb-4" />
                    <img src={diyImg} alt="DIY Tools" className="w-[160px] md:w-[184px] h-[180px] md:h-[208px] object-contain" />
                </div>
                <div className="rounded-xl pt-6 flex flex-col justify-between md:text-right md:items-end w-full md:w-[328px] bg-blue pr-4">
                    <Heading headText="Cables & Connectors" headClass="!text-lg md:!text-[28px] lg:!text-[32px]" />
                    <img src={cablesImg} alt="Cables & Connectors" className="w-[240px] md:w-[306px] h-[200px] md:h-[261px] mt-auto" />
                </div>
                <div className="rounded-xl pt-6 pb-4 flex flex-col text-center items-center w-full md:w-[328px] px-4 bg-silver">
                    <Heading headText="Gaming Peripherals" headClass="!text-lg md:!text-[28px] lg:!text-[32px] !mb-8" />
                    <img src={gamingImg} alt="Gaming Peripherals" className="w-[220px] md:w-[266px] h-[160px] md:h-[184px] object-contain" />
                </div>
                <div className="rounded-xl pt-6 flex flex-col justify-between text-center items-center w-full md:w-[680px] bg-light-blue">
                    <Heading headText="Raspberry Pi Kits" headClass="!text-lg md:!text-[28px] lg:!text-[32px] md:!pt-[59px]" />
                    <img src={raspberryImg} alt="Raspberry Pi Kits" className="w-full md:w-[680px] h-[240px] md:h-[240px] mt-auto" />
                </div>

            </div>
        </div>
    );
};

export default Shop;
