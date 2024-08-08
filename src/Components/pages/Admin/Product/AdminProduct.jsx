import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../../../Store/ActionCreators/ProdctActionCreators";

export default function AdminProduct() {

var [data, setData] = useState([]);
var allStateData = useSelector((state) => state.ProductStateData);
var dispatch = useDispatch();

function deleteItem(id) {
if (window.confirm("Are You Sure to Delete tha Item :")) {
dispatch(deleteProduct({ id: id }));
getAPIData();
}
}

function getAPIData() {
dispatch(getProduct());
if (allStateData.length) setData(allStateData.slice(1).reverse());
}

useEffect(() => {
getAPIData();
}, [allStateData.length]);

return (
<>
  {/*
  <!-- Single Page Header start --> */}
  <br />
  <br />
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 mt-5">Admin Product</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>

      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminProduct" className="text-white">AdminProduct</Link>
      </li>
    </ol>
  </div>
  {/*
  <!-- Single Page Header End --> */}

  <div className="container my-3">
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="bg-primary text-center p-2 fw-bold">
          Product{" "}
          <Link to="/AdminAddProduct" className="ms-1">
          <i className="fas fa-plus"></i>
          </Link>
        </h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr className="text-center">
                <th className="text-blacks">Id</th>
                <th className="text-blacks">Name</th>
                <th className="text-blacks">Maincategory</th>
                <th className="text-blacks">Subcategory</th>
                <th className="text-blacks">Brand</th>
                <th className="text-blacks">Color</th>
                <th className="text-blacks">Size</th>
                <th className="text-blacks">Price</th>
                <th className="text-blacks">Stock</th>
                <th className="text-blacks">Image 1</th>
                <th className="text-blacks">Image 2</th>
                <th className="text-blacks">Image 3</th>
                <th className="text-blacks">Image 4</th>
                <th className="text-blacks">Edit</th>
                <th className="text-blacks">Delete</th>
              </tr>
              {data.map((item, index) => {
              return (
              <tr key={index} className="text-center">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.maincategory}</td>
                <td>{item.subcategory}</td>
                <td>{item.brand}</td>
                <td>{item.color}</td>
                <td>{item.size}</td>
                <td className="text-center">
                  <del className="text-danger">&#8377;{item.baseprice}</del>
                  <sup className="text-success">{item.discount}%</sup>
                  &#8377;<span className="text-dark">
                    {item.finalprice} {/* Display the final price */}
                  </span>
                </td>

                <td>{item.stock}</td>
                <td>
                  <a href={`/img/Product/${item.pic1}`} rel="noreferrer" target="_blank">
                    {" "}
                    <img src={`/img/Product/${item.pic1}`} alt="" width={"50px"} height={"50px"} />
                  </a>
                </td>
                <td>
                  <a href={`/img/Product/${item.pic2}`} rel="noreferrer" target="_blank">
                    {" "}
                    <img src={`/img/Product/${item.pic2}`} alt="" width={"50px"} height={"50px"} />
                  </a>
                </td>
                <td>
                  <a href={`/img/Product/${item.pic3}`} rel="noreferrer" target="_blank">
                    <img src={`/img/Product/${item.pic3}`} alt="" width={"50px"} height={"50px"} />
                  </a>
                </td>
                <td>
                  <a href={`/img/Product/${item.pic4}`} rel="noreferrer" target="_blank">
                    <img src={`/img/Product/${item.pic4}`} alt="" width={"50px"} height={"50px"} />
                  </a>
                </td>

                <td>
                  <Link to={"/AdminUpdateProduct/" + item.id} className="text-primary">
                  <i className="fa fa-edit"></i>
                  </Link>
                </td>
                <td>
                  <button onClick={()=> deleteItem(item.id)}
                    className="btn text-primary"
                    >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</>
);
}