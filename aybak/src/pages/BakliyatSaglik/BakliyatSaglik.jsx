import "./BakliyatSaglik.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const BakliyatSaglik = ({ cart, index }) => {
    return (
        <motion.div
            className="cart"
            key={cart.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
        >
            <img src={cart.image} alt={cart.title} />
            <div className="content">
                <h3>{cart.title}</h3>
                <hr />
                <p>{cart.text}</p>
            </div>
            <Link to={cart.href} className="card-button-link">
                <button className="card-button">
                    İNCELE <FaArrowRight className="arrow-icon" />
                </button>
            </Link>
        </motion.div>
    );
};

export default BakliyatSaglik;
