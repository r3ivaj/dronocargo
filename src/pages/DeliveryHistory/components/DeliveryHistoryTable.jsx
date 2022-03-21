import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { LayoutTextSidebar } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import Menu from "../../../components/Menu/Menu";
import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icon/Icon";
import { labelStyle } from "./History.styles";
import { pxToRem } from "../../../utils/styles";
import TableContainer from "@mui/material/TableContainer";
import { grey, main } from "../../../theme/colors";

const History = ({ items = [] }) => {
  const navigate = useNavigate();
  const getTableSxProp = (item) => {
    return {
      padding: 0,
      paddingRight: pxToRem(46),
      borderBottom:
        item.status === "Pending"
          ? `2px solid ${main}`
          : `1px solid ${grey[0]}`,
    };
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", border: 0 }}>
      <Table aria-label="Delivery History">
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.orderId}>
              <TableCell sx={getTableSxProp(item)} style={{ width: 90 }}>
                <Box>
                  <Typography sx={labelStyle}>Status</Typography>
                  <Typography>{item.status}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={getTableSxProp(item)} style={{ width: 105 }}>
                <Box>
                  <Typography sx={labelStyle}>Order Id</Typography>
                  <Typography>{item.orderId}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={getTableSxProp(item)} style={{ width: 124 }}>
                <Box>
                  <Typography sx={labelStyle}>Technician</Typography>
                  <Typography>{item.technician}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={getTableSxProp(item)} style={{ width: 70 }}>
                <Box>
                  <Typography sx={labelStyle}>Platform</Typography>
                  <Typography>{item.platform}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={getTableSxProp(item)} style={{ width: 75 }}>
                <Box>
                  <Typography sx={labelStyle}>Drone</Typography>
                  <Typography>{item.drone}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={getTableSxProp(item)} style={{ width: 110 }}>
                <Box>
                  <Typography sx={labelStyle}>Technical check</Typography>
                  <Typography>{item.technicalCheck}</Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  ...getTableSxProp(item),
                  padding: "32px 0px",
                  paddingRight: 0,
                }}
              >
                <Stack direction="row" spacing={pxToRem(16)}>
                  <Box mr="auto" />
                  <Button
                    variant="contained"
                    color="text"
                    onClick={() => navigate(`/shipment/${item.orderId}`)}
                    endIcon={
                      <Icon
                        component={<LayoutTextSidebar />}
                        color={grey[100]}
                      />
                    }
                  >
                    Details
                  </Button>
                  <Menu
                    items={[{ label: "Edit" }, { label: "Delete" }]}
                    label="Actions"
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
