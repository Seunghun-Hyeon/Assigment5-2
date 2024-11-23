import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "https://6728ac5f270bd0b97556b69e.mockapi.io/user";

function ListPage() {
  const [data, setData] = useState([]);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 데이터를 로드
  useEffect(() => {
    fetchData();
  }, []);

  // 항목 삭제 함수
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchData(); // 삭제 후 데이터 새로고침
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Data List</h1>
      {/* 새 데이터 추가 링크 */}
      <Link to="/create" className="btn btn-primary mb-3">
        Add New
      </Link>

      {/* 데이터 리스트 */}
      <ul className="list-group">
        {data.length > 0 ? (
          data.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                <Link to={`/detail/${item.id}`}>{item.name}</Link>
              </span>
              <div>
                <Link
                  to={`/update/${item.id}`}
                  className="btn btn-secondary btn-sm mx-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">No Data Available</li>
        )}
      </ul>
    </div>
  );
}

export default ListPage;
