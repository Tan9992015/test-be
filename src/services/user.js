import db from '../models'
export const createUser = (body)=> (new Promise(async(resolve, reject) => {
    try {
        const {email, phone, location, name} = body
        const checkExist = await db.User1.findOne({email: email})
        if(checkExist){
            resolve({
                err: 1,
                mess: 'email đã tồn tại, vui lòng chọn email khác'
            })
        }
        const response = await db.User1.create({
            email,
            phone,
            location,
            name
        })
        resolve({
            err: response ? 0 : 1,
            mess: response ? 'tạo người dùng thành công' : 'tạo người dùng thất bại',
            data: response
        })
    } catch (error) {
        reject(error)
    }
}))

export const getAllUser = (limit,page)=> (new Promise(async(resolve, reject) => {
   try {
        const totalUser = await db.User1.countDocuments()
        const response = await db.User1.find().limit(limit).skip(limit* (page-1))
        resolve({
            err: response ? 0 : 1,
            mess: response ? 'lấy thông tin người dùng thành công' : 'lấy thông tin người dùng thất bại',
            data: response,
            totalUser: totalUser,
            currentPage: page,
            totalPage: Math.ceil(totalUser/ limit)
        })
   } catch (error) {
        reject(error)
   } 
}))