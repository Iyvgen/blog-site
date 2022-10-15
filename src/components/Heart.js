import React from "react";
import productsArray from "../Pages/Categories/productsArray";
import { Button } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addLike, removeLike } from "../redux/likeReducer";

function Heart() {
  const isLiked = useSelector(
    (state) => state.productsLikeState[[productsArray].id]
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() =>
          isLiked
            ? dispatch(removeLike(productsArray[[productsArray].id]))
            : dispatch(addLike(productsArray[[productsArray].id]))
        }
      >
        {isLiked ? (
          <FavoriteIcon color="primary" />
        ) : (
          <FavoriteBorderIcon color="primary" />
        )}
      </Button>
    </div>
  );
}

export default Heart;
