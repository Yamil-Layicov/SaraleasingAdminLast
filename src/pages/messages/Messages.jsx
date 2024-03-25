import { useState } from "react";
import "./messages.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";
// import { convertDateTime } from "../../helpers/DateFns";
import ConfirmModal from "../../ui/corfirmModal/ConfirmModal";
import api from '../../api/posts';
import { NavLink } from "react-router-dom";
import TruncatedTextv2 from "../../helpers/TrunctedTextv2";

const Messages = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
      return api.post(`messages/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["messages"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  const { isLoading, data: messageData } = useQuery({
    queryKey: ["messages"],
    queryFn: () => api.get("messages"),
  });



  return (
    <div className="adminMessages">
      <div className="insideMessages">
        <div className="messageHeader">
          <h4>Müraciətlər</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th className="idTh">#</th>
              <th className="nameTh">Ad</th>
              <th>E-poçt ünvan</th>
              <th>Mətn</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {messageData?.data?.data?.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="namesTd">
                  {singleData.name}
                </td>
                <td className="contentTd">
                  {singleData.email}
                </td>
                <td className="contentTd">
                  {singleData.message}
                </td>
                <td className="actionBtnsTd">
                  <div className="actionBtns">
                    <button onClick={() => handleDelete(singleData.id)}>
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {confirmationVisible && <ConfirmModal title={"Müraciəti"} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete}/> }
      </div>
    </div>
  );
};

export default Messages;


