import { useState } from "react";
import { wrap } from "popmotion";
import { AnimatePresence } from "framer-motion";
import BrandItemUI from "./brand.ui";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PaginateStyles from "components/Styles/Home/Brands/paginate.styled";

export const Paginate = ({ brands }: any) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const itemIndex = wrap(0, brands.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<PaginateStyles.Main>
			<PaginateStyles.Button
				customs={{ left: 40 }}
				whileHover={{ y: "-50%", scale: 1.1 }}
				whileTap={{ y: "-50%", scale: 0.9 }}
				initial={{ y: "-50%" }}
				exit={{ y: "-50%" }}
				onClick={() => paginate(-1)}>
				<MdNavigateBefore />
			</PaginateStyles.Button>
			<AnimatePresence initial={false} custom={direction}>
				<BrandItemUI
					itemsLength={brands.length || 0}
					page={page}
					direction={direction}
					paginate={paginate}
					item={brands[itemIndex]}
				/>
			</AnimatePresence>
			<PaginateStyles.Button
				customs={{ right: 40 }}
				whileHover={{ y: "-50%", scale: 1.1 }}
				whileTap={{ y: "-50%", scale: 0.9 }}
				initial={{ y: "-50%" }}
				exit={{ y: "-50%" }}
				onClick={() => paginate(1)}>
				<MdNavigateNext />
			</PaginateStyles.Button>
		</PaginateStyles.Main>
	);
};
