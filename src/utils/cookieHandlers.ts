export const setCookie = (name: string, value: string) => {
    const updatedCookie = `${name}=${value}`;
    document.cookie = `${updatedCookie}`;
};

export const getCookie = (name: string) => {
    const matches = document.cookie.match(
        new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
    );
    return matches ? matches[1] : undefined;
};
