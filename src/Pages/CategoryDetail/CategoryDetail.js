import React from "react";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const params = useParams();

  return <div>{params.category}</div>;
}

export default CategoryDetail;
