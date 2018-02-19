# react-aggrid-framework-components

React wrapper of [leaflet-measure](https://github.com/ljagis/leaflet-measure)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

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
		
<div className="ag-theme-material" style={{ minHeight: '200px' }}>
	<AgGridReact {...options} />
</div>
```

### Props

#### options

Object containing `key => value` pair for Select and MultiSelect filters


# License

MIT License
