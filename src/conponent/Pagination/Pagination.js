import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ productPerPage, totalProduct }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers?.map((number) => (
          <li key={number}>
            <Link>{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
