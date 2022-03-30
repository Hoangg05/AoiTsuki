import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PageView = (props: any) => {
	let { pageClassName, pageLinkClassName } = props;
	const {
		page,
		selected,
		activeClassName,
		activeLinkClassName,
		getEventListener,
		pageSelectedHandler,
		extraAriaContext,
		pageLabelBuilder,
		CustomLabel
	}: any = props;

	let ariaLabel =
		props.ariaLabel ||
		"Page " + page + (extraAriaContext ? " " + extraAriaContext : "");
	let ariaCurrent = null;

	if (selected) {
		ariaCurrent = "page";

		ariaLabel = props.ariaLabel || "Page " + page + " is your current page";

		if (typeof pageClassName !== "undefined") {
			pageClassName = pageClassName + " " + activeClassName;
		} else {
			pageClassName = activeClassName;
		}

		if (typeof pageLinkClassName !== "undefined") {
			if (typeof activeLinkClassName !== "undefined") {
				pageLinkClassName =
					pageLinkClassName + " " + activeLinkClassName;
			}
		} else {
			pageLinkClassName = activeLinkClassName;
		}
	}

	return (
		<Fragment>
			{CustomLabel ? (
				<CustomLabel
					onClick={pageSelectedHandler}
					{...getEventListener(pageSelectedHandler)}
					selected={selected}>
					{pageLabelBuilder(page)}
				</CustomLabel>
			) : (
				<li
					onClick={pageSelectedHandler}
					{...getEventListener(pageSelectedHandler)}>
					{pageLabelBuilder(page)}
				</li>
			)}
		</Fragment>
	);
};

PageView.propTypes = {
	pageSelectedHandler: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
	pageClassName: PropTypes.string,
	pageLinkClassName: PropTypes.string,
	activeClassName: PropTypes.string,
	activeLinkClassName: PropTypes.string,
	extraAriaContext: PropTypes.string,
	href: PropTypes.string,
	ariaLabel: PropTypes.string,
	page: PropTypes.number.isRequired,
	getEventListener: PropTypes.func.isRequired,
	pageLabelBuilder: PropTypes.func.isRequired,
	rel: PropTypes.string,
	CustomLabel: PropTypes.func
};

export default PageView;
