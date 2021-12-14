import React from 'react'
import TestRenderer from 'react-test-renderer'
import Masseur from './index.js'

describe('About page/Masseur component', () => {
    test('should render correctly with data', () => {
        const component = TestRenderer.create(
            <Masseur
                imgPath="https://res.cloudinary.com/dfwwzfev2/image/upload/v1637842573/top-massage/masseurs/Mihaela_lvoe9a.jpg"
                name="Михаела Иванова"
                position="Мениджър"
                info="С магистърска степен специалност кинезитерапия, Михаела има дългогодишен опит както кинезитерапевт, консултант, 
                експерт и управител.Нейната сила и страст е в индивидуално диагностициране и прилагане на ефективни масажи
                за превенция и профилактика на Вашето здраве."
            />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})