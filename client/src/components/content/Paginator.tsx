import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

type PaginatorTypes = {
  pageCount: number;
  forwardPage: () => void;
  backPage: () => void;
};

export function Paginator({
  pageCount,
  forwardPage,
  backPage,
}: PaginatorTypes) {
  const [page, setPage] = useState(1);

  function handleNext() {
    let nextPage = page + 1;
    if (nextPage > pageCount) return;
    setPage(() => nextPage);
    forwardPage();
  }
  function handlePrevious() {
    let prevPage = page - 1;
    if (prevPage < 1) return;
    setPage(() => prevPage);
    backPage();
  }

  return (
    <Pagination className="cursor-pointer">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
