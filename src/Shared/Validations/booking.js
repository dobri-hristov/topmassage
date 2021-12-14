import * as yup from 'yup';

export const schema = yup.object().shape({
    hour: yup.string()
        .required('Моля изберете час!'),

    date: yup.string()
        .required('Моля изберете дата!'),

    massage: yup.string()
        .min(1, 'Моля изберете масаж!'),

    phone: yup.string()
        .required('Моля въведете телефонен номер!')
        .min(6, 'Въвели сте трърде кратък телефонен номер!')
        .max(20, 'Въвели твърде дълъг телефонен номер!'),

    name: yup.string()
        .required('Моля въведете име и фамилия!')
        .matches(/[a-zA-Z\u0400-\u04FF] [a-zA-Z\u0400-\u04FF]/, 'Моля въведете правилни име и фамилия!')
})