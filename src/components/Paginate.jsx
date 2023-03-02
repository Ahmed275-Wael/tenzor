import React from "react";
import ReactPaginate from "react-paginate";
import "./styles/paginate.css";

export default function Paginate(props) {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={15}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={props.handlePageClick}
      containerClassName={"main-paginate"}
      pageClassName={"page-paginate"}
      pageLinkClassName={"link-paginate"}
      nextLinkClassName={"nextprev-link-paginate"}
      previousLinkClassName={"nextprev-link-paginate"}
      breakLinkClassName={"nextprev-link-paginate"}
      activeClassName={"active-page"}
    />
  );
}
