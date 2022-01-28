import Image from "next/image";
import banner from "../public/images/banner.jpg"
import styles from "./img.module.css"
const Hero = () => {

  return (
    <div>
      < Image className={styles.Img} src={banner} height={42000} width={100000}/>
    </div>
   
  )

};

export default Hero;
