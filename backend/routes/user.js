const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const { signupSchema } = require("../zod");
const { loginSchema } = require("../zod");

// user signup
router.post("/signup", async (req, res) => {

    try {

        const result = signupSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: result.error.issues[0].message
            });
        }

        const { firstName, lastName, email, password } = result.data;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Signup Successful",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// user login
router.post("/login", async (req, res) => {
console.log("hitting")
    try {

        const result = loginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: result.error.issues[0].message
            });
        }

        const { email, password } = result.data;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            message: "Login Successful",
            token
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

router.use((err, req, res, next) => {
    console.error("Error:", err.message)

    res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'"
    );

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            message: "Invalid JSON format"
        })
    }

    res.status(500).json({
        message: "Internal server error"
    })
})

module.exports = router;