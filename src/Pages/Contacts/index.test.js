import React from 'react'
import TestRenderer from 'react-test-renderer'
import ContactsPage from './index.js'


describe('Contacts page component', () => {
    test('should render correctly', () => {
        const component = TestRenderer.create(<ContactsPage />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})