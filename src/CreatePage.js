import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [data, setData] = useState({ name: "", email: "" });
  const nameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 1. 유효성 검사
    if (!data.name) {
      alert("Name is required.");
      nameRef.current.focus();
      return;
    }
    if (!data.email) {
      alert("Email is required.");
      emailRef.current.focus();
      return;
    }

    // 2. 서버로 데이터 전송
    axios
      .post("https://6728ac5f270bd0b97556b69e.mockapi.io/user", data)
      .then(() => {
        alert("Data added successfully!"); // 성공 메시지
        navigate("/list"); // 목록 페이지로 이동
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    navigate("/list"); // 취소 버튼 클릭 시 목록 페이지로 이동
  };

  return (
    <div className="container">
      <h1>Add New Data</h1>
      <label>Name:</label>
      <input
        type="text"
        ref={nameRef}
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="form-control mb-2"
      />
      <label>Email:</label>
      <input
        type="text"
        ref={emailRef}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="form-control mb-2"
      />
      <div>
        <button onClick={handleSubmit} className="btn btn-primary mt-2">
          Submit
        </button>
        <button onClick={handleCancel} className="btn btn-secondary mt-2 ms-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
