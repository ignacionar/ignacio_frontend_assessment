import React from "react";
import styled from "@emotion/styled";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import usePagination, { DOTS } from "../hooks/usePagination";

const PaginationWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  margin-bottom: 20px;

  &:last-child {
    margin-top: 20px;
  }
`;

const PaginationItem = styled.li`
  ${(props) => {
    let style = `padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
  
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }`;

    if (props.disabled) {
      style += `
        pointer-events: none;
      `;
    }

    if (props.selected) {
      style += `
        background-color: rgba(0, 0, 0, 0.08);
      `;
    }

    return style;
  }}
`;

const PaginationRowSelectorItem = styled(PaginationItem)`
  background-color: rgba(0, 0, 0, 0.04);
`;

const PaginationRowSelect = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
`;

const PaginationDots = styled(PaginationItem)`
  &:hover {
    background-color: transparent;
    cursor: default;
  }
`;

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
  pageLimit
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <PaginationWrapper>
      <PaginationItem
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="prevButton"
      >
        <ChevronLeftIcon disabled={currentPage === 1} />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return <PaginationDots key={key}>&#8230;</PaginationDots>;
        }

        return (
          <PaginationItem
            onClick={() => onPageChange(pageNumber)}
            selected={pageNumber === currentPage} // configure to properly show selected page
            key={key}
            className="pageButton"
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem onClick={onNext} disabled={pageLimit === currentPage} className="nextButton">
        <ChevronRightIcon disabled={false} />
      </PaginationItem>
      <PaginationRowSelectorItem>
        <PaginationRowSelect
          onChange={(e) => {
            onPageSizeOptionChange(e.target.value);
          }}
          className="rowSelectDropdown"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} defaultValue={pageSize === size} value={size}>
              {size} per page
            </option>
          ))}
        </PaginationRowSelect>
      </PaginationRowSelectorItem>
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 1,
  pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {},
  onPageSizeOptionChange: () => {},
};

export default Pagination;
