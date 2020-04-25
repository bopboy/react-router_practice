import React from "react";
import qs from "qs";

function About({ location }) {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>This is About Page</p>
            {detail && <p>detail 값이 true 로 설정되었습니다</p>}
        </div>);
}

export default About;
