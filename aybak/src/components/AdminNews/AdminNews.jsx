import { useEffect, useState } from "react";
import "./AdminNews.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import defaultImage from "../../assets/image.png";

import { motion } from "framer-motion";
import Modal from "react-modal";
import { supabase } from "../../utils/createClient";
import { toast } from "react-toastify";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const AdminNews = () => {
  const [addNews, setAddNews] = useState(false);
  const [news, setNews] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editNews, setEditNews] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const getPublicUrl = (path) => {
    return `${SUPABASE_URL}/storage/v1/object/public/news-images/${path}`;
  };

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase.from("news").select("*");
      if (error) throw error;

      const newsWithUrls = await Promise.all(
        data.map(async (newsItem) => {
          const publicURL = newsItem.image
            ? getPublicUrl(newsItem.image)
            : defaultImage;
          return { ...newsItem, image: publicURL };
        })
      );

      setNews(newsWithUrls);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleAddNews = async (e) => {
    e.preventDefault();
    const imageExt = image.name.split(".").pop();
    const imageName = `${Math.random()}.${imageExt}`;
    const imagePath = `${imageName}`;

    try {
      let imageUrl = "";

      if (image) {
        const { error } = await supabase.storage
          .from("news-images")
          .upload(imagePath, image);
        if (error) throw error;

        imageUrl = getPublicUrl(imagePath);
      }

      const { data: newNews, error: insertError } = await supabase
        .from("news")
        .insert({ title, text, image: imagePath })
        .select("*")
        .single();

      if (insertError) throw insertError;

      setNews([...news, { ...newNews, image: imageUrl }]);
      handleCloseAddNews();
      toast.info("Duyuru listeye eklendi", {
        theme: "colored",
      });
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  const openModal = (newsItem) => {
    setEditNews(newsItem);
    setTitle(newsItem.title);
    setText(newsItem.text);
    setImage(null);
    setIsOpen(true);

    if (newsItem.image) {
      setImageUrl(getPublicUrl(newsItem.image));
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditNews(null);
    setTitle("");
    setText("");
    setImage(null);
    setImageUrl("");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = editNews.image;
      let newImagePath = editNews.image;

      if (image) {
        // Yeni dosya adı oluşturma
        const imageExt = image.name.split(".").pop();
        const imageName = `${Math.random()}.${imageExt}`;
        newImagePath = imageName;

        // Eski resmi silme
        if (editNews.image) {
          const oldImagePath = editNews.image.split("/").pop();
          const { error: deleteError } = await supabase.storage
            .from("news-images")
            .remove([oldImagePath]);
          if (deleteError) throw deleteError;
        }

        // Yeni resmi yükleme
        const { error: uploadError } = await supabase.storage
          .from("news-images")
          .upload(newImagePath, image);
        if (uploadError) throw uploadError;

        // Yeni resim URL'sini oluşturma
        imageUrl = getPublicUrl(newImagePath);
      }

      // Veritabanında güncelleme
      const { data: updatedNews, error } = await supabase
        .from("news")
        .update({ title, text, image: newImagePath })
        .eq("id", editNews.id)
        .select("*")
        .single();

      fetchNews();
      toast.success(`Duyuru başarıyla güncellendi`, {
        theme: "colored",
      });
      if (error) throw error;

      // State'i güncelleme
      setNews(
        news.map((item) => (item.id === editNews.id ? updatedNews : item))
      );
      closeModal();
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };

  const handleDelete = async (id, imagePath) => {
    try {
      const { error: deleteNewsError } = await supabase
        .from("news")
        .delete()
        .eq("id", id);
      if (deleteNewsError) throw deleteNewsError;

      if (imagePath) {
        const { error: deleteImageError } = await supabase.storage
          .from("news-images")
          .remove([imagePath]);

        if (deleteImageError) throw deleteImageError;
      }
      toast.error("Duyuru başarıyla silindi", {
        theme: "colored",
      });
      setNews(news.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleCloseAddNews = () => {
    setAddNews(false);
    setTitle("");
    setText("");
    setImage(null);
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
          <form className="addNews-form" onSubmit={handleAddNews}>
            <div className="form-sol">
              <div className="form-item">
                <p>Resim Ekle</p>
                <label htmlFor="image">
                  <img
                    src={image ? URL.createObjectURL(image) : defaultImage}
                    alt="Preview"
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
                  rows="6"
                  placeholder="Yazı ekle"
                  required
                ></textarea>
              </div>
              <div className="addNews-btns">
                <button type="submit" className="add-btn">
                  Ekle
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseAddNews}
                >
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
                  <img
                    src={newItem.image || defaultImage}
                    alt={newItem.title || "Görsel"}
                  />
                </td>
                <td className="details-title">{newItem.title}</td>
                <td className="details-text">{newItem.text}</td>
                <td className="details-icons">
                  <i onClick={() => openModal(newItem)} className="edit">
                    <GrEdit />
                    <span>Düzenle</span>
                  </i>
                  <i
                    onClick={() =>
                      handleDelete(newItem.id, newItem.image?.split("/").pop())
                    }
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
                    src={editNews.image ? editNews.image : defaultImage}
                    alt="Preview"
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
                  rows="6"
                  placeholder="Yazı ekle"
                  required
                ></textarea>
              </div>
              <div className="modal-btns">
                <button type="submit" className="editNews-btn">
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="modal-close-btn"
                >
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
