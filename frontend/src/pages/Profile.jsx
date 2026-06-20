import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import ProfileCard from "../components/ProfileCard";
import EditProfileDialog from "../components/EditProfileDialog";
import { getProfile } from "../api/profileApi";
import ChangePasswordDialog from "../components/ChangePasswordDialog";

import "./Profile.css";

export default function Profile() {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [editOpen, setEditOpen] = useState(false);

    const [passwordOpen, setPasswordOpen] = useState(false);

    useEffect(() => {

        fetchProfile();

    }, []);

    async function fetchProfile() {

        try {

            const data = await getProfile();

            setProfile(data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="profile-page">

            <div className="profile-header">

                <h1>

                    Profile

                </h1>

                <p>

                    Manage your account information

                </p>

            </div>

            <ProfileCard

                profile={profile}

                onEdit={() => setEditOpen(true)}

                onChangePassword={() =>

                    setPasswordOpen(true)

                }

            />

            <EditProfileDialog

    open={editOpen}

    onClose={() =>

        setEditOpen(false)

    }

    profile={profile}

    refreshProfile={fetchProfile}

/>

<ChangePasswordDialog

    open={passwordOpen}

    onClose={() =>

        setPasswordOpen(false)

    }

/>

        </div>

    );

}