import game from "../assets/images/svg/game-icon.svg";
import storage from "../assets/images/svg/stroage-icon.svg";
import graphic from "../assets/images/svg/graphics-icon.svg";
import televisions from "../assets/images/svg/television.-icon.svg";
import smartwatch from "../assets/images/svg/smatchwatch-icon.svg";
import monitors from "../assets/images/svg/monitor-icon.svg";
import sensor from '../assets/images/png/close-up-computer.png'
import pcparts from "../assets/images/png/custom-pc.png"
import tools from "../assets/images/png/div-tools.png"
import cables from "../assets/images/png/cable-img.png"
import controller from '../assets/images/png/gaming-img.png'
import kits from '../assets/images/png/pi-kits.png'
import { SmallRating, HeartSvg, ShopSvg } from "./icon";
import bgImage from "../assets/images/png/header-img.png";
import pcImg from "../assets/images/png/image-Photoroom.png"
import routerImg from "../assets/images/png/computers-Photoroom.png"
import chairImg from '../assets/images/png/chair-png-Photoroom.png'
import userImg1 from "../assets/images/png/man-img.png"
import userImg2 from "../assets/images/png/girl-img.png"
import blogImg1 from "../assets/images/png/blog-img-1.png";
import blogImg2 from "../assets/images/png/blog-img-2.png";
import categorieImg1 from "../assets/images/png/close-up-computer.png"
import categorieImg2 from "../assets/images/png/custom-pc.png"
import categorieImg3 from "../assets/images/png/div-tools.png"
import categorieImg4 from "../assets/images/png/cable-img.png"
import categorieImg5 from '../assets/images/png/gaming-img.png'
import categorieImg6 from '../assets/images/png/pi-kits.png'
import delivery from "../assets/images/svg/delivery.svg";
import returnIcon from "../assets/images/svg/returnIcon.svg";
import support from "../assets/images/svg/support.svg";
import warranty from "../assets/images/svg/warranty.svg";
import gift from "../assets/images/svg/gift.svg";
import popularproduct1 from '../assets/images/png/popularproduct1.png'
import popularproduct2 from '../assets/images/png/popularproduct2.png'
import popularproduct3 from "../assets/images/png/popularproduct3.png"



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
]

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


export const PRODUCTS_DATA = [
    {
        id: 1,
        title: "NZXT H510 Elite PC Case",
        description: "Tempered glass case with clean cable management and optimized airflow.",
        price: "$249.99",
        image: popularproduct3,
        rating: 4,
    },
    {
        id: 2,
        title: "MSI GeForce RTX 4070 GPU",
        description: "Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.",
        price: "$349.99",
        image: popularproduct2,
        rating: 5,
    },
    {
        id: 3,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$259.99",
        image: popularproduct1,
        rating: 5,
    },
  ];



export const HERO_SLIDES = [
    {
        heading: 'Where Tinkerers Bring Ideas Alive',
        para: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        bgImg: bgImage,
    },
    {
        heading: 'Unleash Your Creativity',
        para: 'Find everything you need for your next big idea — all in one place.',
        bgImg: bgImage,
    },
    {
        heading: 'Build. Tinker. Repeat.',
        para: 'From pro hardware to DIY kits, we support all tech enthusiasts.',
        bgImg: bgImage,
    },
];

export const BESTSELLER_DATA = [
    {
        img: pcImg,
        title: "Vortex Gaming PC",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: routerImg,
        title: "D-Link ADSL Wireless Router DSL2790U",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: chairImg,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: pcImg,
        title: "Vortex Gaming PC",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: routerImg,
        title: "D-Link ADSL Wireless Router DSL2790U",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: chairImg,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: "$249.99",
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
];
export const TESTMONIAL_DATA = [
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    },
    {
        image: userImg2,
        heading: "Darrell Steward",
        work: "Manager"
    },
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    },
    {
        image: userImg2,
        heading: "Darrell Steward",
        work: "Manager"
    },
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    }
]

export const FEATURED_CATEGORIES_PRODUCTS = [
    {
        categorieName: 'Sensors & Modules',
        categorieImage: categorieImg1,
    },
    {
        categorieName: 'Custom PC Parts',
        categorieImg: categorieImg2
    },
    {
        categorieName: 'DIY Tools',
        categorieImg: categorieImg3
    },
    {
        categorieName: 'Cables & Connectors',
        categorieImg: categorieImg4
    },
    {
        categorieName: 'Gaming Peripherals',
        categorieImg: categorieImg5
    },
    {
        categorieName: 'Raspberry Pi Kits',
        categorieImg: categorieImg6
    },
]
export const BLOG_PAGE_DATA = [
    {
        heading: 'How to Build a Mini NAS',
        para: 'Learn to build your own network storage system with simple components.',
        button: 'Read Guide',
        blogPageImg: blogImg1,
        active: false

    },
    {
        heading: '5 Tools Every Maker Should Own',
        para: 'The essential toolkit for every DIY electronics enthusiast.',
        button: 'Read Guide',
        blogPageImg: blogImg2,
        active: false

    },
  
];



export const FEATURES_DATA = [
    { icon: delivery, title: "EXPRESS Delivery", desc: "Order Now" },
    { icon: returnIcon, title: "Easy Return", desc: "30 days return" },
    { icon: support, title: "24/7 Support", desc: "Premium Services" },
    { icon: warranty, title: "Premium Warranty", desc: "Up to 2 years" },
    { icon: gift, title: "Best Special Gift", desc: "For Order" },
];
