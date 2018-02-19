'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore.string');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFilter = function (_Component) {
	_inherits(SelectFilter, _Component);

	function SelectFilter(props) {
		_classCallCheck(this, SelectFilter);

		var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

		_this.onChange = _this.onChange.bind(_this);

		_this.state = {
			selectedValue: ''
		};
		return _this;
	}

	_createClass(SelectFilter, [{
		key: 'isFilterActive',
		value: function isFilterActive() {
			var selectedValue = this.state.selectedValue;

			return !_.isEmpty(selectedValue);
		}
	}, {
		key: 'doesFilterPass',
		value: function doesFilterPass(params) {
			var column = this.props.column;

			var colDef = !_.isEmpty(column) ? column.colDef : this.props.colDef;
			var field = colDef.field;

			if (_.isNull(params.data[field]) || _.isUndefined(params.data[field])) return false;
			return params.data[field].toString() === this.state.selectedValue.toString();
		}
	}, {
		key: 'getModel',
		value: function getModel() {
			return { value: this.state.selectedValue };
		}
	}, {
		key: 'setModel',
		value: function setModel(model) {
			this.state.selectedValue = model ? model.value : '';
		}
	}, {
		key: 'onChange',
		value: function onChange(event) {
			var newValue = event.target.value;
			this.changed(newValue);
		}
	}, {
		key: 'onFloatingFilterChanged',
		value: function onFloatingFilterChanged(_ref) {
			var model = _ref.model;

			var newValue = model ? model.value : '';
			this.changed(newValue);
		}
	}, {
		key: 'changed',
		value: function changed(newValue) {
			var _this2 = this;

			if (this.state.selectedValue !== newValue) {
				this.setState({
					selectedValue: newValue
				}, function () {
					_this2.props.filterChangedCallback();
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var selectedValue = this.state.selectedValue;
			var _props = this.props,
			    colDef = _props.colDef,
			    options = _props.options;
			var field = colDef.field,
			    headerName = colDef.headerName;

			var fieldName = headerName || _underscore2.default.capitalize(field);
			var placeholderClass = !selectedValue ? 'placeholder' : '';
			return _react2.default.createElement(
				'select',
				{ placeholder: 'Select ' + fieldName + '...', className: 'select-filter ' + placeholderClass, value: selectedValue, onChange: this.onChange },
				_react2.default.createElement(
					'option',
					{ value: '', className: 'placeholder' },
					'Select ',
					fieldName,
					'...'
				),
				_.keys(options).map(function (key, i) {
					return _react2.default.createElement(
						'option',
						{ key: i, value: key },
						options[key]
					);
				})
			);
		}
	}]);

	return SelectFilter;
}(_react.Component);

module.exports = SelectFilter;
exports.default = SelectFilter;