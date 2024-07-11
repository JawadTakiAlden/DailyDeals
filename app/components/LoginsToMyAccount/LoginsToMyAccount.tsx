import { DevicesOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

interface LgoinToMyAccountInterface {
  device_name: string;
  mac_address: string;
  login_date: string;
}

const sampleLogins: LgoinToMyAccountInterface[] = [
  {
    device_name: "iPhone 13",
    mac_address: "00:14:22:01:23:45",
    login_date: "2024-06-15T14:30:00Z",
  },
  {
    device_name: "MacBook Pro",
    mac_address: "00:16:3E:FF:45:67",
    login_date: "2024-06-20T09:45:00Z",
  },
  {
    device_name: "Samsung Galaxy S21",
    mac_address: "00:25:96:3F:45:18",
    login_date: "2024-06-22T17:15:00Z",
  },
  {
    device_name: "Dell XPS 15",
    mac_address: "00:1B:63:84:45:E6",
    login_date: "2024-06-25T08:30:00Z",
  },
];

const LoginsToMyAccount = ({
  logins = sampleLogins,
}: Readonly<{
  logins?: LgoinToMyAccountInterface[];
}>) => {
  return (
    <Box>
      <Typography variant="h6" mb={1}>
        Log-ins to my account
      </Typography>
      {logins.map((login, i) => (
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            mb : 1
          }}
          key={i}
        >
          <DevicesOutlined
            sx={{
              fontSize: "50px",
            }}
          />
          <Box>
            <Typography variant="body1">{login.device_name}</Typography>
            <Typography variant="caption">{login.mac_address}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LoginsToMyAccount;
