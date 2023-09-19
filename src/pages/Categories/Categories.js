import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Admin from "../Admin/Admin";
import { Form, Input, Modal } from "antd";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { category as categoryAPI } from "../../API";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);
  const getCategoryList = async () => {
    try {
      const result = await categoryAPI.getCategoryList();
      setListCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
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
              <Modal
                title="Thêm loại sản phẩm"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 8,
                  }}
                  style={{
                    minWidth: 600,
                  }}
                >
                  <Form.Item label="Tên Hãng">
                    <Input placeholder="Tên hãng"></Input>
                  </Form.Item>
                  <Form.Item label="Mô tả">
                    <Input placeholder="Mô tả"></Input>
                  </Form.Item>
                </Form>
              </Modal>
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>STT</StyledTableCell>
                  <StyledTableCell>Hãng</StyledTableCell>
                  <StyledTableCell>Hãng</StyledTableCell>
                  <StyledTableCell>Hãng</StyledTableCell>
                  <StyledTableCell>Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {listCategory.map((category, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell>{category.name}</StyledTableCell>
                      <StyledTableCell>{category.slug}</StyledTableCell>
                      <StyledTableCell>{category.description}</StyledTableCell>
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
