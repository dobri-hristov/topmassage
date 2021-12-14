import * as yup from 'yup';

export const schema = yup.object().shape({
    password: yup.string()
        .required('Моля въведете парола!')
        .min(6, 'Паролата трябва да бъде минимум 6 знака!'),

    email: yup.string()
        .required('Моля въведете email!')
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Грешен email!'),

    phone: yup.string()
        .required('Моля въведете телефонен номер!')
        .min(6, 'Въвели сте трърде кратък телефонен номер!')
        .max(20, 'Въвели твърде дълъг телефонен номер!')
        .matches(/^[0-9]*$/, 'Телефонният номер трябва да съдържа само числа!'),

    lastName: yup.string()
        .required('Моля въведетe фамилия!')
        .matches(/[a-zA-Z\u0400-\u04FF]/, 'Моля въведете правилно вашата фамилия!')
        .max(15, 'Твърде дълга фамилия! Максимум 15 знака!'),

    name: yup.string()
        .required('Моля въведете име!')
        .matches(/[a-zA-Z\u0400-\u04FF]/, 'Моля въведете правилно вашето име ')
        .max(15, 'Твърде дълго име! Максимум 15 знака!'),
})