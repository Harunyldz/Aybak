import "./Birinci.css";
import { motion } from "framer-motion";

import aybak from "../../../assets/slider/1.jpg";
import aybak2 from "../../../assets/slider/aybak-1.png";
import akbak from "../../../assets/slider/akbak-1.png";
import odenay from "../../../assets/slider/3.jpg";
import aybakMega from "../../../assets/slider/slider-mega.jpg";

const Birinci = () => {
  return (
    
      <div className="birinci">
        <motion.div
          className="birinci-box"
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="birinci-sol">
            <div className="birinci-sol-ust">
              <div className="birinci-img-box">
                <img src={aybak} alt="" />
              </div>
              <div className="birinci-img-box">
                <img src={aybak2} alt="" />
              </div>
            </div>
            <div className="birinci-sol-alt">
              <div className="birinci-img-box">
                <img src={akbak} alt="" />
              </div>
              <div className="birinci-img-box">
                <img src={odenay} alt="" />
              </div>
            </div>
          </div>
          <div className="birinci-sag">
            <img src={aybakMega} alt="" />
          </div>
        </motion.div>
      </div>
  );
};

export default Birinci;
