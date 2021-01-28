import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import Category from '../../components/Category';
import CardProducts from '../../components/Products/CardProducts';

const Products = () => {

    return (
        <div>

            <main className="products">
                <header>
                    <h2>Produtos</h2>
                    <p>Confira nossas principais promoções!</p>
                    <hr />
                </header>
                <div className="products-section">
                    <div className="section-1">
                        <Category />
                    </div>
                    <div className="section-2">
                        <CardProducts />
                    </div>
                </div>

            </main>
            
        </div>
    )
}

export default Products;
