import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Config } from "store/slices/seo.slice";

const brands = [
	{
		name: "Thất Nguyệt",
		image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/276984487_312201110841010_2174806510696609215_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=kFjhCZtvMsoAX_35cSJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLDQj9lSqeHsNOthcxwVq-nrv2U1-wzC8fYg_IwTOk-tg&oe=626ADA1B",
		description:
			"Một thương hiệu đến từ Trung Quốc, với chất lượng vải mềm mịn, cầm nặng tay cùng với màu sắc trẻ trung và năng động, Thất Nguyệt được nhiều giới trẻ yêu thích và tin dùng.",
		url: "https://www.nike.com/",
		models: ["Quần áo", "Phụ kiện"],
		location: null
	}
];

export async function getStaticPaths() {
	const paths = brands.map((brand) => ({
		params: {
			brand: brand.name.toLowerCase()
		}
	}));
	return {
		paths,
		fallback: true
	};
}

export async function getStaticProps({ params }: any): Promise<any> {
	const { brand } = params;
	const brandItem = brands.find(
		(item: any) => item.name.toLowerCase() === brand
	);
	return {
		props: {
			brandItem,
			brand
		}
	};
}

function BrandPreview(props: any) {
	const { brandItem, brand, Config } = props;
	const [set, isSet] = useState<boolean>(false);
	useEffect(() => {
		if (!set) {
			Config(brandItem);
			isSet(true);
		}
	}, [Config, brandItem, set]);
	const myLoader = ({ src }: { src: string }) => {
		if (!brandItem) return "/logo.jpg";
		return brandItem.image;
	};
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
					<div style={{ position: "relative", minHeight: "100vh" }}>
						<Image
							priority
							unoptimized={true}
							layout='fill'
							loader={myLoader}
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

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
	Config
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandPreview);
