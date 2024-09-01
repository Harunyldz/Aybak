import React, { useState } from "react";
import Modal from "react-modal";
import "./Belgeler.css";

import belge1 from "../../assets/belgeler/belge1.jpg";
import belge2 from "../../assets/belgeler/belge2.jpg";
import belge3 from "../../assets/belgeler/belge3.jpg";
import belge4 from "../../assets/belgeler/belge4.jpg";

import { CgClose } from "react-icons/cg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Belgeler = () => {

  const { t } = useTranslation();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const belgeler = [belge1, belge2, belge3, belge4];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPosition(0)
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % belgeler.length);
    setPosition(50);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + belgeler.length) % belgeler.length
    );
    setPosition(-50);
  };

  return (
    <div className="belgeler-wrapper">
      <div className="belgeler-container">
        <header>
          <h1> {t("belge")}</h1>
        </header>
        <main>
          <p>
            <span>{t("belge-title")}</span>
            {t("belge-text")}
          </p>
          <section className="belgeler">
            {belgeler.map((belge, index) => (
              <div
                key={index}
                className="belge"
                onClick={() => openModal(index)}
              >
                <img src={belge} alt={`Belge ${index + 1}`} />
              </div>
            ))}
          </section>
        </main>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Belge Görüntüle"
          overlayClassName="ReactModal__Overlay"
          className="ReactModal__Content"
        >
          <i className="close-icon" onClick={closeModal}>
            <CgClose />
          </i>
          <motion.div
            key={selectedIndex}
            className="modal-image-wrapper"
            initial={{ x: position }}
            animate={{ x: 0 }}
            exit={{ x: -position }}
            transition={{ duration: 0.5 }}
          >
            <img src={belgeler[selectedIndex]} alt="Selected" />
          </motion.div>
          {selectedIndex !== belgeler.length - 1 && (
            <i className="right-icon" onClick={nextImage}>
              <FaChevronRight />
            </i>
          )}
          {selectedIndex !== 0 && (
            <i className="left-icon" onClick={prevImage}>
              <FaChevronLeft />
            </i>
          )}
          <span>{`${selectedIndex + 1}/${belgeler.length}`}</span>
        </Modal>
      </div>
    </div>
  );
};

export default Belgeler;
