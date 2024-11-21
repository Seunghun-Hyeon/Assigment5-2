import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const [data, setData] = useState({ name: "", email: "" });
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://6728ac5f270bd0b97556b69e.mockapi.io/user/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setChangeCount((prevCount) => prevCount + 1);

    axios
      .put(`https://6728ac5f270bd0b97556b69e.mockapi.io/user/${id}`, {
        ...data,
        [name]: value,
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    navigate("/list"); // `/list` 페이지로 이동
  };

  return (
    <div className="container">
      <h1>Update Data</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <p>Total Changes: {changeCount}</p>
      <div>
        <button className="btn btn-primary me-2">Save</button>
        <button onClick={handleCancel} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdatePage;
