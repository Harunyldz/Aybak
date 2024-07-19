import React, { useState } from "react";
import Modal from "react-modal";
import "./Belgeler.css";

import belge1 from "../../assets/belgeler/belge1.jpg";
import belge2 from "../../assets/belgeler/belge2.jpg";
import belge3 from "../../assets/belgeler/belge3.jpg";
import belge4 from "../../assets/belgeler/belge4.jpg";

import { CgClose } from "react-icons/cg";

Modal.setAppElement("#root"); // Erişilebilirlik için gereklidir

const Belgeler = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="belgeler-wrapper">
      <div className="belgeler-container">
        <header>
          <h1>Belgelerimiz</h1>
        </header>
        <main>
          <p>
            <span>Aybak Gıda San. Tic. Ltd. Şti.</span> olarak, kaliteye ve
            güvenilirliğe verdiğimiz önemin bir göstergesi olarak sahip
            olduğumuz belgelerimizi sizlerle paylaşmaktan gurur duyuyoruz.{" "}
            <br />
            Uzun yıllardır sektördeki konumumuzu koruyabilmek ve müşterilerimize
            en iyi hizmeti sunabilmek adına belgelerimiz ve sertifikalarımızla
            üretim ve dağıtım süreçlerimizi sürekli olarak iyileştiriyoruz.{" "}
            <br /> Siz değerli müşterilerimize en kaliteli ve güvenilir ürünleri
            sunmak için çalışmalarımıza aralıksız devam ediyoruz.
          </p>
          <section className="belgeler">
            <div className="belge" onClick={() => openModal(belge1)}>
              <img src={belge1} alt="Belge 1" />
            </div>
            <div className="belge" onClick={() => openModal(belge2)}>
              <img src={belge2} alt="Belge 2" />
            </div>
            <div className="belge" onClick={() => openModal(belge3)}>
              <img src={belge3} alt="Belge 3" />
            </div>
            <div className="belge" onClick={() => openModal(belge4)}>
              <img src={belge4} alt="Belge 4" />
            </div>
          </section>
        </main>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Belge Görüntüle"
          overlayClassName="ReactModal__Overlay"
          className="ReactModal__Content"
        >
          <i onClick={closeModal}><CgClose /></i>
          <img src={selectedImage} alt="Selected"  />
        </Modal>
      </div>
    </div>
  );
};

export default Belgeler;
