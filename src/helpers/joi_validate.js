import joi from 'joi'
export const email = joi.string().pattern(new RegExp('@gmail.com$')).required()
export const phone = joi.string().required()
export const name= joi.string().required()
export const location= joi.string().required()