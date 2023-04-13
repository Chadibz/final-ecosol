import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const img0 = new URL("./IMG00.jpg", import.meta.url);
const img1  = new URL("./IMG11.jpg", import.meta.url);
const img2 = new URL("./IMG22.jpg", import.meta.url);
const img3 = new URL("./IMG33.jpg", import.meta.url);
const img4 = new URL("./IMG44.jpg", import.meta.url);


function MyCarousel() {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  return (
    <Carousel className="carousel" breakPoints={breakPoints} autoPlay>
      <div>
        <img src={img1} alt="tahche"></img>
      </div>
      <div>
        <img src={img2} alt="tahche"></img>
      </div>
      <div>
        <img src={img3} alt="tahche"></img>
      </div>
      <div>
        <img src={img4} alt="tahche"></img>
      </div>
      

    </Carousel>
  );
}
export default MyCarousel;
