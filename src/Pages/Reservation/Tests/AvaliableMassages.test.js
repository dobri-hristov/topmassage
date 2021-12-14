import React from 'react'
import TestRenderer from 'react-test-renderer'
import AvaliableMassages from '../AvaliableMassages.js'
import { AuthContext } from "../../../Shared/Contexts/ContextWrapper";


describe('Reservation page/AvaliableMassages component', () => {
    test('should render correctly with no data', () => {
        const component = TestRenderer.create(<AvaliableMassages allMassages={[]} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('should render correctly with data and user is auth', () => {
        const data = [
            {
                massageName: 'Класически масаж',
                prices: {
                    60: 90,
                    30: 60
                }
            }
        ]
        const component = TestRenderer.create(
            <AuthContext.Provider value={{ auth: true }}>
                <AvaliableMassages allMassages={data} />
            </AuthContext.Provider>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('should render correctly with data and user is NOT auth', () => {
        const data = [
            {
                massageName: 'Класически масаж',
                prices: {
                    60: 90,
                    30: 60
                }
            }
        ]
        const component = TestRenderer.create(
            <AvaliableMassages allMassages={data} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})