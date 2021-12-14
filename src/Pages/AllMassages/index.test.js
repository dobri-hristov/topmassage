import React from 'react'
import TestRenderer from 'react-test-renderer'
import MassagesPage from './index.js'

describe('Massages page', () => {
    test('should render correctly with no data', () => {
        const component = TestRenderer.create(<MassagesPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})