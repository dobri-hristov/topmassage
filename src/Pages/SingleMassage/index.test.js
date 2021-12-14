import React from 'react'
import TestRenderer from 'react-test-renderer'
import MassagePage from './index.js'

describe('Massage page', () => {
    test('should render correctly with no data', () => {
        const component = TestRenderer.create(<MassagePage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})