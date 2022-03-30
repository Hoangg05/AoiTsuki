import React from "react";
import BrandStyles from "components/Styles/Home/Brands/brand.styled";
import Link from "next/link";
import { useEffect } from "react";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? -1000 : 1000,
			opacity: 0
		};
	}
};

function BrandItemUI({ item, page, direction, paginate, itemsLength }: any) {
	useEffect(() => {
		const timeOut = () => {
			if (page < itemsLength) {
				paginate(1);
			} else {
				paginate(-1);
			}
		};
		const timeOutId = setTimeout(timeOut, 30000);
		return () => {
			clearTimeout(timeOutId);
		};
	}, [itemsLength, page, paginate]);
	return (
		<BrandStyles.Main
			key={page}
			custom={direction}
			variants={variants}
			initial='enter'
			animate='center'
			exit='exit'
			transition={{
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
			}}
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={1}
			onDragEnd={(e: any, { offset, velocity }: any) => {
				const swipe = swipePower(offset.x, velocity.x);
				if (swipe < -swipeConfidenceThreshold) {
					paginate(1);
				} else if (swipe > swipeConfidenceThreshold) {
					paginate(-1);
				}
			}}>
			<Link
				replace
				href={`/brands/${item.name.toLowerCase()}`}
				as={`/brands/${item.name.toLowerCase()}`}
				passHref>
				<BrandStyles.Brand draggable={false}>
					<BrandStyles.Image
						draggable={false}
						src={item.image}
						alt={item.name}
					/>
					<BrandStyles.InfoBrand>
						<h1>{item.name}</h1>
						<BrandStyles.ListInfo>
							<li>{item.description}</li>
							<li>Lĩnh vực: {item.models.join(", ") || "N/A"}</li>
						</BrandStyles.ListInfo>
					</BrandStyles.InfoBrand>
				</BrandStyles.Brand>
			</Link>
		</BrandStyles.Main>
	);
}

export default BrandItemUI;
