import "./BakliyatSaglik.css";
import { productInfo } from "../../utils/Products";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transformString } from "../../utils/transformString";

const BakliyatSaglik = () => {
  return (
    <div className="bakliyat-wrapper">
      <header className="bakliyat-header">
        <h1>Bakliyat ve Sağlık</h1>
      </header>
      <section className="bakliyat-text">
        <h2>Bakliyatların sağlığımız için önemi</h2>
        <p>
          Bakliyatlar, sağlıklı bir beslenme düzeninin vazgeçilmez parçalarıdır
          ve birçok fayda sunar. Öncelikle, bakliyatlar protein, lif, vitamin ve
          mineral açısından son derece zengindir. Özellikle B vitaminleri,
          demir, magnezyum ve çinko gibi mineraller bakımından yüksektir. Bu
          besinler, genel sağlık ve enerji seviyelerini destekler. Özellikle
          vejetaryen ve veganlar için harika bir protein kaynağı olan
          bakliyatlar, kas gelişimi ve onarımı için gerekli olan temel amino
          asitleri sağlar. Et tüketmeyenler için mükemmel bir alternatiftir.{" "}
          <br />
          Bakliyatlar, yüksek lif içeriği ile sindirim sisteminin sağlıklı
          çalışmasına yardımcı olur. Düzenli bakliyat tüketimi, kabızlık gibi
          sindirim sorunlarını önler ve bağırsak sağlığını destekler. Ayrıca,
          bakliyatların düşük yağ ve yüksek lif içeriği, kolesterol seviyelerini
          düşürmeye yardımcı olabilir. İçerdikleri antioksidanlar ve sağlıklı
          yağlar, kalp sağlığını korur ve kalp hastalığı riskini azaltır. Düşük
          glisemik indekse sahip olan bakliyatlar, kan şekerini dengede tutar ve
          insülin direncini azaltır. Diyabet riskini azaltmada önemli bir rol
          oynar ve mevcut diyabet yönetiminde faydalıdır. Lif ve protein
          açısından zengin olan bakliyatlar, tokluk hissini artırır ve aşırı
          yeme eğilimini azaltır.
        </p>
      </section>
      <section className="bakliyat-container">
        {productInfo.map((product) => (
          <figure key={product.id}>
            <div className="bakliyat-img">
              <img src={product.image} alt="" />
            </div>
            <figcaption>
              <h3>{product.title}</h3>
              <Link to={transformString(product.title)} className="bakliyat-icon">
                <FaChevronCircleRight />
              </Link>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};

export default BakliyatSaglik;
