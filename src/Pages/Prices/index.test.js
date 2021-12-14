import React from 'react'
import TestRenderer from 'react-test-renderer'
import PricesPage from './index.js'

describe('Prices page', () => {
    test('should render correctly with no data', () => {
        const component = TestRenderer.create(<PricesPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})