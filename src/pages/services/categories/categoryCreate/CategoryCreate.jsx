import { Link, useNavigate } from "react-router-dom";
import "./categoryCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import api from "../../../../api/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import NavButton from "../../../../ui/navButton/NavButton";

const CategoryCreate = () => {
  const [az_name, setAz_name] = useState("");
  const [en_name, setEn_name] = useState("");
  const [ru_name, setRu_name] = useState("");

  const navigate = useNavigate();

  const createCategory = async () => {
    try {
      await api.post("catalog-categories ", {az_name, en_name, ru_name});
      navigate("/categories ");
      toast.success("Kategoriya uğurla yaradıldı");
    } catch (error) {
      toast.error("Kategoriya yaratmaq alınmadı");
    }
  };

  const mutation = useMutation(createCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="categoryCreate">
      <div className="insideCategory">
        <div className="categoryHeader">
          <h4>Yeni kategori</h4>
          <NavButton toNavigate={-1}>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
        </div>
        <div className="langBoxes">
          <form onSubmit={handleSubmit}>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Kateqoriya adı</label>
                <textarea
                  id="azText"
                  value={az_name}
                  onChange={(e) => setAz_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Category name</label>
                <textarea
                  id="enText"
                  value={en_name}
                  onChange={(e) => setEn_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Название категории</label>
                <textarea
                  id="ruText"
                  value={ru_name}
                  onChange={(e) => setRu_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="addBtn">
              <button type="submit">Əlavə et</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
