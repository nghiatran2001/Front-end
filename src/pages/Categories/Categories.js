import {
  Box,
  Button,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [category, setCategory] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleAddCategory();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);
  const getCategoryList = async () => {
    try {
      const result = await categoryAPI.getCategoryList();
      setCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const result = await categoryAPI.addCategory({
        nameCategory,
        description,
      });

      if (result.status === 200) {
        api.open({
          type: "success",
          message: "Thêm thể loại thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Tên thể loại đã tồn tại.",
      });
    }
  };

  const handleDeleteCategory = async (nameCategory) => {
    try {
      const result = await categoryAPI.deleteCategory({
        nameCategory,
      });
      if (result.status === 200) {
        await getCategoryList();
        api.open({
          type: "success",
          message: "Xóa thể loại thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Xóa thể loại thất bại.",
      });
      console.log(error);
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
            bgcolor: "#999999",
            height: "100vh",
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
                title="Thêm thể loại sản phẩm"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
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
