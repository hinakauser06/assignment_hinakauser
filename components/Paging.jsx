import React, { useState } from "react";

export default function Paging({sendCurrentPageFun}) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 12; // Replace with your total pages logic

    const handlePageChange = (page) => {
        setCurrentPage(page);
        sendCurrentPageFun(page);
    };
    return (
        <div className="flex justify-end text-[#116a6c] font-semibold ">
            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 3;

        // Always show the first page
        pages.push(
            <button
                key={1}
                onClick={() => onPageChange(1)}
                className={`mx-1 px-2 py-1 ${currentPage === 1 ? "text-[#0c3636] font-bold" : "text-[#1c8a8b]"
                    }`}
            >
                1
            </button>
        );

        // Add an ellipsis after the first page if current page is greater than maxPagesToShow
        if (currentPage > maxPagesToShow) {
            pages.push(
                <span key="start-ellipsis" className="mx-1 text-teal-800">
                    ...
                </span>
            );
        }

        // Show pages around the current page
        const startPage = Math.max(currentPage - 1, 2);
        const endPage = Math.min(currentPage + 2, totalPages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`mx-1 px-2 py-1 ${currentPage === i ? "text-teal-600 font-bold" : "text-teal-800"
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Add an ellipsis before the last page if there are more pages to show
        if (currentPage < totalPages - maxPagesToShow + 1) {
            pages.push(
                <span key="end-ellipsis" className="mx-1 text-teal-800">
                    ...
                </span>
            );
        }

        // Always show the last page
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => onPageChange(totalPages)}
                    className={`mx-1 px-2 py-1 ${currentPage === totalPages
                        ? "text-teal-600 font-bold"
                        : "text-teal-800"
                        }`}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center space-x-4 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 text-[#116a6c] ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
               <div className="text-2xl">
               &#8592;
               </div>
            </button>

            {renderPageNumbers()}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 text-[#116a6c] ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
               <div className="text-2xl">
               &#8594;
               </div>
            </button>
        </div>
    );
};