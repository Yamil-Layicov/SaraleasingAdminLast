import { useNavigate } from "react-router-dom";
import "./productCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import api from "../../../../api/posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useCategories } from "../../categories/useCategories";
import axios from "axios";
import NavButton from "../../../../ui/navButton/NavButton";

const ProductCreate = () => {

  const [name, setName] = useState([]);
  const [az_description, setAz_description] = useState([]);
  const [en_description, setEn_description] = useState([]);
  const [ru_description, setRu_description] = useState([]);
  const [category_id, setCategory_id] = useState();

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const navigate = useNavigate();
  const { isLoading, catalogCategories } = useCategories();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("az_description", az_description);
      formData.append("ru_description", ru_description);
      formData.append("en_description", en_description);
      formData.append("name", name);
      formData.append("category_id", category_id);
      formData.append("image", image);

      const response = await axios.post("https://api.saraleasing.az/api/catalogs", formData);

      if (response) {
        toast.success("elave olundu");
        navigate(-1);
      }
    } catch (error) {
      toast.error("xeta bas verdi");
      console.log(error);
    }
  };

  // const mutation = useMutation(handleUpload);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   mutation.mutate();
  // };

  return (
    <>
      <div className="adminSlider">
        <div className="insideSlider">
          <div className="sliderHeader">
            <h4>Yeni məhsul</h4>
            <NavButton toNavigate={-1}>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
          </div>
          <div className="langBoxes">
            <form onSubmit={handleUpload}>
              <div className="imageFile">
                <div className="logoBox">
                  <label htmlFor="logo">
                    <div className="logo">
                      <span>
                        <IoCloudUploadOutline />{" "}
                      </span>
                      <span className="text">Şəkil</span>
                    </div>
                    <img src={previousImage || image} alt="" />
                  </label>
                  <input
                    id="logo"
                    name="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </div>
              </div>
              <div className="catalogCategory">
                <div className="categoryBox">
                  <label>Kategoriyalar</label>
                  <select
                    value={category_id || ""}
                    onChange={(e) => setCategory_id(e.target.value)}
                  >
                    <option value="" disabled>
                      Kategoriya seçin
                    </option>
                    {catalogCategories?.data?.data?.map((category) => (
                      <option key={category?.id} value={category?.id}>
                        {category?.az_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="productNameBox">
                  <label htmlFor="">Məhsul adı</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
              </div>
              <div className="formBoxes">
                <div className="formBox">
                  <h6>Az dilində</h6>
                  <label htmlFor="azText">Təsvir</label>
                  <textarea
                    id="azText"
                    value={az_description}
                    onChange={(e) => setAz_description(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>English</h6>
                  <label htmlFor="enText">Description</label>
                  <textarea
                    id="enText"
                    value={en_description}
                    onChange={(e) => setEn_description(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>Русский</h6>
                  <label htmlFor="ruText">Описание</label>
                  <textarea
                    id="ruText"
                    value={ru_description}
                    onChange={(e) => setRu_description(e.target.value)}
                    cols="40"
                    rows="6"
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
    </>
  );
};

export default ProductCreate;
