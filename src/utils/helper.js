import game from "../assets/images/svg/game-icon.svg";
import storage from "../assets/images/svg/stroage-icon.svg";
import graphic from "../assets/images/svg/graphics-icon.svg";
import televisions from "../assets/images/svg/television.-icon.svg";
import smartwatch from "../assets/images/svg/smatchwatch-icon.svg";
import monitors from "../assets/images/svg/monitor-icon.svg";
import delivery from "../assets/images/svg/delivery.svg";
import returnIcon from "../assets/images/svg/returnIcon.svg";
import support from "../assets/images/svg/support.svg";
import warranty from "../assets/images/svg/warranty.svg";
import gift from "../assets/images/svg/gift.svg";
import heroImg from '../assets/images/png/header-img.png';
import sensor from '../assets/images/png/close-up-computer.png'
import pcparts from "../assets/images/png/custom-pc.png"
import tools from "../assets/images/png/div-tools.png"
import cables from "../assets/images/png/cable-img.png"
import controller from '../assets/images/png/gaming-img.png'
import kits from '../assets/images/png/pi-kits.png'
import pc from "../assets/images/png/image-Photoroom.png"
import router from "../assets/images/png/computers-Photoroom.png"
import chair from '../assets/images/png/chair-png-Photoroom.png'
import man from "../assets/images/png/man-img.png"
import girl from "../assets/images/png/girl-img.png"
import { Icon } from "./icon";
import blogImg1 from "../assets/images/png/blog-img-1.png";
import blogImg2 from "../assets/images/png/blog-img-2.png";
import ac from '../assets/images/png/ac.png'
import ac1 from '../assets/images/png/ac1.png'
import ac2 from "../assets/images/png/ac2.png"



export const HEADER_DATA = [
    { name: "Game", icon: game },
    { name: "Storage (SSD)", icon: storage },
    { name: "Graphic Card", icon: graphic },
    { name: "Televisions", icon: televisions },
    { name: "Smartwatch", icon: smartwatch },
    { name: "Monitors", icon: monitors },
    { name: "Game", icon: game },
    { name: "Storage (SSD)", icon: storage },
    { name: "Graphic Card", icon: graphic },
    { name: "Televisions", icon: televisions },
    { name: "Smartwatch", icon: smartwatch },
    { name: "Monitors", icon: monitors },
   

    
];
export const FEATURES = [
    { icon: delivery, title: "EXPRESS Delivery", desc: "Order Now" },
    { icon: returnIcon, title: "Easy Return", desc: "30 days return" },
    { icon: support, title: "24/7 Support", desc: "Premium Services" },
    { icon: warranty, title: "Premium Warranty", desc: "Up to 2 years" },
    { icon: gift, title: "Best Special Gift", desc: "For Order" },
];

export const heroData = [
    {
        title: 'Where Tinkerers Bring Ideas Alive',
        desc:
            'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        img: heroImg,
    },
    {
        title: 'Where Tinkerers Bring Ideas Alive',
        desc:
            'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        img: heroImg,
    },

];
export const POPULAR_DATA = [
    {
        title: "Sensors & Modules",
        image: sensor,
        bg: "bg-[#D5E8FF]",
    },
    {
        title: "Custom PC Parts",
        image: pcparts,
        bg: "bg-[#EEF4FB]",
    },
    {
        title: "DIY Tools",
        image: tools ,
        bg: "bg-[#E5E4E2]",
    },
    {
        title: "Cables & Connectors",
        image: cables,
        bg: "bg-[#EEF4FB]",
    },
    {
        title: "Gaming Peripherals",
        image: controller,
        bg: "bg-[#E5E4E2]",
    },
    {
        image: kits,
        bg: "bg-[#D5E8FF]",
    },
];
export const bestsellers = [
    {
        name: "Vortex Gaming PC",
        desc: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        image: pc,
        color: "bg-[#E5E4E2]", 
    },
    {
        name: "D-Link ADSL Wireless Router DSL2790U",
        desc: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        image: router,
        color: "bg-[#EEF4FB]",
    },
    {
        name: "Gaming Chair",
        desc: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        image: chair,
        color: "bg-[#E5E4E2]",
    },
    {
        name: "D-Link ADSL Wireless Router DSL2790U",
        desc: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        image: router,
        color: "bg-[#EEF4FB]",
    },
    {
        name: "Gaming Chair",
        desc: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        image: chair,
        color: "bg-[#E5E4E2]",
    },
];
  
export const CLIENT_DATA = [
    {
        icon :Icon,
        name: "William Gate",
        role: "CEO",
        message:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",
        image: man,
        stars: 5,
    },
    {
        icon: Icon,
        name: "Darrell Steward",
        role: "Manager",
        message:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",

        image: girl,
        stars: 5,
    },
    {
        icon: Icon,
        name: "William Gate",
        role: "CEO",
        message:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",
        image: man,
        stars: 5,
    },
];
export const blogCard = [
    {
        title: "How to Build a Mini NAS",
        description: "Learn to build your own network storage system with simple components.",
        linkText: "Read Guide ",
        image: blogImg1,
        bgColor: "bg-[#E5E4E2]",
    },
    {
        title: "5 Tools Every Maker Should Own",
        description: "The essential toolkit for every DIY electronics enthusiast.",
        linkText: "Read Article ",
        image: blogImg2,
        bgColor: "bg-[#EEF4FB]",
    },
];
export const navItems = [
    { label: "Categories", dropdown: false },
    { label: "PC Products", dropdown: true },
    { label: "Services", dropdown: true },
    { label: "Support", dropdown: true },
    { label: "About", dropdown: false },
    { label: "Blog", dropdown: false },
    { label: "Contact", dropdown: false },
];
  
export const products = [
    {
        id: 1,
        title: "NZXT H510 Elite PC Case",
        description: "Tempered glass case with clean cable management and optimized airflow.",
        price: "$249.99",
        image: ac2, // replace with your path
        rating: 4,
    },
    {
        id: 2,
        title: "MSI GeForce RTX 4070 GPU",
        description: "Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.",
        price: "$349.99",
        image: ac1, // replace with your path
        rating: 5,
    },
    {
        id: 3,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$259.99",
        image: ac, // replace with your path
        rating: 5,
    },
  ];