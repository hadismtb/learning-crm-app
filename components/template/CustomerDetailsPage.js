import moment from "moment";
import React from "react";

function CustomerDetailsPage({ data }) {
  console.log(data);
  return (
    <div className="customer-detail">
      <h4>Customer&#39;s details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name:</span>
          <p>{data?.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name:</span>
          <p>{data?.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone:</span>
          <p>{data?.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address:</span>
          <p>{data?.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code:</span>
          <p>{data?.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date:</span>
          <p>{moment(data?.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>

      <div className="customer-detail__products">
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        {data?.products?.map((product, index) => (
          <React.Fragment key={index}>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>{product?.qty}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
