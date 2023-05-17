import React from 'react';
import { createContext, useState } from "react";
// import Mobiles from "../ProductPages/Mobiles";

export const store=createContext();

const ApiFile=(props)=>{
    const [count,setcount]=useState([]);

    const [Data,setData]=useState([
     {
            "id": 1,
            "catagory": "Accessories",
            "name": "Apple AirPod Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/OIP.rCa0uNacMHycnjGbabrRoAAAAA?pid=ImgDet&rs=1",
            "price": 18000,
            "oprice": "₹20,499"   
        },
        {
            "id": 2,
            "catagory": "Accessories",
            "name": "Apple AirPod 2nd Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/OIP.qwnzFTbs42lNtXQiB9q0hgAAAA?pid=ImgDet&w=400&h=397&rs=1",
            "price": 15000,
            "oprice": "₹17,499"   
        },
        {
            "id": 3,
            "catagory": "Accessories",
            "name": "Apple AirPod Pro A2084",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/OIP.Sk3BAB5tiD8vpo5mU1Hv4QHaHz?pid=ImgDet&rs=1",
            "price": 20000,
            "oprice": "₹25,000"   
        },
        {
            "id": 4,
            "catagory": "Accessories",
            "name": "Apple AirPod 3rd Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://i.expansys.net/i/b/b363181-3.jpg",
            "price": 13000,
            "oprice": "₹14,500"   
        },
        {
            "id": 5,
            "catagory": "Accessories",
            "name": "Apple Watch Series 4",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/51deGDOsgbL._SL1000_.jpg",
            "price": 12500,
            "oprice": "₹15,000"   
        },
        {
            "id": 6,
            "catagory": "Accessories",
            "name": "Apple Watch Series 5",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71fp5ankbqL._SX522_.jpg",
            "price": 10000,
            "oprice": "₹12,499"   
        },
        {
            "id": 7,
            "catagory": "Accessories",
            "name": "Apple Watch Series 6",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://rukminim1.flixcart.com/image/800/900/cms-rpd-images/be2faba1bb6f4d0f9e35557ba64da795_1759bdade0b_image.jpeg?q=90",
            "price": 12000,
            "oprice": "₹13,500"   
        },
        {
            "id": 8,
            "catagory": "Accessories",
            "name": "Apple Watch Series 7",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1631661671000",
            "price": 11000,
            "oprice": "₹12,000"   
        },
        {
            "id": 9,
            "catagory": "Accessories",
            "name": "Apple Watch Series 3",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
            "price": 10000,
            "oprice": "₹11,499"   
        },
        {
            "id": 10,
            "catagory": "Accessories",
            "name": "Apple Watch Series 2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP746/alu-spacegray-nike.jpg",
            "price": 8000,
            "oprice": "₹8,499"   
        },
        {
            "id": 11,
            "catagory": "Accessories",
            "name": "Apple AirPods Max",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
            "price": 15000,
            "oprice": "₹17,500"   
        },
        {
            "id": 12,
            "catagory": "Accessories",
            "name": "Apple AirPods ",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://rukminim1.flixcart.com/image/612/612/kigbjbk0-0/headphone/n/z/m/mgyl3hn-a-apple-original-imafy8wb7tuduaf2.jpeg?q=70",
            "price": 13000,
            "oprice": "₹16,499"   
        },
        {
            "id": 13,
            "catagory": "Accessories",
            "name": "boAt Rockers 255 CSK",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/51hC6pU-gsL._SY355_.jpg",
            "price": 1200,
            "oprice": "₹1,499"   
        },
        {
            "id": 14,
            "catagory": "Accessories",
            "name": "boAt Rockers 450 Iron Man",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71PBWIL5H3L._SL1500_.jpg",
            "price": 1500,
            "oprice": "₹1,799"   
        },
        {
            "id": 15,
            "catagory": "Accessories",
            "name": "boAt Rockers 450 Black Panther",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://buy.guru/wp-content/uploads/2021/03/boAt-Rockerz-450-Pro-Bluetooth-On-Ear-Headphone-with-Mic.jpg",
            "price": 1500,
            "oprice": "₹1,700"   
        },
        {
            "id": 16,
            "catagory": "Accessories",
            "name": "boAt Rockers 450 Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/9/h/j/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.jpeg?q=70",
            "price": 1300,
            "oprice": "₹1,450"   
        },
        {
            "id": 17,
            "catagory": "Accessories",
            "name": "boAt Wave Lite",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/41qAgAkiXjL.jpg",
            "price": 1200,
            "oprice": "₹1,300"   
        },
        {
            "id": 18,
            "catagory": "Accessories",
            "name": "SanDisk 32GB 2.0",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://n2.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.jpg",
            "price": 499,
            "oprice": "₹600"   
        },
        {
            "id": 19,
            "catagory": "Accessories",
            "name": "SanDisk 32GB 3.0",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg",
            "price": 800,
            "oprice": "₹999"   
        },
        {
            "id": 20,
            "catagory": "Accessories",
            "name": "HP 32GB 3.0",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
            "price": 1000,
            "oprice": "₹1,200"   
        },
        {
            "id": 21,
            "catagory": "Accessories",
            "name": "HP 34GB 3.0",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
            "price": 1200,
            "oprice": "₹1,499"   
        },
        {
            "id": 22,
            "catagory": "Accessories",
            "name": "Jebra Microsoft",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/R.19b2cdd5bff83e0e68990a02bca96b47?rik=tE9RX4bsHm7JXg&riu=http%3a%2f%2fwww.actualidadhardware.com%2fwp-content%2fuploads%2f2015%2f02%2fJABRA-EVOLVE-80-MS-STEREO-unboxing-actualidad-hardware_023.jpg&ehk=BNwAUX48MVBDgKgVQnbFBcm3Bjr8dSBgwGCqvcyng3k%3d&risl=&pid=ImgRaw&r=0",
            "price": 5500,
            "oprice": "₹6,499"   
        },
        {
            "id": 23,
            "catagory": "Accessories",
            "name": "Mi Powerbank 20000mAh",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
            "price": 1100,
            "oprice": "₹1,700"   
        },
        {
            "id": 24,
            "catagory": "Accessories",
            "name": "Sony 10000mAh Powerbank ",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.grabfly.com/wp-content/uploads/2018/11/sony-cp-v10a-10000-mah-li-polymer-power-bank.jpg",
            "price": 1300,
            "oprice": "₹1,699"   
        },
        {
            "id": 25,
            "catagory": "Mobile",
            "name": "OnePlus 9",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
            "price": 22000,
            "oprice": "₹23,900"

        },
        {
            "id": 26,
            "catagory": "Mobile",
            "name": "OnePlus 10 Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
            "price": 19500,
            "oprice": "₹21,000"

        },
        {
            "id": 27,
            "catagory": "Mobile",
            "name": "OnePlus 10 R",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
            "price": 35000,
            "oprice": "₹38,499"

        },
        {
            "id": 28,
            "catagory": "Mobile",
            "name": "OnePlus Nord 2T",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            "price": 16500,
            "oprice": "₹19,000"

        },
        {
            "id": 29,
            "catagory": "Mobile",
            "name": "OnePlus Nord CE 2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
            "price": 23500,
            "oprice": "₹25,500"
        },
        {
            "id": 30,
            "catagory": "Mobile",
            "name": "Redmi Note 9 Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
            "price": 12500,
            "oprice": "₹13,500"
        },
        {
            "id": 31,
            "catagory": "Mobile",
            "name": "Redmi Note 10 Lite",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
            "price": 14500,
            "oprice": "₹16,000"
        },
        {
            "id": 32,
            "catagory": "Mobile",
            "name": "Redmi Note 10 Prime",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
            "price": 16000,
            "oprice": "₹17,500"
        },
        {
            "id": 33,
            "catagory": "Mobile",
            "name": "Redmi Note 11 Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
            "price": 17000,
            "oprice": "₹19,500"
        },
        {
            "id": 34,
            "catagory": "Mobile",
            "name": "Redmi Note 11",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            "price": 23500,
            "oprice": "₹25,500"
        },
        {
            "id": 35,
            "catagory": "Mobile",
            "name": "Samsung Galaxy A13 ",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
            "price": 14500,
            "oprice": "₹16,499"
        },
        {
            "id": 36,
            "catagory": "Mobile",
            "name": "Samsung Galaxy S20",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SS450_.jpg",
            "price": 20500,
            "oprice": "₹21,000"
        },
        {
            "id": 37,
            "catagory": "Mobile",
            "name": "Asus Zenfone 8",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
            "price": 15500,
            "oprice": "₹17,000"
        },
        {
            "id": 38,
            "catagory": "Mobile",
            "name": "Asus Zenfone 7",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
            "price": 15999,
            "oprice": "₹17,499"
        },
        {
            "id": 39,
            "catagory": "Mobile",
            "name": "Google Pixel 4 XL",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
            "price": 16000,
            "oprice": "₹18,000"
        },
        {
            "id": 40,
            "catagory": "Mobile",
            "name":   "Google Pixel 5",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
            "price": 17000,
            "oprice": "₹19,500"
        },
        {
            "id": 41,
            "catagory": "macbook",
            "name": "MacBook Air",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
            "price": 98000,
            "oprice": "₹1,02,499"   
        },
        {
            "id": 42,
            "catagory": "macbook",
            "name": "Apple MacBook Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
            "price": 92000,
            "oprice": "₹1,02,499"   
        },
        {
            "id": 43,
            "catagory": "macbook",
            "name": "Apple MacBook 12",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.cnet.com/a/img/resize/582394e3d3c2a8e0a066cc4d3a51be08665cd2de/2016/04/19/7ce2b064-00fe-4d9a-9a93-6e540c1be1a1/apple-macbook-2016-18.jpg?auto=webp&fit=crop&height=675&width=1200",
            "price": 68000,
            "oprice": "₹75,499"   
        },
        {
            "id": 44,
            "catagory": "macbook",
            "name": "Apple MacBook 11",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-mid-2014-13in-device.jpg",
            "price": 68000,
            "oprice": "₹72,499"   
        },
        {
            "id": 45,
            "catagory": "macbook",
            "name": "Apple MacBook Air 2020 ",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://techcart.com.au/wp-content/uploads/2021/04/53002-Apple-MacBook-Air-2020-MVH22-13.3-i5-512GB_8GB-Grey.jpg",
            "price": 91000,
            "oprice": "₹95,499"   
        },
        {
            "id": 46,
            "catagory": "macbook",
            "name": "Apple MacBook Pro 2019",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61SJu997CCL._SL1500_.jpg",
            "price": 82000,
            "oprice": "₹92,499"   
        },
        {
            "id": 47,
            "catagory": "macbook",
            "name": "Apple MacBook Air Gold",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/1:1/w_1348,h_1348,c_limit/macbookair3.jpg",
            "price": 78000,
            "oprice": "₹85,499"   
        },
        {
            "id": 48,
            "catagory": "macbook",
            "name": "Apple MacBook Air M2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.apple.com/in/macbook-air-m2/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg",
            "price": 75000,
            "oprice": "₹82,499"   
        },
        {
            "id": 49,
            "catagory": "laptop",
            "name": "Asus ROG Strix G17",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/81ahHX9wU1L._SL1500_.jpg",
            "price": 98000,
            "oprice": "₹1,02,499"   
        },
        {
            "id": 50,
            "catagory": "laptop",
            "name": "Asus ROG Strix G15",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1643650830/burfzegdrsl4lwkidnhy.png",
            "price": 92000,
            "oprice": "₹99,000"   
        },
        {
            "id": 51,
            "catagory": "laptop",
            "name": "Asus TUF Gamming A15",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
            "price": 82000,
            "oprice": "₹85,999"   
        },
        {
            "id": 52,
            "catagory": "laptop",
            "name": "Asus TUF Gaming F15",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/",
            "price": 95499,
            "oprice": "₹99,000"   
        },
        {
            "id": 53,
            "catagory": "laptop",
            "name": "HP Pavilion 15 12th Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61Lh64FYeQL._SL1500_.jpg",
            "price": 68000,
            "oprice": "₹72,999"   
        },
        {
            "id": 54,
            "catagory": "laptop",
            "name": "HP Pavilion 15 12th Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1643650830/burfzegdrsl4lwkidnhy.png",
            "price": 92000,
            "oprice": "₹99,000"   
        },
        {
            "id": 55,
            "catagory": "laptop",
            "name": "HP Pavilion Gamming",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://in-media.apjonlinecdn.com/catalog/product/4/8/48U95PA-1_T1656560885.png",
            "price": 62000,
            "oprice": "₹65,999"   
        },
        {
            "id": 56,
            "catagory": "laptop",
            "name": "HP Pavilion x360",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://in-media.apjonlinecdn.com/catalog/product/6/6/661W9PA-6_T1656563694.png",
            "price": 55499,
            "oprice": "₹60,000"   
        },
        {
            "id": 57,
            "catagory": "laptop",
            "name": "Lenevo Yoga C930",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://cdn.vox-cdn.com/thumbor/hGJBYTqCwxAFU4c3XHf8giClI3A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12565155/vpavic_180712_2898_yoga_c930_0078.jpg",
            "price": 48000,
            "oprice": "₹49,499"   
        },
        {
            "id": 58,
            "catagory": "laptop",
            "name": "Lenevo ThinkPad X1",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71krmFgx5pL._SL1500_.jpg",
            "price": 72000,
            "oprice": "₹79,000"   
        },
        {
            "id": 59,
            "catagory": "laptop",
            "name": "Dell Latitute 13",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,0&resMode=sharp2&size=3337,2417",
            "price": 42000,
            "oprice": "₹45,999"   
        },
        {
            "id": 60,
            "catagory": "laptop",
            "name": "Dell Inspiron 7620",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://cdn1.smartprix.com/rx-iXMi3TNHD-w1200-h1200/XMi3TNHD.jpg",
            "price": 55499,
            "oprice": "₹59,000"   
        },
        {
            "id": 61,
            "catagory": "Ipad",
            "name": "Ipad Air 5th Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Air-10-9-Inch-WiFi%20-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation/Apple-IPad-Air-10-9-Inch-WiFi-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation.jpg",
            "price": 54900,
            "oprice": "₹56,900"
        },
        {
            "id": 62,
            "catagory": "Ipad",
            "name": "Ipad Air A14",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71SAHzzQqkL._SY450_.jpg",
            "price": 65500,
            "oprice": "₹67,900"
        },
        {
            "id": 63,
            "catagory": "Ipad",
            "name": "Ipad Air 2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://merchants.infishopper.com/content/images/thumbs/0163509_ipad-air-2-64gb-4g_450.jpeg",
            "price": 50500,
            "oprice": "₹60,000"
        },
        {
            "id": 64,
            "catagory": "Ipad",
            "name": "Ipad Air 3rd Gen",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/61pKdiWVerL._AC_SS450_.jpg",
            "price": 58900,
            "oprice": "₹62,900"
        },
        {
            "id": 65,
            "catagory": "Ipad",
            "name": "Ipad 11 Pro",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
            "price": 60500,
            "oprice": "₹63,000"
        },
        {
            "id": 66,
            "catagory": "Ipad",
            "name": "Ipad Pro 10",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
            "price": 75000,
            "oprice": "₹82,499"
        },
        {
            "id": 67,
            "catagory": "Ipad",
            "name": "Ipad Pro M1",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg",
            "price": 175500,
            "oprice": "₹1,83,000"
        },
        {
            "id": 68,
            "catagory": "Ipad",
            "name": "Ipad Pro 10.5 Inch.",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-10-5-in/ipad-pro-10-5-in-space-gray.jpg",
            "price": 60000,
            "oprice": "₹67,900"
        },
        {
            "id": 69,
            "catagory": "Telivision",
            "name": "OnePlus(50inch)Y-Series4K Ultra HD",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/81I5oICiIzL._SL1500_.jpg",
            "price": 32000,
            "oprice": "₹45000"
        },
        {
            "id": 70,
            "catagory": "Telivision",
            "name": "Xiaomi Mi TV P1 32 inch ",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://cdn.webshopapp.com/shops/256009/files/374440364/450x450x2/xiaomi-xiaomi-mi-tv-p1-32-inch.jpg",
            "price": 39000,
            "oprice": "₹49000"
        },
        {
            "id": 71,
            "catagory": "Telivision",
            "name": "TCL 43",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://instorestatic.tcl.com/media/catalog/product/cache/777512b053c40d884a7f7ea362da8a02/4/3/43__1_1.png",
            "price": 25000,
            "oprice": "₹39000"
        },
        {
            "id": 72,
            "catagory": "Telivision",
            "name": "Samsung 80 cm (32 Inches) LED Smart TV(Glossy Black)",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://m.media-amazon.com/images/I/71a4ZQNqTiL._SL1500_.jpg",
            "price": 13000,
            "oprice": "₹20000"
        },
        {
            "id": 73,
            "catagory": "Telivision",
            "name": "LG UQ75 55 (139cm) 4K UHD Smart TV | WebOS | Active HDR",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-3.jpg",
            "price": 46000,
            "oprice": "₹50000"
        },
        {
            "id": 74,
            "catagory": "Telivision",
            "name": "Hitachi 58 Inch 58HK6200U Smart 4K UHD",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://media.4rgos.it/i/Argos/9517453_R_Z001A?w=750&h=440&qlt=70",
            "price": 49000,
            "oprice": "₹55000"
        },
        {
            "id": 75,
            "catagory": "Telivision",
            "name": "Apple TV 4K and HD",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://help.apple.com/assets/63BF30F50893BD4F810A0C4B/63BF31000893BD4F810A0C71/en_GB/1b5434153a41d19410076c34a3a8efd5.png",
            "price": 50000,
            "oprice": "₹55000"
        },
        {
            "id": 76,
            "catagory": "Ipad",
            "name": "Apple Ipad 2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/R.9d9bbd6c487507d17d3d5e6619afab2f?rik=0MjTLeeIZXF%2fkg&riu=http%3a%2f%2fareteit.com%2fwp-content%2fuploads%2f2014%2f12%2fipad.jpg&ehk=tNpb4p2eOHomZjcPIvlduc%2bNR0OGYSdYhTRGTEZCME4%3d&risl=&pid=ImgRaw&r=0",
            "price": 14000,
            "oprice": "₹18,499" 
        },
        {
            "id": 77,
            "catagory": "Mobile",
            "name": "Nokia 2",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://sendmyrepair.com/wp-content/uploads/nokia-21.jpg",
            "price": 15500,
            "oprice": "₹16,499"
        },
        {
            "id": 78,
            "catagory": "Mobile",
            "name": "Nokia 1.4",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/OIP.G2Zw-D-aViyVFCTA75H3DgHaHa?pid=ImgDet&w=500&h=500&rs=1",
            "price": 10500,
            "oprice": "₹12,499"
        },
        {
            "id": 79,
            "catagory": "macbook",
            "name": "Apple MacBook Air",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.technipages.com/wp-content/uploads/2019/04/macbook-air.jpg",
            "price": 21000,
            "oprice": "₹30,499"
        },
        {
            "id": 80,
            "catagory": "Telivision",
            "name": "Samsung Tv Curved",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://www.dvdoverseas.com/resize/Shared/Images/Product/Samsung-UA55KU7350-55-Curved-1080p-SMART-WiFi-PAL-NTSC-LED-TV/LC-S55U7350C-800x800.jpg?bw=500&bh=500",
            "price": 49000,
            "oprice": "₹55000"
        },
        {
            "id": 81,
            "catagory": "Telivision",
            "name": "Samsung 45 inch 4K Smart Tv",
            "ratting": "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            "image": "https://th.bing.com/th/id/OIP.t6FQsL3ntKtlIvQK1VwhfgHaHa?pid=ImgDet&rs=1",
            "price": 40000,
            "oprice": "₹50000"
        },
    ]);
    console.log(Data);
    return(
    <store.Provider value={[Data,setData,count,setcount]}>
        {props.children}
        {/* <Mobiles /> */}
    </store.Provider>
   )
}

export default ApiFile;