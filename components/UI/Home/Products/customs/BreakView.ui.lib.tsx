import React, { Fragment } from "react";
import PropTypes from "prop-types";

const BreakView = (props: any) => {
	const { breakLabel, CustomLabel, breakHandler, getEventListener } = props;

	return (
		<Fragment>
			{CustomLabel ? (
				<CustomLabel idLabel={breakLabel} />
			) : (
				<li
					onKeyPress={breakHandler}
					{...getEventListener(breakHandler)}>
					{breakLabel}
				</li>
			)}
		</Fragment>
	);
};

BreakView.propTypes = {
	breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	breakClassName: PropTypes.string,
	breakLinkClassName: PropTypes.string,
	breakHandler: PropTypes.func.isRequired,
	getEventListener: PropTypes.func.isRequired,
	CustomLabel: PropTypes.func
};

export default BreakView;
