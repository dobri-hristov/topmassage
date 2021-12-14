import React from 'react'
import TestRenderer from 'react-test-renderer'
import Header from './index.js'

describe('Header component', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<Header />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})