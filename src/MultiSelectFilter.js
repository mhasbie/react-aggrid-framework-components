import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'underscore';
import s from 'underscore.string';


class MultiSelectFilter extends Component {
	constructor(props) {
		super(props);
        this.onChange = this.onChange.bind(this);

		this.state = {
			selectedValues: []
		};
	}

	isFilterActive() {
		const { selectedValues } = this.state;
        return !_.isEmpty(selectedValues);
    }

	doesFilterPass(params) {
		const { column } = this.props;
		const colDef = !_.isEmpty(column) ? column.colDef : this.props.colDef;
		const { field } = colDef;
		if (_.isNull(params.data[field]) || _.isUndefined(params.data[field])) return false;
		return !!this.state.selectedValues.find(selected => selected.key.toString() === params.data[field].toString());
    }

    getModel() {
        return { value: this.state.selectedValues };
    }

    setModel(model) {
        this.state.selectedValues = model ? model.value : [];
    }

	onChange(selectedValues) {
		this.changed(selectedValues);
    }

	onFloatingFilterChanged({ model }) {
		const selectedValues = model ? model.value : [];
		this.changed(selectedValues);
	}

	changed(selectedValues) {
        if (!_.isEqual(this.state.selectedValues, selectedValues)) {
            this.setState({
                selectedValues,
            }, () => {
                this.props.filterChangedCallback();
            });
        }
    }

	render() {
		const { selectedValues } = this.state;
		const { colDef, options } = this.props;
		const { field, headerName } = colDef;
		const fieldName = headerName || s.capitalize(field);
		const sets = _.keys(options).map(key => ({ key, name: options[key] }));
		return (
			<span className="multiselect-filter" style={{ width: '50px' }}>
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

module.exports = MultiSelectFilter;
export default MultiSelectFilter;
