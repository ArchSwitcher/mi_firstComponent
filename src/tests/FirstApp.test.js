// import { render } from "@testing-library/react";
import React from 'react';
import { shallow } from 'enzyme/build';
import '@testing-library/jest-dom';
import FirstApp from "../FirstApp"


describe('make tests in component FirstApp', () => {
    // test('should be retrun message "Hi i\'m Arch Switcher" ', () => {
    // const greeting = 'Hi i\'m Arch Switcher';
    // const { getByText } = render( < FirstApp greeting = { greeting }
    //     /> );
    //     expect(getByText(greeting)).toBeInTheDocument;
    // });
    // });

    test('should be show <FirstApp /> success', () => {

        // shallow es similar a render pero da otras opciones interesantes simular clicks y otras opciones;
        // const greeting = 'Hi i\'m Arch Switcher';

        const wrapper = shallow( < FirstApp greeting = 'Hi im Arch Switcher' / > );
        expect(wrapper).toMatchSnapshot();

    });
});