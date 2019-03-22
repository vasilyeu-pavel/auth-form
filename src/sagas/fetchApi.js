export const resetPassword = async (login) => {
    const response = await fetch('http://mrkt.little.team/api/public/users/reset-password', {
        method: 'POST',
        body: JSON.stringify({login})
    });
    const {data} = await response.json();

    const {success} = data;
    return success;
};

export const signIn = async (login, password) => {
    const response = await fetch('http://mrkt.little.team/api/public/users/login', {
        method: 'POST',
        body: JSON.stringify({login, password})
    });
    return await response.json();
};
