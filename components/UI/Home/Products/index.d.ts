import * as React from "react";

export interface ReactPaginateProps {
	pageCount: number;
	pageRangeDisplayed?: number | undefined;
	marginPagesDisplayed?: number | undefined;
	PreviousLabel?: string | React.ReactNode | undefined;
	previousAriaLabel?: string | undefined;
	prevPageRel?: string | null | undefined;
	prevRel?: string | null | undefined;
	NextLabel?: string | React.ReactNode | undefined;
	nextAriaLabel?: string | undefined;
	nextPageRel?: string | null | undefined;
	nextRel?: string | null | undefined;
	breakLabel?: string | React.ReactNode | undefined;
	breakClassName?: string | undefined;
	breakLinkClassName?: string | undefined;
	onPageChange?(selectedItem: { selected: number }): void;
	onPageActive?(selectedItem: { selected: number }): void;
	onClick?(clickEvent: {
		index: number | null;
		selected: number;
		nextSelectedPage: number | undefined;
		event: object;
		isPrevious: boolean;
		isNext: boolean;
		isBreak: boolean;
		isActive: boolean;
	}): boolean | number | void;
	initialPage?: number | undefined;
	forcePage?: number | undefined;
	disableInitialCallback?: boolean | undefined;
	className?: string | undefined;
	containerClassName?: string | undefined;
	pageClassName?: string | undefined;
	pageLinkClassName?: string | undefined;
	pageLabelBuilder?(page: number): string | React.ReactNode;
	activeClassName?: string | undefined;
	activeLinkClassName?: string | undefined;
	previousClassName?: string | undefined;
	nextClassName?: string | undefined;
	previousLinkClassName?: string | undefined;
	nextLinkClassName?: string | undefined;
	disabledClassName?: string | undefined;
	disabledLinkClassName?: string | undefined;
	hrefBuilder?(
		pageIndex: number,
		pageCount: number,
		selectedPage: number
	): void;
	hrefAllControls?: boolean | undefined;
	extraAriaContext?: string | undefined;
	ariaLabelBuilder?(pageIndex: number, selectedPage: number): void;
	eventListener?: string | undefined;
	renderOnZeroPageCount?: (props: ReactPaginateProps) => void | null;
	selectedPageRel?: string | null | undefined;
	CustomLabel?: React.ReactNode | null | undefined;
	CustomUl?: React.ReactNode | null | undefined;
	disableBreakLabel?: boolean;
}
