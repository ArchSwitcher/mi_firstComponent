import React, { Fragment } from 'react';
import PropPytes from 'prop-types';

const FirstApp = ( {greeting, subtitle} ) => {
    return (
        <>
            <h1>{greeting}</h1>
            {/* <pre> {JSON.stringify(greeting, null, 3)} </pre> */}
            <p> {subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    greeting: PropPytes.string.isRequired

}

FirstApp.defaultProps = {
subtitle: 'im a subtitle'
}

export default FirstApp;    