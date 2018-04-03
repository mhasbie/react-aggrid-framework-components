# react-aggrid-framework-components

[![travis build](https://img.shields.io/travis/mhasbie/react-aggrid-framework-components.svg?style=plastic)](https://travis-ci.org/mhasbie/react-aggrid-framework-components)
[![version](https://img.shields.io/npm/v/react-aggrid-framework-components.svg?style=plastic)](http://npm.im/react-aggrid-framework-components)
[![MIT License](https://img.shields.io/npm/l/react-aggrid-framework-components.svg?style=plastic)](http://opensource.org/licenses/MIT)
[![dependencies](https://img.shields.io/david/mhasbie/react-aggrid-framework-components.svg?style=plastic)](https://david-dm.org/mhasbie/react-aggrid-framework-components)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-aggrid-framework-components.svg?style=plastic)](https://david-dm.org/mhasbie/react-aggrid-framework-components?type=peer)
[![downloads](https://img.shields.io/npm/dt/react-aggrid-framework-components.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-aggrid-framework-components&from=2018-01-01)
[![issues](https://img.shields.io/github/issues/mhasbie/react-aggrid-framework-components.svg?style=plastic)](https://github.com/mhasbie/react-aggrid-framework-components/issues)

[Ag-Grid](https://www.ag-grid.com/) custom built framework components for [ag-grid-react](https://www.npmjs.com/package/ag-grid-react).

Select, Multi-select filter components for Ag-Grid.


## Installation

### Install via NPM

```bash
npm install --save react-aggrid-framework-components
```

Install dependencies.

```bash
npm install --save react-bootstrap-typeahead underscore underscore.string
```

Include css files from the ` src\css ` folder in your project

```html
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="Typeahead.css">
<link rel="stylesheet" href="ClearButton.css">
<link rel="stylesheet" href="Loader.css">
<link rel="stylesheet" href="Token.css">
```

## Usage example

```javascript
import { AgGridReact } from 'ag-grid-react';
import { SelectFilter, SelectFloatingFilter, MultiSelectFilter, MultiSelectFloatingFilter } from 'react-aggrid-framework-components';

const bool = {
	true: 'Yes',
	false: 'No'
};

const fruit = {
	lemon: 'Lemon',
	orange: 'Orange',
	grapefruit: 'Grapefruit',
	apple: 'Apple',
	mangosteen: 'Mangosteen',
	durian: 'Durian',
};

const options = {
	domLayout: 'autoHeight',
	enableColResize: true,
	enableFilter: true,
	columnDefs: [
		{
			field: 'fruit',
			headerName: 'Fruit',
			filter: 'multiSelectFilter',
			filterParams: { 
				options: fruit
			},
			floatingFilterComponent: 'multiSelectFloatingFilter',
			floatingFilterComponentParams: { 
				options: fruit,
				suppressFilterButton: true
			}
		},
		{
			field: 'citrus',
			headerName: 'Citrus ?',
			valueFormatter: ({ value }) => (bool[value]),
			filter: 'selectFilter',
			filterParams: {
				options: bool
			},
			floatingFilterComponent: 'selectFloatingFilter',
			floatingFilterComponentParams: {
				options: bool,
				suppressFilterButton: true
			}
		}
	],
	rowData: [
		{ fruit: 'lemon', citrus: true },
		{ fruit: 'orange', citrus: true },
		{ fruit: 'grapefruit', citrus: true },
		{ fruit: 'apple', citrus: false },
		{ fruit: 'mangosteen', citrus: false },
		{ fruit: 'durian', citrus: false },
	],
	gridOptions: {
		context: {
			componentParent: this,
		},
		floatingFilter: true
	},
	frameworkComponents: {
		selectFilter: SelectFilter,
		selectFloatingFilter: SelectFloatingFilter,
		multiSelectFilter: MultiSelectFilter,
		multiSelectFloatingFilter: MultiSelectFloatingFilter,
	}
};
		
<div className="ag-theme-material" style={{ width: '100%', minHeight: '200px' }}>
	<AgGridReact {...options} />
</div>
```

### Props

#### options

Object containing ` key => value ` pair for Select and MultiSelect filters (refer usage example).


# License

MIT License
