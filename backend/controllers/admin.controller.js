import adminModel from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.json({ status: false, message: "Admin does not exist." });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.json({ status: false, message: "Invalid password." });
        }

        const token = jwt.sign({ id: admin._id }, 'random#secret', { expiresIn: '1d' });
        res.status(201).json({ status: true, message: "Admin login successful.", token });
    } catch (error) {
        console.log("Login error =>", error);
        res.status(500).json({ status: false, message: "Server error. Please try again later." });
    }
};

export {  loginAdmin };
