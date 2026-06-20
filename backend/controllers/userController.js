const bcrypt = require("bcrypt");

const User = require("../model/user");

const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        res.json(user);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const updateProfile = async (req, res) => {

    try {

        const {

            firstName,

            lastName,

            email

        } = req.body;

        const existingUser = await User.findOne({

            email,

            _id: {

                $ne: req.user.id

            }

        });

        if (existingUser) {

            return res.status(409).json({

                message: "Email already exists"

            });

        }

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {

                firstName,

                lastName,

                email

            },

            {

                new: true

            }

        ).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        res.json({

            message: "Profile Updated",

            user

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const changePassword = async (req, res) => {

    try {

        const {

            currentPassword,

            newPassword

        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        const validPassword = await bcrypt.compare(

            currentPassword,

            user.password

        );

        if (!validPassword) {

            return res.status(401).json({

                message: "Current password is incorrect"

            });

        }

        const hashedPassword = await bcrypt.hash(

            newPassword,

            10

        );

        user.password = hashedPassword;

        await user.save();

        res.json({

            message: "Password Changed Successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

module.exports = {

    getProfile,

    updateProfile,

    changePassword

};