import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Admin from "../Admin/Admin";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Popconfirm } from "antd";
import { notification } from "antd";
import "./Brand.css";
import DoubleRight from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import DoubleLeft from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import Add from "@mui/icons-material/AddOutlined";
import Update from "@mui/icons-material/ConstructionOutlined";
import DropDown from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";

import { brand as brandAPI } from "../../API";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Brand() {
  const [api, contextHolder] = notification.useNotification();

  const [listBrand, setListBrand] = useState([]);
  const [sortBrand, setSortBrand] = useState("ASC");

  const [currentPage, setCurrentPage] = useState(1);
  const brandPerPage = 6;
  const lastIndex = currentPage * brandPerPage;
  const firstIndex = lastIndex - brandPerPage;
  const brands = listBrand.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(listBrand.length / brandPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

  const handleDeleteBrand = async (id) => {
    try {
      const result = await brandAPI.deleteBrand({
        id,
      });
      if (result.status === 211) {
        await getBrandList();
        api.open({
          type: "error",
          message: "Không thể xoá vì tồn tại sản phẩm",
        });
      }
      if (result.status === 200) {
        await getBrandList();
        api.open({
          type: "success",
          message: "Xóa thành công.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = (e) => {};

  useEffect(() => {
    (async () => {
      await getBrandList();
    })();
  }, []);
  const getBrandList = async () => {
    try {
      const result = await brandAPI.getBrandList();
      setListBrand(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const prePage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = async () => {
    if (currentPage !== pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = async (id) => {
    setCurrentPage(id);
  };

  const sorting = (col) => {
    if (sortBrand === "ASC") {
      const sorted = [...listBrand].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setListBrand(sorted);
      setSortBrand("DSC");
    }
    if (sortBrand === "DSC") {
      const sorted = [...listBrand].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setListBrand(sorted);
      setSortBrand("ASC");
    }
  };
  return (
    <div>
      {contextHolder}
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 250,
            height: "100%",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Danh sách hãng
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/addbrand">
                <Button variant="contained">
                  <Add></Add>
                </Button>
              </Link>
            </Typography>
          </Box>
          <TableContainer component={Paper} sx={{ borderRadius: 5 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">STT</StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="brand-down"
                    onClick={() => sorting("nameBrand")}
                  >
                    Hãng
                    <DropDown></DropDown>
                  </StyledTableCell>
                  <StyledTableCell align="center" className="brand-down">
                    Tiêu đề
                  </StyledTableCell>
                  <StyledTableCell align="center" className="brand-down">
                    Mô tả
                  </StyledTableCell>
                  <StyledTableCell align="center">Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {brands.map((brand, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{ minWidth: "250px" }}
                        align="center"
                      >
                        {brand.nameBrand}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {brand.slug}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{ maxWidth: "500px" }}
                        align="center"
                      >
                        {brand.description}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link to={`/updatebrand?idBrand=${brand._id}`}>
                          <Update className="brand-delete "></Update>
                        </Link>
                        <Popconfirm
                          title="Xóa"
                          description="Bạn chắc chắn muốn xóa?"
                          onConfirm={() => handleDeleteBrand(brand._id)}
                          onCancel={cancel}
                          okText="Có"
                          cancelText="Không"
                        >
                          <Delete className="brand-delete"></Delete>
                        </Popconfirm>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <Link href="#" className="page-link" onClick={prePage}>
                  <DoubleLeft></DoubleLeft>
                </Link>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${
                    currentPage === n ? "page-item red active" : ""
                  }`}
                  key={i}
                >
                  <Link
                    href="#"
                    className="page-link"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </Link>
                </li>
              ))}
              <li className="page-item">
                <Link href="#" className="page-link" onClick={nextPage}>
                  <DoubleRight></DoubleRight>
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </div>
  );
}
