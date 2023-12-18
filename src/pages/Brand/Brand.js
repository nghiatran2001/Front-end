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

import { brand as brandAPI } from "../../API";
import { Link } from "react-router-dom";

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

  const [currentPage, setCurrentPage] = useState(1);
  const brandPerPage = 3;
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
            bgcolor: "#999999",
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
                <Button variant="contained">Thêm hãng</Button>
              </Link>
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">STT</StyledTableCell>
                  <StyledTableCell align="center">Hãng</StyledTableCell>
                  <StyledTableCell align="center">Slug</StyledTableCell>
                  <StyledTableCell align="center">Mô tả</StyledTableCell>
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
                      <StyledTableCell align="center">
                        {brand.nameBrand}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {brand.slug}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {brand.description}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Popconfirm
                          title="Xóa"
                          description="Bạn chắc chắn muốn xóa?"
                          onConfirm={() => handleDeleteBrand(brand._id)}
                          onCancel={cancel}
                          okText="Có"
                          cancelText="Không"
                        >
                          <Button sx={{ margin: 1 }} variant="contained">
                            Xóa
                          </Button>
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
                <a href="#" className="page-link" onClick={prePage}>
                  Truoc
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${
                    currentPage === n ? "page-item red active" : ""
                  }`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Sau
                </a>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </div>
  );
}
