'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _underscore3 = require('underscore.string');

var _underscore4 = _interopRequireDefault(_underscore3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { FormControl } from 'react-bootstrap';


var SelectFloatingFilter = function (_Component) {
	_inherits(SelectFloatingFilter, _Component);

	function SelectFloatingFilter(props) {
		_classCallCheck(this, SelectFloatingFilter);

		var _this = _possibleConstructorReturn(this, (SelectFloatingFilter.__proto__ || Object.getPrototypeOf(SelectFloatingFilter)).call(this, props));

		_this.onChange = _this.onChange.bind(_this);

		_this.state = {
			selectedValue: ''
		};
		return _this;
	}

	_createClass(SelectFloatingFilter, [{
		key: 'onChange',
		value: function onChange(event) {
			var _this2 = this;

			this.setState({
				selectedValue: event.target.value
			}, function () {
				_this2.props.onFloatingFilterChanged({ model: _this2.buildModel() });
			});
		}
	}, {
		key: 'onParentModelChanged',
		value: function onParentModelChanged(parentModel) {
			this.setState({
				selectedValue: !parentModel ? '' : parentModel.value
			});
		}
	}, {
		key: 'buildModel',
		value: function buildModel() {
			var selectedValue = this.state.selectedValue;

			return _underscore2.default.isEmpty[selectedValue] ? null : { value: selectedValue.toString() };
		}
	}, {
		key: 'render',
		value: function render() {
			var selectedValue = this.state.selectedValue;
			var _props = this.props,
			    column = _props.column,
			    options = _props.options;

			var colDef = column.colDef;
			var field = colDef.field,
			    headerName = colDef.headerName;

			var fieldName = headerName || _underscore4.default.capitalize(field);
			var placeholderClass = !selectedValue ? 'placeholder' : '';
			return _react2.default.createElement(
				'select',
				{ placeholder: 'Select ' + fieldName + '...', className: 'form-control select-filter ' + placeholderClass, value: selectedValue, onChange: this.onChange, style: { marginTop: '10px' } },
				_react2.default.createElement(
					'option',
					{ value: '', className: 'placeholder' },
					'Select ',
					fieldName,
					'...'
				),
				_underscore2.default.keys(options).map(function (key, i) {
					return _react2.default.createElement(
						'option',
						{ key: i, value: key },
						options[key]
					);
				})
			);
		}
	}]);

	return SelectFloatingFilter;
}(_react.Component);

module.exports = SelectFloatingFilter;
exports.default = SelectFloatingFilter;