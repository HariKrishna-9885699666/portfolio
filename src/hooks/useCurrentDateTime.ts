import { useEffect, useState } from 'react';

export function useCurrentDateTime(formatOptions?: Intl.DateTimeFormatOptions, locale: string = 'en-IN') {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = formatOptions || {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };
        const formatDateTime = () => new Date().toLocaleString(locale, options);
        setCurrentDateTime(formatDateTime());
        const intervalId = setInterval(() => {
            setCurrentDateTime(formatDateTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [formatOptions, locale]);

    return currentDateTime;
}