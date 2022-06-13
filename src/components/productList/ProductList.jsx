import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Ss from "../../img/ss.png";
import Ss2 from "../../img/ss2.png";
import Video from "../../img/video2.mp4";
import Video3 from "../../img/video3.mp4";
import VideoPlayer from 'react-video-js-player'
const ProductList = () => {
  const videoSrc=Video;
  const video3Src=Video3;
  const poster=Ss
  const poster3=Ss2
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
        I work on builds and maintenance for a variety of client sites for my job during the day, and at night you can also find me doing some freelance work on the side taking on my clients' sites (made in a variety of site builders/platforms), giving them a design-focused revamp, and adding some custom features and functionality to make them shine! I've always been drawn to both the creative and analytical side of development, so I'm so thankful to be able to do both with the foundation I built during bootcamp.
        </p>
        <h1><b>Some of My projets are:</b></h1>
      </div>
      
      
      <div className="pl-list">
        <div className="v1"> <VideoPlayer 
          src={videoSrc}
          poster={poster}
          width='420'
          height='320'
          
        /></div>
       
        <div className="v2"><VideoPlayer 
          src={video3Src}
          poster={poster3}
          width='420'
          height='320'
          
        /></div>
        
        
        {/* <img src={Ss} alt="" />
        <img src={Ss2} alt="" /> */}
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
      </div>
    </div>
  );
};

export default ProductList;
