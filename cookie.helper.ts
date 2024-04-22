import { convertHoursToMilliseconds } from './date.helper';

export const setCookie = (name: string, value: string, hours?: number): null => {
    try {
        const date = new Date();
        date.setTime(date.getTime() + convertHoursToMilliseconds(hours));
        const cookieValue = encodeURI(value).concat(hours ? `;expires=${date.toUTCString()}` : '');
        document.cookie = `${name}=${cookieValue};path=/`;
        return null;
    } catch {
        return null;
    }
};

export const getCookie = (name: string): string | null => {
    try {
        const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));

        return matches?.[1] ? decodeURI(matches[1] || '') : null;
    } catch {
        return null;
    }
};

export const removeCookie = (name: string): void => {
    setCookie(name, '', -1);
};
