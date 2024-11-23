import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://6728ac5f270bd0b97556b69e.mockapi.io/user/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  const handleBackToList = () => {
    navigate("/list"); // `/list` 페이지로 이동
  };

  return (
    <div className="container">
      <h1>Detail Page</h1>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      {/* 다른 필드 추가 가능 */}
      <button onClick={handleBackToList} className="btn btn-secondary mt-3">
        Back to List
      </button>
    </div>
  );
}

export default DetailPage;
