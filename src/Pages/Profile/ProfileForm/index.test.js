import React from 'react'
import TestRenderer from 'react-test-renderer'
import ProfieForm from './index'

describe('Profile page/ProfieForm component', () => {
    test('should render correctly with data', () => {
        const component = TestRenderer.create(
            <ProfieForm
                name={'name'}
                lastName={'lastName'}
                phone={'phone'}
                email={'email'}
            />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

})