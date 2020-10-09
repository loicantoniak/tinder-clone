import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";


export default function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" style={{color: '#f5b748'}} />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" style={{color: '#ec5e6f'}}/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" style={{color: '#62b4f9'}}/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" style={{color: '#76e2b3'}}/>
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" style={{color: '#915dd1'}}/>
      </IconButton>
    </div>
  );
}
