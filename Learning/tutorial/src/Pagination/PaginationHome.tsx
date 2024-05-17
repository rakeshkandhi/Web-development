import React, { useState, useMemo } from "react";
import data from "../assets/generated.json";
import Pagination from "./Pagination";
const PageSize = 10;

interface Friend {
  id: number;
  name: string;
}

interface DataProps {
  index: number;
  balance: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  friends: Friend[];
}

interface SortConfig {
  key: keyof DataProps | null;
  direction: "ascending" | "descending";
}

const PaginationDemo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  const handleSort = (key: keyof DataProps) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
        
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [sortConfig]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return sortedData.slice(firstPageIndex, lastPageIndex);
  }, [sortedData, currentPage]);

  return (
    <>
      <h1>The current page number is: {currentPage}</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflowY: "scroll",
          height: "600px",
        }}
      >
        <table border={2} style={{ width: "80%" }}>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("age")}>Age</th>
              <th onClick={() => handleSort("gender")}>Gender</th>
              <th onClick={() => handleSort("company")}>Company</th>
              <th onClick={() => handleSort("balance")}>Balance</th>
              <th onClick={() => handleSort("phone")}>Phone</th>
              <th onClick={() => handleSort("email")}>Email</th>
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
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={sortedData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default PaginationDemo;
