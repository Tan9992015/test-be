import { email,name,location,phone } from "../helpers/joi_validate"
import * as Service from '../services'
import joi from 'joi'
export const createUser = async(req,res) => {
    try {
        const {error} = joi.object({email,name,phone,location}).validate(req.body)
        if(error) return res.status(400).json({
            err: 1,
            mess: 'chưa điền đủ thông tin hoặc thông tin không đúng định dạng'
        })
        const response = await Service.createUser(req.body)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            err: 1,
            mess: 'có lỗi ở server'
        })
    }
}

export const getAllUser = async(req,res)=> {
    try {
        const {page, limit} = req.query
        const response = await Service.getAllUser(Number(limit)||1,Number(page)||1)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: 1,
            mess: 'có lỗi ở server'
        })
    }
}