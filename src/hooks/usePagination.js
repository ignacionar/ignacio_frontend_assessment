export const DOTS = "...";

function usePagination({currentPage, totalCount, pageSize}) {

  const lastPageIndex = totalCount / pageSize;

  /*

    Depending in totalCount / pageSize value we know which is the lastPageIndex

    With this data and the currentPage value, the usePagination use the following conditions to get the correct pagination depending what is the currentPage & pageSize
    
    For the conditions it is also necessary to implement Math.ceil, since lastPageIndex is not allways a round value.

  */

  if (currentPage < 4 && pageSize !== 100) {
    return [1, 2, 3, DOTS, Math.ceil(lastPageIndex)];
  } else if (currentPage >= (lastPageIndex - 2)) {
    return [1, DOTS, Math.ceil(lastPageIndex) - 2, Math.ceil(lastPageIndex) - 1, Math.ceil(lastPageIndex)];
  } else if (currentPage > 1 && currentPage < lastPageIndex) {
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, Math.ceil(lastPageIndex)];
  } else if (pageSize === 100) {
    return [1];
  }

}

export default usePagination;
