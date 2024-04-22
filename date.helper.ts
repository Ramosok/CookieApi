const HOURS_PER_MINUTE = 60;
const SECONDS_PER_MINUTE = 60;
const MS_PER_SECOND = 1000;

export const convertHoursToMilliseconds = (hours?: number): number =>
    (hours || 0) * HOURS_PER_MINUTE * SECONDS_PER_MINUTE * MS_PER_SECOND;

export const getMilliseconds = (seconds: number): number => seconds * MS_PER_SECOND;
