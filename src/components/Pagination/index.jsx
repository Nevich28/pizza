import ReactPaginate from 'react-paginate';

export const Pagination = ({ pageCount, onChangePage, activePage }) => {
    const btnClass =
        'p-[10px] border border-main-orange rounded-full inline-flex w-10 h-10 justify-center items-center mr-3 text-main-orange hover:bg-main-orange hover:text-white transition';
    return (
        <ReactPaginate
            className="flex items-center mt-10 "
            pageLinkClassName={btnClass}
            previousLinkClassName={btnClass}
            nextLinkClassName={btnClass}
            disabledLinkClassName="!border-gray-300 !text-gray-300 hover:bg-white cursor-auto"
            activeLinkClassName="bg-main-orange text-white"
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={activePage - 1}
        />
    );
};
