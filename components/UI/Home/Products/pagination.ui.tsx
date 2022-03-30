import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import ProductsStyles from "components/Styles/Home/Products/products.styled";
import { Product } from "./data.example";
import Link from "next/link";
import ListsStyles from "components/Styles/Home/Products/lists.styled";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PaginationBoxView from "./customPaginate.ui.lib";
import { wrap } from "popmotion";

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0
	}),
	active: {
		x: 0,
		opacity: 1,
		height: "100%",
		transition: { delay: 0.5, staggerChildren: 2 }
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -1000 : 1000,
		opacity: 0
	})
};

const xOffset = 1500;

export const ReactPagination = ({ pages }: { pages: Array<Product> }) => {
	const itemsPerPage = 16;
	const [currentItems, setCurrentItems] = useState<Array<Product> | null>(
		null
	);
	const [direction, setDirection] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const hasPaginated = useRef(false);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(pages.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(pages.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, pages]);

	function detectPaginationGesture(
		e: Event,
		{ offset }: { offset: { x: number } }
	) {
		if (hasPaginated.current) return;
		let newPage = itemOffset;
		const threshold = xOffset / 2;
		if (offset.x < -threshold) {
			newPage = itemOffset + itemsPerPage;
		} else if (offset.x > threshold) {
			newPage = itemOffset - itemsPerPage;
		}

		if (newPage !== itemOffset) {
			hasPaginated.current = true;
			newPage = wrap(0, pages.length, newPage);
		}
		setDirection(offset.x < 0 ? 1 : -1);
		setItemOffset(newPage);
	}
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % pages.length;
		setItemOffset(newOffset);
	};
	return (
		<Fragment>
			<AnimatePresence initial={false} custom={direction}>
				<ProductsStyles.Border key={1}>
					<ProductsStyles.Main
						key={itemOffset}
						variants={variants}
						initial='enter'
						animate='active'
						exit='exit'
						drag='x'
						onDrag={detectPaginationGesture}
						onDragStart={() => (hasPaginated.current = false)}
						onDragEnd={() => (hasPaginated.current = true)}
						dragConstraints={{
							left: 0,
							right: 0,
							top: 0,
							bottom: 0
						}}
						custom={direction}>
						{currentItems &&
							currentItems.length > 0 &&
							currentItems.map(
								(product: Product, index: number) => {
									return (
										<Link
											key={index}
											href={`/products/${encodeURIComponent(
												product.name
											)}`}
											passHref
											replace>
											<ProductsStyles.Product
												initial={{
													opacity: 0,
													translateX: -50,
													translateY: -50
												}}
												transition={{
													duration: 0.5,
													delay: index * 0.2
												}}
												animate={{
													opacity: 1,
													translateX: 0,
													translateY: 0
												}}>
												<ProductsStyles.ProductImage
													src={product.image}
													alt={product.name}
												/>
												<ProductsStyles.ProductInfo>
													<h4>{product.name}</h4>
												</ProductsStyles.ProductInfo>
												<ProductsStyles.ProductAbout>
													<ProductsStyles.ProductPrice>
														<span>
															{new Intl.NumberFormat().format(
																product.price
															)}
															<sup>đ</sup>
														</span>
													</ProductsStyles.ProductPrice>
													<li>
														<span>
															Đã bán{" "}
															{product.saleCount}
														</span>
													</li>
												</ProductsStyles.ProductAbout>
											</ProductsStyles.Product>
										</Link>
									);
								}
							)}
					</ProductsStyles.Main>
				</ProductsStyles.Border>
				<PaginationBoxView
					disableBreakLabel
					pageRangeDisplayed={0}
					CustomUl={CustomUl}
					CustomLabel={(props: any) => (
						<MiddleComponent
							{...props}
							customIdLabel={itemOffset / itemsPerPage}
						/>
					)}
					NextLabel={(props: any) => (
						<NextLabel
							{...props}
							items_length={pages.length / itemsPerPage}
							item_select={itemOffset / itemsPerPage}
						/>
					)}
					onPageChange={handlePageClick}
					pageCount={pageCount}
					PreviousLabel={(props: any) => (
						<PrevLabel
							{...props}
							items_length={pages.length / itemsPerPage}
							item_select={itemOffset / itemsPerPage}
						/>
					)}
				/>
			</AnimatePresence>
		</Fragment>
	);
};

const MiddleComponent = (props: any) => {
	return <CustomLabel {...props} />;
};

const CustomUl = (props: any) => {
	return <ListsStyles.Lists>{props.children}</ListsStyles.Lists>;
};

const CustomLabel = (props: any) => {
	return (
		<ListsStyles.List
			selected={props.children === props.customIdLabel + 1}
			onClick={props.onClick}>
			{props.children || props.idLabel}
		</ListsStyles.List>
	);
};

const PrevLabel = (props: any) => {
	return (
		<ListsStyles.Button isdisabled={`${props.item_select === 0}`}>
			<MdNavigateBefore />
		</ListsStyles.Button>
	);
};

const NextLabel = (props: any) => {
	return (
		<ListsStyles.Button
			isdisabled={`${props.items_length - 1 === props.item_select}`}>
			<MdNavigateNext />
		</ListsStyles.Button>
	);
};
