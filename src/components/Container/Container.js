import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../Alert/Alert";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Price from "../Price";
import DetailsContainer from "../Details/DetailsContainer";
import Subtitle from "../Subtitle";
import ColorsContainer from "../ColorsContainer";
import WarrantyContainer from "../WarrantyContainer";
import Specifications from "../Specifications";
import Feautures from "../Feautures";
import ImagesContainer from "../Images/ImagesContainer";

import "./Container.scss";

const baseURL = "https://frontend-interview-api.vercel.app/api/items";

const Container = () => {
  const [data, setData] = useState(null);

  useEffect(
    () => axios.get(baseURL).then((response) => setData(response.data[0])),
    []
  );

  if (!data) return null;

  const {
    images,
    price,
    details,
    colors,
    warranty,
    specs,
    features,
    title,
    description,
  } = data;

  return (
    <div className="container">
      <Logo />
      <ImagesContainer images={images} />
      <Header title={title} description={description} />
      <Alert>STARTING AT</Alert>
      <Price price={price} />
      <DetailsContainer details={details} />
      <Subtitle text="Choose your finish." />
      <ColorsContainer colorsSection={colors} />
      <Subtitle text="Would you like to add extended warranty coverage?." />
      <WarrantyContainer warrantyList={warranty} />
      <Subtitle text="Features" />
      <Specifications specifications={specs} />
      <Feautures features={features} />
    </div>
  );
};

export default Container;
