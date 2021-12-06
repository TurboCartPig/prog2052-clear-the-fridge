import React from "react";
import "./tailwind.css";

type AmountFilterProps = {
	enabled: boolean;
	onChange: () => void;
};

type AmountFilterState = {
	isOpen: boolean;
};

class AmountFilter extends React.Component<
	AmountFilterProps,
	AmountFilterState
> {
	constructor(props: AmountFilterProps) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	render() {
		return (
			<div className="mt-3 bg-gray-200 w-full text-sm rounded-lg border">
				<div className="grid grid-cols-10 justify-items-center items-center h-12">
					<div className="ml-2 col-start-1 col-span-7 justify-self-start">
						Mengdefilter
					</div>
					<div className="grid col-start-10 w-full h-full col-span-1 justify-items-center items-center">
						<input
							type="checkbox"
							className="w-2/4 h-2/4 checked:bg-red-600 checked:border-transparent"
							checked={this.props.enabled}
							onChange={this.props.onChange}
						></input>
					</div>
				</div>
			</div>
		);
	}
}

export default AmountFilter;
