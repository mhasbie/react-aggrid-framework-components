import React, { Component } from 'react';
// import { FormControl } from 'react-bootstrap';
import _ from 'underscore';
import s from 'underscore.string';

class SelectFloatingFilter extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);

		this.state = {
			selectedValue: ''
		};
	}

	onChange(event) {
        this.setState({
                selectedValue: event.target.value
            },
            () => {
                this.props.onFloatingFilterChanged({ model: this.buildModel() });
            });
    }

	onParentModelChanged(parentModel) {
        this.setState({
            selectedValue: !parentModel ? '' : parentModel.value
        });
    }

	buildModel() {
		const { selectedValue } = this.state;
		return _.isEmpty[selectedValue] ? null : { value: selectedValue.toString() };
    }

	render() {
		const { selectedValue } = this.state;
		const { column, options } = this.props;
		const colDef = column.colDef;
		const { field, headerName } = colDef;
		const fieldName = headerName || s.capitalize(field);
		const placeholderClass = !selectedValue ? 'placeholder' : '';
		return (
			<select placeholder={`Select ${fieldName}...`} className={`form-control select-filter ${placeholderClass}`} value={selectedValue} onChange={this.onChange} style={{ marginTop: '10px' }} >
				<option value="" className="placeholder">Select { fieldName }...</option>
				{ _.keys(options).map((key, i) => (<option key={i} value={key}>{ options[key] }</option>)) }
			</select>
		);
	}
}

module.exports = SelectFloatingFilter;
export default SelectFloatingFilter;
