import React from 'react'
import TestRenderer from 'react-test-renderer'
import ErrorPage from './index.js'

describe('Error page', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<ErrorPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})