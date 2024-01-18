import React from "react";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Import the correct components

interface DynamicPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DynamicPagination: React.FC<DynamicPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePaginationLinks = () => {
    const links = [];

    // Previous
    links.push(
      <PaginationItem key="previous">
        <PaginationPrevious
          href="#"
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        />
      </PaginationItem>
    );

    // Page numbers
    for (let page = 1; page <= totalPages; page++) {
      links.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Next
    links.push(
      <PaginationItem key="next">
        <PaginationNext
          href="#"
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
        />
      </PaginationItem>
    );

    return links;
  };

  return <PaginationContent>{generatePaginationLinks()}</PaginationContent>;
};

export default DynamicPagination;
