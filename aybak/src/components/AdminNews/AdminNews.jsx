import { useEffect, useState } from "react";
import "./AdminNews.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
// import { news as initialNews } from "../../utils/News";
import defaultImage from "../../assets/image.png";
import { motion } from "framer-motion";
import Modal from "react-modal";

import { supabase } from "../../utils/createClient";

const AdminNews = () => {
  const [addNews, setAddNews] = useState(false);
  const [news, setNews] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editNews, setEditNews] = useState(null);

  const fetchNews = async () => {
    const { data } = await supabase.from("news").select("*");
    setNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const openModal = (newsItem) => {
    setEditNews(newsItem);
    setTitle(newsItem.title);
    setText(newsItem.text);
    setImage(null); // Modal açıldığında resmi sıfırla
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Modal kapatıldığında state'leri temizle
    setEditNews(null);
    setTitle("");
    setText("");
    setImage(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedNews = news.map((item) =>
      item.id === editNews.id
        ? {
            ...item,
            title,
            text,
            image: image ? URL.createObjectURL(image) : item.image, // Yeni resim URL'si
          }
        : item
    );
    setNews(updatedNews);
    closeModal();
  };

  const handleDelete = (id) => {
    const filteredNews = news.filter((item) => item.id !== id);
    setNews(filteredNews);
  };

  const handleCloseAddNews = () => {
    setAddNews(!addNews);
    setText("");
    setImage(null);
    setTitle("");
  };

  return (
    <div className="adminNews">
      <header className="adminNews-header">
        <span onClick={() => setAddNews(!addNews)}>
          Yeni Duyuru Ekle{" "}
          <i>
            <FaPlus />
          </i>
        </span>
      </header>
      {addNews && (
        <motion.section
          className="addNews"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <form className="addNews-form">
            <div className="form-sol">
              <div className="form-item">
                <p>Resim Ekle</p>
                <label htmlFor="image">
                  <img
                    src={image ? URL.createObjectURL(image) : defaultImage}
                    alt=""
                  />
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                  required
                />
              </div>
            </div>
            <div className="form-sag">
              <div className="form-item">
                <p>Başlık Ekle</p>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  required
                />
              </div>
              <div className="form-item">
                <p>Metin Ekle</p>
                <textarea
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  name="text"
                  rows="6"
                  placeholder="Yazı ekle"
                  required
                ></textarea>
              </div>
              <div className="addNews-btns">
                <button className="add-btn">Ekle</button>
                <button className="cancel-btn" onClick={handleCloseAddNews}>
                  İptal
                </button>
              </div>
            </div>
          </form>
        </motion.section>
      )}
      <main>
        <table className="details-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Görsel</th>
              <th>Başlık</th>
              <th>Metin</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newItem, index) => (
              <tr key={newItem.id}>
                <td>{index + 1}</td>
                <td className="details-img">
                  <img src={newItem.image ? newItem.image : ""} alt="" />
                </td>
                <td className="details-title">{newItem.title}</td>
                <td className="details-text">{newItem.text}</td>
                <td className="details-icons">
                  <i onClick={() => openModal(newItem)} className="edit">
                    <GrEdit />
                    <span>Düzenle</span>
                  </i>
                  <i
                    onClick={() => handleDelete(newItem.id)}
                    className="delete"
                  >
                    <RiDeleteBin6Fill />
                    <span>Sil</span>
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Duyuru Düzenle"
        overlayClassName="adminModal-overlay"
        className="adminModal"
      >
        <div className="modal-content">
          <h2>Duyuru Düzenle</h2>
          <hr />
          {editNews && (
            <form onSubmit={handleEditSubmit} className="editNews-form">
              <div className="form-item form-image">
                <p>Resim Ekle</p>
                <label htmlFor="editImage">
                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : editNews.image || defaultImage
                    }
                    alt=""
                  />
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="editImage"
                  hidden
                />
              </div>
              <div className="form-item">
                <p>Başlık Ekle</p>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title || editNews.title}
                  type="text"
                  required
                />
              </div>
              <div className="form-item">
                <p>Metin Ekle</p>
                <textarea
                  onChange={(e) => setText(e.target.value)}
                  value={text || editNews.text}
                  name="text"
                  rows="6"
                  placeholder="Yazı ekle"
                  required
                ></textarea>
              </div>
              <div className="modal-btns">
                <button type="submit" className="editNews-btn">
                  Kaydet
                </button>
                <button onClick={closeModal} className="modal-close-btn">
                  İptal
                </button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AdminNews;
