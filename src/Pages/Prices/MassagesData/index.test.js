import React from 'react'
import TestRenderer from 'react-test-renderer'
import PricesData from './index.js'

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}))

describe('Prices page/PricesData component', () => {
    test('should render correctly with no data', () => {
        const component = TestRenderer.create(<PricesData />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('should render correctly with data', () => {
        const component = TestRenderer.create(
            <PricesData path='classic' massage='класически' price='50' id='1' />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})