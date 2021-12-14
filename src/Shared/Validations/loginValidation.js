import * as yup from 'yup';

export const schema = yup.object().shape({
    password: yup.string()
        .required('Моля въведете парола !')
        .min(6, 'Паролата трябва да бъде минимум 6 знака !'),

    email: yup.string()
        .required('Моля въведете email !')
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Грешен email !')
})