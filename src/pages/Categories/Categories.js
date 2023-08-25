import {
  Box,
  Button,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Admin from "../Admin/Admin";
import { Modal, notification } from "antd";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Categories() {
  const [category, setCategory] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  //modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
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
            height: "1200px",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Danh sách loại sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Button variant="contained" onClick={showModal}>
                Thêm loại sản phẩm
              </Button>
              <Modal title="Thêm thể loại sản phẩm" open={isModalOpen}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          Tên hãng:
                        </StyledTableCell>
                        <StyledTableCell>
                          <OutlinedInput
                            type="text"
                            sx={{ width: "100%" }}
                          ></OutlinedInput>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          Mô tả:
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextareaAutosize
                            type="text"
                            style={{ width: "100%", height: 100, fontSize: 17 }}
                          ></TextareaAutosize>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Modal>
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>STT</StyledTableCell>
                  <StyledTableCell>Hãng</StyledTableCell>
                  <StyledTableCell>Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.map((category, index) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell key={index} component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell>{category.nameCategory}</StyledTableCell>
                      <StyledTableCell>
                        <Button sx={{ marginRight: 2 }} variant="contained">
                          Sửa
                        </Button>
                        <Button sx={{ marginRight: 2 }} variant="contained">
                          Xóa
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
