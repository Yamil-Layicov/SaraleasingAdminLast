import "./news.scss";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from '../../api/posts';
import { useState } from "react";
import { useNews } from "./useNews.js";
import TruncatedTextv2 from "../../helpers/TrunctedTextv2.jsx";
import ConfirmModal from "../../ui/corfirmModal/ConfirmModal.jsx";
import NavButton from "../../ui/navButton/NavButton.jsx";


const News = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { isLoading, news } = useNews();


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
      return api.post(`news/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["news"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if(isLoading) return <h1>Loading</h1>

  return (
    <div className="adminSlider">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Xəbərlər</h4>
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
              <th>Başlıq</th>
              <th>Məzmun</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {news?.data?.data?.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="imgsTd">
                  <img src={singleData.image} alt="" />
                </td>
                <td className="contentTd">
                  {TruncatedTextv2(singleData.az_title, 80)}
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
        {confirmationVisible && <ConfirmModal title={"Xeberi"} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete}/> }
      </div>
    </div>
  );
};

export default News;
