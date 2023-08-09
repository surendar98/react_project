import * as yup from 'yup'

const RegisterSchema=yup.object().shape({
    email:yup.string().required('Email is required'),
    username:yup.string().required('Username is required'),
    password:yup.string().required('Password is required'),
})

export {RegisterSchema};

