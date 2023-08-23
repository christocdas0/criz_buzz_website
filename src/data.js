// Images for sliderItems Items
import shoppingGirlImage_1 from "./assets/landingPage/shopping_girl_1.png";
import shoppingGirlImage_2 from "./assets/landingPage/shopping_girl_2.png";
import shoppingGirlImage_3 from "./assets/landingPage/shopping_girl_3.png";
// images for categories items
import shirtStyleImg_1 from './assets/mens/shirt_red_2.jpg';
import longerwareImg_1 from './assets/womens/longerware_1.jpg';
import jacketImg_1 from './assets/womens/jacket_black_1.jpg';

// color for Product
const randomColors = ['red', 'green', 'blue', 'black', 'white'];
const randomSizes = ['small', 'medium', 'large', 'XL'];

export const sliderItems = [
  {
    id: 1,
    img: shoppingGirlImage_1,
    title: "SUMMER COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: shoppingGirlImage_2,
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: shoppingGirlImage_3,
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    img : shirtStyleImg_1,
    title: "MENS",
    cat : 'mens'
  },
  {
    id: 2,
    img: longerwareImg_1,
    title: "WOMENS",
    cat : 'womens'
  },
  {
    id: 3,
    img: jacketImg_1,
    title: "JACKETS",
    cat : 'jackets'
  },
];

export const popularProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    title: 'T-Shirt',
    desc: 'A vintage guitar-themed T-shirt',
    price: 2000,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 2,
    img: "https://mapsystemsindia.com/images/blog/a-white-background-makes-your-product-stand-out.webp",
    title: 'Product 2',
    desc: 'Description for Product 2',
    price: Math.floor(Math.random() * 5000) + 500,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 3,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    title: 'Product 3',
    desc: 'Description for Product 3',
    price: Math.floor(Math.random() * 8000) + 1000,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 4,
    img: "https://images.wondershare.com/pixcut/assets/blog/product-images-for-ecommerce-sitse-1.jpg",
    title: 'Product 4',
    desc: 'Description for Product 4',
    price: Math.floor(Math.random() * 3000) + 1000,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 5,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    title: 'Product 5',
    desc: 'Description for Product 5',
    price: Math.floor(Math.random() * 6000) + 1500,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    title: 'Product 6',
    desc: 'Description for Product 6',
    price: Math.floor(Math.random() * 4000) + 800,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wm5l5e7pSeYhdSpGpz7_CC6YcFbWmpQWVrjMiNenh86fk6jgQdaljbV_AoD7SwDx2lc&usqp=CAU",
    title: 'Product 7',
    desc: 'Description for Product 7',
    price: Math.floor(Math.random() * 7000) + 2000,
    color: ['red', 'green', 'blue', 'black'],
    size: ['small', 'medium', 'large']
  },
  {
    id: 8,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    title: 'Product 8',
    desc: 'Description for Product 8',
    price: Math.floor(Math.random() * 9000) + 2500,
    color: ['red', 'green', 'blue', 'black'],
    //size: [getRandomElementFromArray(randomSizes)]
    size: ['small', 'medium', 'large']
  }
];


