import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// Realizo mi clase
class FiltrableProductTable extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h4> PRODUCT SEARCH APP</h4>
                </div>
                <SearchBar />
                <br />
                <ProductTable />
            </div>
        )
    }
}

export default FiltrableProductTable;