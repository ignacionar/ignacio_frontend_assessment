import React, { useState } from "react";
import blogs from "../data/blogs.json";
import Pagination from "./Pagination";
import BlogPost from "./BlogPost";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {

  let currentPaginationData = blogs.posts.slice(0, 15);

  const [pagData, setPagData] = useState(currentPaginationData);
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const updateRowsPerPage = (number) => {
    currentPaginationData = blogs.posts.slice(0, number);
    setPagData(currentPaginationData);
    setPageSize(number);
    setCurrentPage(1);
  };

  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    currentPaginationData = blogs.posts.slice((pageNumber - 1) * pageSize, pageSize * pageNumber);
    setPagData(currentPaginationData);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={(e) => updatePage(e)}
        onPageSizeOptionChange={(e) => updateRowsPerPage(e)}
        pageSize={parseInt(pageSize)}
        pageLimit={Math.ceil(blogs.posts.length / pageSize)}
      />
      {pagData.map((blog) => (
        <BlogPost
          key={blog.id}
          author={blog.author}
          title={blog.title}
          excerpt={blog.excerpt}
          featureImage={blog.image}
          readingTimeMinutes={blog.readingTimeMinutes}
        />
      ))}
    </div>
  );
}

export default BlogList;
