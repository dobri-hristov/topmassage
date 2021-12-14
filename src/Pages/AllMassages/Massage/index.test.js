import React from 'react'
import TestRenderer from 'react-test-renderer'
import Massage from './index.js'

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}))

describe('Massages page/Massage component', () => {
    test('should render correctly with data', () => {
        const mydata = {
            massageName: 'Класически',
            img: '',
            massageInfo: 'класически масаж',
            path: 'classic'
        }
        const component = TestRenderer.create(
            <Massage data={mydata} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})