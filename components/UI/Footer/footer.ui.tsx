import FooterStyles from "components/Styles/Footer/footer.styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { MdAdminPanelSettings, MdCreate } from "react-icons/md";

export const FooterUI = (props: any) => {
	return (
		<FooterStyles.Main>
			<FooterStyles.Part>
				<FooterStyles.CImage>
					<Link href='/' as='/' passHref replace>
						<a>
							<Image
								src='/logo.jpg'
								alt='Logo'
								layout='fill'
								draggable='false'
							/>
						</a>
					</Link>
				</FooterStyles.CImage>
			</FooterStyles.Part>
			<FooterStyles.Part>
				<FooterStyles.Table>
					<FooterStyles.Row>
						<h2>Thông tin</h2>
						<div>
							Website này được tạo bởi{" "}
							<FooterStyles.CLink
								href='http://www.facebook.com/t.h.h.05'
								target='_blank'
								rel='noopener noreferrer'>
								@Huy Hoang
								<MdCreate />
							</FooterStyles.CLink>
							.
						</div>
						<div>
							Quyền sở hữu, quản lý website bởi{" "}
							<FooterStyles.CLink
								href='https://www.facebook.com/blue.moon.1024.1428'
								target='_blank'
								rel='noopener noreferrer'>
								@Blue Moon
								<MdAdminPanelSettings />
							</FooterStyles.CLink>
							.
						</div>
					</FooterStyles.Row>
					<FooterStyles.Row>
						<h2>Liên hệ</h2>
						<FooterStyles.DBGroup>
							<div>
								<p>Hoangg</p>
								<FooterStyles.CLink
									href='mailto:thh241005@gmail.com'
									target='_blank'
									rel='noopener noreferrer'>
									thh241005@gmail.com
								</FooterStyles.CLink>
							</div>
							<div>
								<p>Blue Moon</p>
								<FooterStyles.CLink
									href='mailto:bluewhale1428@gmail.com'
									target='_blank'
									rel='noopener noreferrer'>
									bluewhale1428@gmail.com
								</FooterStyles.CLink>
							</div>
						</FooterStyles.DBGroup>
					</FooterStyles.Row>
					<FooterStyles.Row>
						<h2>Mạng xã hội</h2>
						<FooterStyles.DBGroup>
							<div>
								<p>Huy Hoàng</p>
								<FooterStyles.CLink
									href='http://www.facebook.com/t.h.h.05'
									target='_blank'
									rel='noopener noreferrer'>
									http://www.facebook.com/t.h.h.05
								</FooterStyles.CLink>
							</div>
							<div>
								<p>Blue Moon</p>
								<FooterStyles.CLink
									href='http://www.facebook.com/blue.moon.1024.1428'
									target='_blank'
									rel='noopener noreferrer'>
									http://www.facebook.com/blue.moon.1024.1428
								</FooterStyles.CLink>
							</div>
						</FooterStyles.DBGroup>
					</FooterStyles.Row>
				</FooterStyles.Table>
			</FooterStyles.Part>
		</FooterStyles.Main>
	);
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FooterUI);
