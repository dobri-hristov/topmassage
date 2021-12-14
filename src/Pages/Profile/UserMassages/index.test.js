import React from 'react'
import TestRenderer from 'react-test-renderer'
import UserMassages from './index'

describe('Profile page/UserMassages component', () => {
    test('should render correctly with NO data', () => {
        const component = TestRenderer.create(<UserMassages massages={[]}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('should render correctly with data (length < 5)', () => {
        const data = [
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '11:00'
            }
        ]
        const component = TestRenderer.create(<UserMassages massages={data} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('should render correctly with data (length = 6)', () => {
        const data = [
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '11:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '12:00'
            },
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '13:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '14:00'
            },
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '15:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '16:00'
            }
        ]
        const component = TestRenderer.create(<UserMassages massages={data}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('should render correctly with data (length > 6)', () => {
        const data = [
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '11:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '12:00'
            },
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '13:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '14:00'
            },
            {
                massage: 'Класически',
                date: '25-11-2021',
                hour: '15:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '16:00'
            },
            {
                massage: 'Масаж на глава',
                date: '25-11-2021',
                hour: '17:00'
            }
        ]
        const component = TestRenderer.create(<UserMassages massages={data}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})