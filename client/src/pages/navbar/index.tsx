import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FlexBetween from '@/components/FlexBetween'


const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState("dashboard")
  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.primary[300]}
    >

      <FlexBetween gap="0.75rem">
        <DashboardIcon sx={{ fontSize: "30px", color: "#1a7ee3"}} />
        <Typography variant='h4' fontSize="16px">
          Cash Flow
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "#1a7ee3" : palette.primary[500],
              textDecoration: "inherit"
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "#1a7ee3" : palette.primary[500],
              textDecoration: "inherit"
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar 