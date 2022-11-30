import React from "react";
import "./Category.css";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { Item } from "./Item";

const Category = ({ name, placeholder }) => {
  return (
    <div className="category">
      <div className="category-title">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <Input placeholder={placeholder} />
      <Item text='Съесть шаурмы' done={false}></Item>
      <Item text='Съесть суп' done={true}></Item>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export { Category };
