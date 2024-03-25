import "./comments.scss";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../api/posts";
import { useState } from "react";
import { useComments } from "./useComments.js";
import NavButton from "../../../ui/navButton/NavButton.jsx";
import ConfirmModal from "../../../ui/corfirmModal/ConfirmModal.jsx";
import toast from "react-hot-toast";

const Comments = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { isLoading, comments } = useComments();


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
      return api.post(`comments/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["comments"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="comments">
      <div className="insideCategories">
        <div className="sliderHeader">
          <h4>Rəylər</h4>
          <NavButton toNavigate="yeni">
            <span>+</span>
            <span>Yeni</span>
          </NavButton>
        </div>
        <table>
          <thead>
            <tr>
              <th className="idTh">#</th>
              <th className="imgTh">Şəxsin adı</th>
              <th className="dateTh">Rəy</th>
              <th className="dateTh">Tarix</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {comments?.data?.data.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="imgsTd">{singleData.az_name}</td>
                <td className="datetTd">{singleData.az_content}</td>
                <td className="datetTd">{singleData.date}</td>
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
            title={"Kateqoriyanı"}
            handleConfirmDelete={handleConfirmDelete}
            handleCancelDelete={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Comments;
