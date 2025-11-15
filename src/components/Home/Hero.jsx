import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/ecommerce-2140603.jpg" },
  { url: "/ecommerce-3640321.jpg" }
];

const Hero = () => {
  return (
    <div className="p-10 flex justify-center">
      <SimpleImageSlider
        width={896}
        height={404}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Hero