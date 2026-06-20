import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    Stack,
    Box
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";

export default function ProfileCard({

    profile,

    onEdit,

    onChangePassword

}) {

    const handleLogout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";

    };

    return (

        <Card
            sx={{
                maxWidth: 700,
                margin: "auto",
                borderRadius: 3
            }}
        >

            <CardContent>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={3}
                >

                    <Avatar
                        sx={{
                            width: 90,
                            height: 90,
                            mb: 2
                        }}
                    >

                        <PersonIcon
                            sx={{
                                fontSize: 50
                            }}
                        />

                    </Avatar>

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >

                        {profile.firstName} {profile.lastName}

                    </Typography>

                    <Typography
                        color="text.secondary"
                    >

                        {profile.email}

                    </Typography>

                </Box>

                <Divider sx={{ mb: 3 }} />

                <Stack spacing={2}>

                    <Box>

                        <Typography
                            color="text.secondary"
                        >

                            First Name

                        </Typography>

                        <Typography>

                            {profile.firstName}

                        </Typography>

                    </Box>

                    <Box>

                        <Typography
                            color="text.secondary"
                        >

                            Last Name

                        </Typography>

                        <Typography>

                            {profile.lastName}

                        </Typography>

                    </Box>

                    <Box>

                        <Typography
                            color="text.secondary"
                        >

                            Email

                        </Typography>

                        <Typography>

                            {profile.email}

                        </Typography>

                    </Box>

                </Stack>

                <Divider sx={{ my: 3 }} />

                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    flexWrap="wrap"
                >

                    <Button

                        variant="contained"

                        startIcon={<EditIcon />}

                        onClick={onEdit}

                    >

                        Edit Profile

                    </Button>

                    <Button

                        variant="outlined"

                        startIcon={<LockIcon />}

                        onClick={onChangePassword}

                    >

                        Change Password

                    </Button>

                    <Button

                        color="error"

                        variant="contained"

                        startIcon={<LogoutIcon />}

                        onClick={handleLogout}

                    >

                        Logout

                    </Button>

                </Stack>

            </CardContent>

        </Card>

    );

}