'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapTypeahead = require('react-bootstrap-typeahead');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _underscore3 = require('underscore.string');

var _underscore4 = _interopRequireDefault(_underscore3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelectFloatingFilter = function (_Component) {
	_inherits(MultiSelectFloatingFilter, _Component);

	function MultiSelectFloatingFilter(props) {
		_classCallCheck(this, MultiSelectFloatingFilter);

		var _this = _possibleConstructorReturn(this, (MultiSelectFloatingFilter.__proto__ || Object.getPrototypeOf(MultiSelectFloatingFilter)).call(this, props));

		_this.onChange = _this.onChange.bind(_this);

		_this.state = {
			selectedValues: []
		};
		return _this;
	}

	_createClass(MultiSelectFloatingFilter, [{
		key: 'onChange',
		value: function onChange(selectedValues) {
			var _this2 = this;

			this.setState({
				selectedValues: selectedValues
			}, function () {
				_this2.props.onFloatingFilterChanged({ model: _this2.buildModel() });
			});
		}
	}, {
		key: 'onParentModelChanged',
		value: function onParentModelChanged(parentModel) {
			this.setState({
				selectedValues: !parentModel ? [] : parentModel.value
			});
		}
	}, {
		key: 'buildModel',
		value: function buildModel() {
			var selectedValues = this.state.selectedValues;

			return _underscore2.default.isEmpty[selectedValues] ? null : { value: selectedValues };
		}
	}, {
		key: 'render',
		value: function render() {
			var selectedValues = this.state.selectedValues;
			var _props = this.props,
			    column = _props.column,
			    options = _props.options;

			var colDef = column.colDef;
			var field = colDef.field,
			    headerName = colDef.headerName;

			var fieldName = headerName || _underscore4.default.capitalize(field);
			var sets = _underscore2.default.keys(options).map(function (key) {
				return { key: key, name: options[key] };
			});
			return _react2.default.createElement(
				'span',
				{ className: 'multiselect-floating-filter' },
				_react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
					labelKey: 'name',
					multiple: true,
					clearButton: true,
					bodyContainer: true,
					options: sets,
					selected: selectedValues,
					onChange: this.onChange,
					placeholder: 'Select ' + fieldName + '...'
				})
			);
		}
	}]);

	return MultiSelectFloatingFilter;
}(_react.Component);

module.exports = MultiSelectFloatingFilter;
exports.default = MultiSelectFloatingFilter;