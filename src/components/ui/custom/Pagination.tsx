import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent(props: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              props.currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (props.currentPage !== 1) {
                props.onPageChange(props.currentPage - 1);
              } else {
                props.onPageChange(props.currentPage);
              }
            }}
          />
        </PaginationItem>
        {Array.from({ length: props.totalPages }, (_, i) => i + 1).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => props.onPageChange(page)}
                isActive={props.currentPage === page}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
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
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
