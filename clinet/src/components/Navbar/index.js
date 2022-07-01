import {MdOutlineLocalHotel,MdAttractions} from "react-icons/md"
import {IoAirplane} from "react-icons/io5"
import {AiFillCar} from "react-icons/ai"
import {RiTaxiFill} from "react-icons/ri"
export const menu =[
    {
        id:1,
        title:"stays",
        icon:<MdOutlineLocalHotel/>,
        url:"/"
    },
    {
        id:2,
        title:"Flights",
        icon:<IoAirplane/>,
        url:"/"
    },
    {
        id:3,
        title:"Car Rentals",
        icon:<AiFillCar/>,
        url:"/"
    },
    {
        id:4,
        title:"Attractions",
        icon:<MdAttractions/>,
        url:"/"
    },
    {
        id:5,
        title:"Airpot taxis",
        icon:<RiTaxiFill/>,
        url:"/"
    },
]