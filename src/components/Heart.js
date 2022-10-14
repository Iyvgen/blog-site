import React from "react";
import productsArray from "../Pages/Categories/productsArray";
import { Button } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addLike, removeLike } from "../redux/likeReducer";

function Heart() {
  const isLiked = useSelector((state) => state.productsLikeState);
  const dispatch = useDispatch();
  console.log(isLiked);
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => (isLiked ? dispatch(removeLike) : dispatch(addLike))}
      >
        {isLiked ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
      </Button>
    </div>
  );
}

export default Heart;
