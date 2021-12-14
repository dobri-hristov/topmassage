import React from 'react'
import TestRenderer from 'react-test-renderer'
import AboutPage from './index.js'


describe('About page', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<AboutPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})