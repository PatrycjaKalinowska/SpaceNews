import React from 'react';
import "./articles.scss";
import Wrapper from '../wrapper/wrapper';

const Articles = ( props ) => {

    return <section className='articles-section'>
        <Wrapper>
            <h1 className='articles-section-header'>What's up in Space?</h1>
            <div className='articles-container'>
                {props.children}
            </div>
            
        </Wrapper>
    </section>
}

export default Articles;