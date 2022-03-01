import React from 'react';
import { Avatar } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import { orange, purple, indigo } from '@mui/material/colors';

export default function ProductIcon({ productType }) {
  const productShape = () => {
    switch (productType) {
      case '6217af9b4c49a4266b3007ad':
        return {
          color: orange[600],
          element: <CakeIcon />
        };
      case '6217af354c49a4266b3007ac':
        return {
          color: purple[600],
          element: <SplitscreenIcon />
        };
      default:
        return {
          color: indigo[600],
          element: <CelebrationIcon />
        };
    }
  };

  return (
    <Avatar
      sx={{
        backgroundColor: productShape().color,
        height: 56,
        width: 56
      }}
    >
      {productShape().element}
    </Avatar>
  );
}
