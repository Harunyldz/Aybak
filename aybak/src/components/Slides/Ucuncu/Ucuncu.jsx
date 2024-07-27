import "./Ucuncu.css"
import odenay from "../../../assets/odenay.jpg"
import aybak  from "../../../assets/slider/foto2.jpg"
import ekran from "../../../assets/ekran.png"

const Ucuncu = () => {
  return (
    <div className='ucuncu'>
      <div className="ucuncu-box">
        {/* <div className="ucuncu-img-box">
          <img src={odenay} alt="" />
        </div> */}
        <div className="ucuncu-img-box">
          <img src={ekran} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ucuncu