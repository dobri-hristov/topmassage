import React from 'react'
import TestRenderer from 'react-test-renderer'
import Massage from './index.js'

describe('Massages page/Massage component', () => {
    test('should render correctly with data', () => {
        const mydata = {
            name: 'Класически масаж',
            mainImg: '',
            mainInfo: 'класически масаж',
            secondImg: '',
            moreInfo: [
                'информация 1',
                'информация 2',
            ],
            prices: {
                60: 90,
                30: 60
            }
        }
        const component = TestRenderer.create(
            <Massage data={mydata} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})