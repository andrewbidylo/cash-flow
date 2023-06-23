import { Box } from "@mui/material";
import { styled } from "@mui/system";


const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0 0 0.3rem 0 #9CAAAF"
}))

export default DashboardBox;