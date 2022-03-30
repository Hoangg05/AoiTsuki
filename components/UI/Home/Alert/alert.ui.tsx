import AlertStyles from "components/Styles/Home/Alert/alert.styled";
import Link from "next/link";
import React from "react";

const marqueeVariants = {
	animate: {
		left: ["120%", "-40%"],
		transition: {
			left: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 35,
				ease: "linear"
			}
		}
	}
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.2
		}
	}
};

function AlertUI() {
	const alerts: any[] = [];
	return (
		<AlertStyles.Main variants={stagger}>
			{alerts && alerts.length ? (
				alerts.map((item: any, index: number) => (
					<AlertStyles.Alert
						key={index}
						variants={marqueeVariants}
						animate='animate'>
						<Link replace href={item.link} as={item.link} passHref>
							{item.title.vn}
						</Link>
					</AlertStyles.Alert>
				))
			) : (
				<AlertStyles.Alert variants={marqueeVariants} animate='animate'>
					<Link replace href='/' as='/' passHref>
						Khum có thông báo mới :&gt;
					</Link>
				</AlertStyles.Alert>
			)}
		</AlertStyles.Main>
	);
}

export default AlertUI;
