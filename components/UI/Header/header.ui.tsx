import Image from "next/image";
import Flags from "country-flag-icons/react/3x2";
import { FiShoppingCart } from "react-icons/fi";
import { BsGear, BsFillBellFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import HeaderStyles from "components/Styles/Header/header.styled";
import { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { changeLanguage } from "store/slices/language.slice";

type User = {
	name?: string | null;
	avt?: string | null;
};

const user: User = {};

const HeaderUI = (props: any) => {
	const { lang, changeLanguage } = props;
	const [[select1, select2], isSelect] = useState<any[]>([false, false]);
	return (
		<HeaderStyles.Main>
			<div className='ghost' />
			<Link replace href='/' passHref>
				<HeaderStyles.Logo
					title={
						lang.translations[lang.language].header.header.title
					}>
					<HeaderStyles.ImageItem>
						<Image
							layout='fill'
							src='/logo.jpg'
							alt={`Logo ${
								lang.translations[lang.language].header.header
									.title
							}`}
							priority={true}
							draggable={false}
						/>
					</HeaderStyles.ImageItem>
					<h1>
						{lang.translations[lang.language].header.header.title}
					</h1>
				</HeaderStyles.Logo>
			</Link>
			<HeaderStyles.Select onClick={() => isSelect([!select1, select2])}>
				<HeaderStyles.SelectBox>
					<HeaderStyles.ItemSelectBox noMargin noHover>
						{lang.language === "vn" ? <Flags.VN /> : <Flags.CN />}
					</HeaderStyles.ItemSelectBox>
					{select1 && (
						<HeaderStyles.SelectItems
							customs={{
								left: -23
							}}>
							<HeaderStyles.ItemSelectBox
								onClick={() => changeLanguage("vn")}>
								<Flags.VN />
								<p>Vietnam</p>
							</HeaderStyles.ItemSelectBox>
							<HeaderStyles.ItemSelectBox
								onClick={() => changeLanguage("cn")}>
								<Flags.CN />
								<p>Chinese</p>
							</HeaderStyles.ItemSelectBox>
						</HeaderStyles.SelectItems>
					)}
				</HeaderStyles.SelectBox>
			</HeaderStyles.Select>
			<div className='ghost' />
			<HeaderStyles.Group>
				{user && user.name ? (
					<HeaderStyles.User
						hasUser={(user && user.name) !== undefined}
						onClick={() => isSelect([select1, !select2])}>
						<HeaderStyles.ImageItem>
							<Image
								layout='fill'
								src={user.avt || "/logo.jpg"}
								alt={`Avatar user ${user.name}`}
								priority={true}
								draggable={false}
							/>
						</HeaderStyles.ImageItem>
						<h4>{user.name}</h4>
						{select2 && (
							<HeaderStyles.SelectItems
								customs={{
									top: "115%",
									padding: "5px"
								}}>
								<HeaderStyles.Group row3>
									<HeaderStyles.ItemSelectBox
										customs={{ height: "100%" }}>
										<HeaderStyles.Item
											customs={{
												width: "fit-content",
												"& svg:nth-child(2)": {
													position: "absolute",
													top: 5,
													right: 2,
													margin: 0,
													width: "fit-content",
													height: "fit-content",
													color: "#ff7900"
												}
											}}>
											<FiShoppingCart />
											<BsFillBellFill />
										</HeaderStyles.Item>
										<HeaderStyles.Item
											customs={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												"& svg": {
													marginRight: "0 !important"
												}
											}}>
											<h4>Giỏ hàng</h4>
										</HeaderStyles.Item>
									</HeaderStyles.ItemSelectBox>
									<HeaderStyles.ItemSelectBox
										customs={{ height: "100%" }}>
										<HeaderStyles.Item
											customs={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "fit-content",
												"& svg": {
													marginRight: "0 !important"
												}
											}}>
											<BsGear />
										</HeaderStyles.Item>
										<HeaderStyles.Item
											customs={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												"& svg": {
													marginRight: "0 !important"
												}
											}}>
											<h4>Cài đặt</h4>
										</HeaderStyles.Item>
									</HeaderStyles.ItemSelectBox>
									<HeaderStyles.ItemSelectBox
										customs={{ height: "100%" }}>
										<HeaderStyles.Item
											customs={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "fit-content",
												"& svg": {
													marginRight: "0 !important"
												}
											}}>
											<GoSignOut />
										</HeaderStyles.Item>
										<HeaderStyles.Item
											customs={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center"
											}}>
											<h4>Đăng xuất</h4>
										</HeaderStyles.Item>
									</HeaderStyles.ItemSelectBox>
								</HeaderStyles.Group>
							</HeaderStyles.SelectItems>
						)}
					</HeaderStyles.User>
				) : (
					<HeaderStyles.User>
						<Link href='/signin' as='/signin' passHref>
							Đăng nhập đuy :3
						</Link>
					</HeaderStyles.User>
				)}
			</HeaderStyles.Group>
			<div className='ghost' />
		</HeaderStyles.Main>
	);
};

const mapStateToProps = (state: any) => ({
	lang: state.language
});

const mapDispatchToProps = {
	changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUI);
