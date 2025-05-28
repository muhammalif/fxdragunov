require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('../src/models/adminModel')

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const existingAdmin = await Admin.findOne({ username: process.env.ADMIN_USERNAME})

        if (existingAdmin) {
            console.log('Admin sudah ada di database')
        } else {
            const newAdmin = new Admin ({
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
            })

            await newAdmin.save()
            console.log('Admin berhasil dibuat')
        }

        mongoose.disconnect()
    } catch (error) {
        console.error('Gagal seed admin:', error)
        mongoose.disconnect()
        process.exit()
    }
}

seedAdmin()