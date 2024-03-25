import "./adminSlider.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../../api/posts";
import { useSliders } from "./useSliders.js";
import { useState } from "react";
import TruncatedTextv2 from "../../../helpers/TrunctedTextv2.jsx";
import ConfirmModal from "../../../ui/corfirmModal/ConfirmModal.jsx";
import NavButton from "../../../ui/navButton/NavButton.jsx";

const AdminSlider = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { isLoading, sliders } = useSliders();

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
      return api.post(`sliders/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["sliders"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="adminSlider">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Sliders</h4>
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
              <th>Məzmun</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {sliders?.data.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="imgsTd">
                  <img src={singleData.image} alt="" />
                </td>
                <td className="contentTd">
                  {TruncatedTextv2(singleData.az_text, 80)}
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
