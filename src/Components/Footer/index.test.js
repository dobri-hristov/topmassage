import React from 'react'
import TestRenderer from 'react-test-renderer'
import Footer from './index.js'

describe('Footer component', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(
            <Footer />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})