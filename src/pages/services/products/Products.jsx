import "./products.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../api/posts";
import { useState } from "react";
import TruncatedTextv2 from "../../../helpers/TrunctedTextv2.jsx";
import ConfirmModal from "../../../ui/corfirmModal/ConfirmModal.jsx";
import { useProducts } from "./useProducts.js";
import toast from "react-hot-toast";
import NavButton from "../../../ui/navButton/NavButton.jsx";

const AdminSlider = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { isLoading, catalogs } = useProducts();

  

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setConfirmationVisible(true);
  };

  const handleConfirmDelete = () => {
    mutation.mutate(selectedItemId);
    setConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    setSelectedItemId(null);
    setConfirmationVisible(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.post(`catalogs/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["catalogs"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="adminSlider">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Məhsullar</h4>
          <NavButton toNavigate="yeni">
            <span>+</span>
            <span>Yeni</span>
          </NavButton>
        </div>
        <table>
          <thead>
            <tr>
              <th className="idTh">#</th>
              <th className="imgTh">Şəkil</th>
              <th>Kateqoriya</th>
              <th>Məhsul adı</th>
              <th>Təsvir</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {catalogs?.data?.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="imgsTd">
                  <img src={singleData.image} alt="" />
                </td>
                <td className="contentTd">{singleData?.category?.az_name}</td>
                <td className="contentTd">{singleData.name}</td>
                <td className="contentTd">
                  {TruncatedTextv2(singleData.az_description, 80)}
                </td>
                <td className="actionBtnsTd">
                  <div className="actionBtns">
                    <button onClick={() => handleEdit(singleData.id)}>
                      <BiEditAlt />
                    </button>
                    <button onClick={() => handleDelete(singleData.id)}>
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {confirmationVisible && (
          <ConfirmModal
            title={"Sliderı"}
            handleConfirmDelete={handleConfirmDelete}
            handleCancelDelete={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AdminSlider;
