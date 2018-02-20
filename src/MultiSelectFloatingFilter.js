import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'underscore';
import s from 'underscore.string';

class MultiSelectFloatingFilter extends Component {
	constructor(props) {
		super(props);
        this.onChange = this.onChange.bind(this);

		this.state = {
			selectedValues: []
		};
	}

	onChange(selectedValues) {
        this.setState({
                selectedValues,
            },
            () => {
                this.props.onFloatingFilterChanged({ model: this.buildModel() });
            });
    }

    onParentModelChanged(parentModel) {
        this.setState({
            selectedValues: !parentModel ? [] : parentModel.value
        });
    }

	buildModel() {
		const { selectedValues } = this.state;
		return _.isEmpty[selectedValues] ? null : { value: selectedValues };
    }

	render() {
		const { selectedValues } = this.state;
		const { column, options } = this.props;
		const colDef = column.colDef;
		const { field, headerName } = colDef;
		const fieldName = headerName || s.capitalize(field);
		const sets = _.keys(options).map(key => ({ key, name: options[key] }));
		return (
			<span className="custom-floating-filter" >
				<Typeahead
					labelKey="name"
					multiple
					clearButton
					bodyContainer
					options={sets}
					selected={selectedValues}
					onChange={this.onChange}
					placeholder={`Select ${fieldName}...`}
				/>
			</span>
		);
	}
}

module.exports = MultiSelectFloatingFilter;
export default MultiSelectFloatingFilter;
