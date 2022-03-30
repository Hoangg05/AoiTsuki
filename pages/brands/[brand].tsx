import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
const brands = [
	{
		name: "Nike",
		image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA",
		description:
			"Nike is a multinational corporation headquartered in Oak Park, Illinois, United States. It is the world's largest sports brand, with revenues in excess of $1.3 billion. The company was founded in 1971 by Michael Jordan and Bill Belichick, and is headquartered in Oak Park, Illinois.",
		url: "https://www.nike.com/",
		models: [
			"Giày dép",
			"Quần áo",
			"Phụ kiện",
			"Trang thiết bị",
			"Dịch vụ liên quan đến thể thao"
		],
		location: "gần Beaverton, Oregon, tại khu vực đô thị Portland"
	}
];

function BrandPreview() {
	const router = useRouter();
	const { brand }: any = router.query;
	const brandItem = brands.find(
		(item: any) => item.name.toLowerCase() === brand
	);
	return (
		<Fragment>
			{brandItem && (
				<Head>
					<title>
						{brand.charAt(0).toUpperCase() + brand.slice(1)} Brands
						| Aoi Tsuki
					</title>
					<meta name='description' content={brandItem.name} />
					<meta property='og:title' content={brandItem.name} />
					<meta
						property='og:description'
						content={brandItem.description}
					/>
					<meta property='og:image' content={brandItem.image} />
					<meta
						property='og:url'
						content={`https://aoitsuki.com/brands/${brand}`}
					/>
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='Aoi Tsuki' />
				</Head>
			)}
			<div>
				{brandItem && (
					<div>
						<img
							src={brandItem.image}
							alt={brandItem.name}
							draggable='false'
						/>
						<h1>{brandItem.name}</h1>
					</div>
				)}
			</div>
			<Link replace href='/' as='/' passHref>
				Return
			</Link>
		</Fragment>
	);
}

export default BrandPreview;
