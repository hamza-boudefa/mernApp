import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addNewProduct, deleteProd } from "../redux/actions/ProductsActions";
import { login } from "../redux/actions/UsersActions";

const Profile = () => {
  const { user } = useSelector((state) => state.loginDetails);

  // add new product
  const [prod, setProd] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleAdd = async() => {
    await dispatch(addNewProduct({ ...prod, id }));
    dispatch(login(user.user));
  };


  
  const handleDelete=(id)=>{
    dispatch(deleteProd(id))
     dispatch(login(user.user))
  }
// const {products}=useSelector(state=>state.)
  return (
    <div>
      {user &&
        user.user.listOfProducts.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3> {el.productName} </h3>
            <h3>{el.Qty}</h3> <Button onClick={()=>handleDelete(el._id)} >delete</Button>
          </div>
        ))}
      <div>
        <h1>add new product</h1>
        <input
          type="text"
          placeholder="productName"
          onChange={(e) => setProd({ ...prod, productName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Qty"
          onChange={(e) => setProd({ ...prod, Qty: e.target.value })}
        />
        <Button onClick={handleAdd}>add</Button>
      </div>
    </div>
  );
};

export default Profile;
