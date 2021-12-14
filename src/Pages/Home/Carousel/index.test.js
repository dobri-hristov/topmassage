import React from 'react'
import TestRenderer from 'react-test-renderer'
import CustomCarousel from './index.js'

describe('Prices page/CustomCarousel component', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<CustomCarousel />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})