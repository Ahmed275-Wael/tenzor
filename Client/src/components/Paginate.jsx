import React from "react";
import ReactPaginate from "react-paginate";
import "./styles/paginate.css";

export default function Paginate(props) {
  return (
    <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel={"..."}
      pageCount={15}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={props.handlePageClick}
      containerClassName={"main-paginate"}
      pageClassName={"page-paginate"}
      pageLinkClassName={"link-paginate"}
      nextClassName={"next-paginate"}
      nextLinkClassName={"next-link-paginate"}
      previousClassName={"prev-paginate"}
      previousLinkClassName={"prev-link-paginate"}
      breakClassName={"break-paginate"}
      breakLinkClassName={"break-link-paginate"}
      activeClassName={"active-page"}
    />
  );
}
