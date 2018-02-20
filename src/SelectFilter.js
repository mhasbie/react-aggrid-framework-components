import React, { Component } from 'react';
import _ from 'underscore';
import s from 'underscore.string';

class SelectFilter extends Component {
	constructor(props) {
		super(props);
        this.onChange = this.onChange.bind(this);

		this.state = {
			selectedValue: ''
		};
	}

	isFilterActive() {
		const { selectedValue } = this.state;
		return !_.isEmpty(selectedValue);
    }

	doesFilterPass(params) {
		const { column } = this.props;
		const colDef = !_.isEmpty(column) ? column.colDef : this.props.colDef;
		const { field } = colDef;
		if (_.isNull(params.data[field]) || _.isUndefined(params.data[field])) return false;
		return params.data[field].toString() === this.state.selectedValue.toString();
    }

    getModel() {
        return { value: this.state.selectedValue };
    }

    setModel(model) {
        this.state.selectedValue = model ? model.value : '';
    }

	onChange(event) {
        const newValue = event.target.value;
        this.changed(newValue);
    }

	onFloatingFilterChanged({ model }) {
		const newValue = model ? model.value : '';
		this.changed(newValue);
	}

	changed(newValue) {
		if (this.state.selectedValue !== newValue) {
            this.setState({
                selectedValue: newValue
            }, () => {
                this.props.filterChangedCallback();
            });
        }
	}

	render() {
		const { selectedValue } = this.state;
		const { colDef, options } = this.props;
		const { field, headerName } = colDef;
		const fieldName = headerName || s.capitalize(field);
		const placeholderClass = !selectedValue ? 'placeholder' : '';
		return (
			<select placeholder={`Select ${fieldName}...`} className={`form-control select-filter ${placeholderClass}`} value={selectedValue} onChange={this.onChange} >
				<option value="" className="placeholder">Select { fieldName }...</option>
				{ _.keys(options).map((key, i) => (<option key={i} value={key}>{ options[key] }</option>)) }
			</select>
		);
	}
}

module.exports = SelectFilter;
export default SelectFilter;
