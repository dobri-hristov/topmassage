import React from 'react'
import TestRenderer from 'react-test-renderer'
import LoginPage from './index.js'

describe('Login page', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<LoginPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})