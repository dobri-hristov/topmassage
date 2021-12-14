import React from 'react'
import TestRenderer from 'react-test-renderer'
import Slide from './index.js'

describe('Home page/Carousel/Slide component', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(
            <Slide
                image=''
                title='Класически масаж'
                info='Класически масаж информация'
                legendClass='legend1' />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})