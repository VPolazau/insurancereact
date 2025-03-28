import { useEffect, useState } from 'react';

export const useAutoUpdatingDate = ({
    hours,
    minutes,
    timeZone = 0,
}: {
    hours: number;
    minutes: number;
    timeZone: number;
}) => {
    const [recheckIntervalTrigger, setRecheckIntervalTrigger] = useState(0);

    const getClosureDate = () => {
        const date = new Date();
        const timeZoneHours = date.getUTCHours() + timeZone;
        const utcMinutes = date.getUTCMinutes();

        if (timeZoneHours === hours && utcMinutes === minutes - 1 && recheckIntervalTrigger !== minutes - 1) {
            setRecheckIntervalTrigger(utcMinutes);
        }
        if (timeZoneHours === hours && utcMinutes === minutes && recheckIntervalTrigger !== minutes) {
            setRecheckIntervalTrigger(utcMinutes);
        }

        if (timeZoneHours < hours || (timeZoneHours === hours && utcMinutes < minutes)) {
            return date.toLocaleDateString('ru-RU');
        }
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString('ru-RU');
    };

    const [closureDate, setClosureDate] = useState(getClosureDate);
    const updateDate = () => setClosureDate(getClosureDate());

    useEffect(() => {
        const date = new Date();
        const timeZoneHours = date.getUTCHours() + timeZone;
        const utcMinutes = date.getUTCMinutes();

        const isFastCheck = timeZoneHours === hours && utcMinutes === minutes - 1;
        const intervalTime = isFastCheck ? 1000 : 60000;

        const interval = setInterval(updateDate, intervalTime);
        return () => clearInterval(interval);
    }, [recheckIntervalTrigger, hours, minutes, timeZone]);

    return closureDate;
};
