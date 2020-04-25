import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
    lee: { name: 'lee sung', description: 'front engineer @ bopboy' },
    homer: { name: 'homer simpson', description: 'father of the simpsons' }
};
function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 사용자입니다</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
}

export default Profile;
