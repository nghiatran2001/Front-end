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

  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const result = await categoryAPI.addCategory({
        nameCategory,
        description,
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  const handleDeleteCategory = async (nameCategory) => {
    try {
      const result = await categoryAPI.deleteCategory({
        nameCategory,
      });
      if (result.status === 200) {
        await getCategoryList();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            height: "100%",
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
                    <Input
                      onChange={(e) => setNameCategory(e.target.value)}
                      placeholder="Tên hãng"
                    ></Input>
                  </Form.Item>
                  <Form.Item label="Mô tả">
                    <Input
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Mô tả"
                    ></Input>
                  </Form.Item>
                </Form>
              </Modal>
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
                {listCategory.map((category, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {category.nameCategory}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {category.slug}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {category.description}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button sx={{ marginRight: 2 }} variant="contained">
                          Sửa
                        </Button>
                        <Button
                          onClick={() =>
                            handleDeleteCategory(category.nameCategory)
                          }
                          sx={{ marginRight: 2 }}
                          variant="contained"
                        >
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
