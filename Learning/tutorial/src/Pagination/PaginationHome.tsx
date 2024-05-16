import React, { useState, useMemo } from "react";
import data from "../assets/generated.json";
import Pagination from "./Pagination";
const PageSize = 10;

const PaginationDemo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company</th>
            <th>Balance</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Friends</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => (
            <tr key={item.index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.company}</td>
              <td>{item.balance}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <ul>
                  {item.friends.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PaginationDemo;
