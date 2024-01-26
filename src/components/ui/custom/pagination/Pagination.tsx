"use client";

import { Button } from "../../button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent(props: PaginationProps) {
  return (
    <div className="flex items-center justify-center my-4 w-full">
      <ul className="flex gap-8 h-full items-center">
        <li>
          <Button
            className={`cursor-pointer w-[80px] bg-[#024C8E] hover:bg-[#4979a2] ${
              props.currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (props.currentPage !== 1) {
                props.onPageChange(props.currentPage - 1);
              } else {
                props.onPageChange(props.currentPage);
              }
            }}>
            Previous
          </Button>
        </li>
        {Array.from({ length: props.totalPages }, (_, i) => i + 1).map(
          (page) => (
            <li key={page}>
              <button
                className={`cursor-pointer text-lg ${
                  props.currentPage === page
                    ? "font-bold underline"
                    : "hover:underline"
                }`}
                onClick={() => props.onPageChange(page)}>
                {page}
              </button>
            </li>
          )
        )}
        <li>
          <Button
            className={`cursor-pointer w-[80px] bg-[#024C8E] hover:bg-[#4979a2] ${
              props.currentPage === props.totalPages
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => {
              if (props.currentPage !== props.totalPages) {
                props.onPageChange(props.currentPage + 1);
              } else {
                props.onPageChange(props.currentPage);
              }
            }}>
            Next
          </Button>
        </li>
      </ul>
    </div>
  );
}
