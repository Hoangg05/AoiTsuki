import IntroStyles from "components/Styles/Intro/index.styled";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingUI from "../Loading/Loading.ui";

const ballVariants = {
	initial: {
		width: "125%",
		height: "125%"
	},
	animate: {
		width: "fit-content",
		height: "fit-content",
		rotate: 360 * 4,
		transition: {
			duration: 5,
			ease: "easeInOut",
			stiffness: 2000
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 2
		}
	}
};

const moveBallVariants = {
	initial: {
		x: 0,
		y: 0,
		width: "fit-content",
		height: "fit-content",
		rotate: 360 * 4
	},
	animate: {
		rotate: 360 * 4,
		width: "fit-content",
		height: "fit-content",
		x: [0, -150, 150, 0],
		y: [0, 0, 0, 0, -100],
		transition: {
			duration: 3,
			ease: "easeInOut",
			stiffness: 2000
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 2
		}
	}
};

const textVariants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 2
		}
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 6,
			ease: "easeInOut",
			stiffness: 2000
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 2
		}
	}
};

const IntroUI: NextPage = () => {
	const [lang, setLang] = useState<any>(null);
	const [spinDone, setSpinDone] = useState<boolean>(false);
	const [doneAnimation, setDoneAnimation] = useState<boolean>(false);
	const { language, translations } = useSelector(
		(state: any) => state.language
	);
	useEffect(() => {
		if (language) {
			setLang(translations[language].intro);
		}
	}, [language, translations]);
	if (!lang) return <LoadingUI />;
	return (
		<IntroStyles.Main>
			<Head>
				<title>{lang.header.title}</title>
			</Head>
			<AnimatePresence>
				{!doneAnimation && (
					<Fragment>
						<IntroStyles.BlockBall
							onAnimationComplete={(): void => {
								setSpinDone(true);
							}}
							initial='initial'
							animate='animate'
							exit='exit'
							variants={
								!spinDone ? ballVariants : moveBallVariants
							}>
							<IntroStyles.Ball>
								<Image
									src='/logo.jpg'
									alt={`Logo ${lang.title}`}
									priority={true}
									width={200}
									height={200}
									draggable={false}
								/>
							</IntroStyles.Ball>
						</IntroStyles.BlockBall>
						{spinDone && (
							<IntroStyles.Title
								initial='initial'
								animate='animate'
								exit='exit'
								variants={textVariants}
								onAnimationComplete={(): void => {
									setTimeout(() => {
										setDoneAnimation(true);
									}, 3000);
								}}>
								{lang.body.title}
							</IntroStyles.Title>
						)}
					</Fragment>
				)}
			</AnimatePresence>
		</IntroStyles.Main>
	);
};

export default IntroUI;
