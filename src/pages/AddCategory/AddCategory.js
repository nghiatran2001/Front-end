import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import {
  Box,
  Button,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

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

export default function AddCategory() {
  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const result = await categoryAPI.addCategory({
        nameCategory,

        description,
      });
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
            height: "100vh",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Thêm loại sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/categories">
                <Button variant="contained">Danh sách loại sản phẩm</Button>
              </Link>
            </Typography>
          </Box>

          <TableContainer
            sx={{ minWidth: 800, border: 1, borderRadius: 3 }}
            aria-label="customized table"
          >
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
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"></StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained">Thêm</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
