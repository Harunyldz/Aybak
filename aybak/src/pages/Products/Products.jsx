import "./Products.css";
import { products } from "../../utils/Products";
import { useState } from "react";
import { transformString } from "../../utils/transformString";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
    const [product, setProduct] = useState("All");

    const handleProductClick = (cateName) => {
        if (product === cateName) {
            setProduct("All");
        } else {
            setProduct(cateName);
        }
    };

    const urunler =
        product === "All"
            ? product
            : product.filter((item) => item.type === products);

    return (
        <div className="yemekler-wrapper">
            <img className="yemekler-img" src={img1} alt="" />
            <div className="yemekler-container">
                <header>
                    <h2>Aybak Ürünlerimizle Yapabileceğiniz Lezzetli Yemekler</h2>
                    <p>
                        Aybak Gıda olarak, kaliteli ve besleyici ürünlerimizle sofralarınıza
                        lezzet katıyoruz. Ürünlerimizle hazırlayabileceğiniz yemekler, hem
                        sağlıklı hem de pratik tarifler sunarak günlük beslenmenizi
                        zenginleştiriyor. İşte Aybak ürünleriyle yapabileceğiniz nefis yemek
                        önerileri
                    </p>
                </header>
                <menu>
                    {products.map((cate) => (
                        <figure
                            className={product === cate.name ? "active" : ""}
                            key={cate.id}
                            onClick={() => handleProductClick(cate.name)}
                        >
                            <img src={cate.image} alt="" />
                            <figcaption>{cate.name}</figcaption>
                        </figure>
                    ))}
                </menu>
                <main>
                    {urunler.map((urun) => (
                        <motion.figure
                            key={urun.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <div className="figure-img">
                                <img src={urun.image} alt={urun.title} />
                            </div>
                            <figcaption>
                                <h3>{urun.title}</h3>
                                <Link
                                    to={transformString(urun.title)}
                                    className="yemekler-btn"
                                >
                                    Nasıl Yapılır?
                                </Link>
                            </figcaption>
                        </motion.figure>
                    ))}
                </main>
            </div>
        </div>
    );
};
export default Products;