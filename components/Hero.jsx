import Image from "next/image";
import banner from "../public/images/banner.jpg"
const Hero = () => {
  return <Image src={banner} width={10000} height={3000} />
};

export default Hero;
