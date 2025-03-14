export function generateRandomColorAvatar(username: string) {
    if (!username || typeof username !== 'string') return null;
    const colors = ['#dc2626', '#4f46e5', '#ca8a04', '#16a34a', '#2563eb'];
    const firstLetter = username.toUpperCase();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = randomColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(firstLetter, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL('image/png');
}

/**
 * Returns the current time in the UTC time zone, formatted as an ISO string (e.g. "2024-03-06T14:30:00Z").
 */
export function userUTCTime() {
    const utcTime = new Date().toISOString();
    return utcTime;
}

/**
 * Given a UTC time string, returns a string representing the time in the user's local time zone.
 * @param utcTime a time string in the ISO format, e.g. "2024-03-06T14:30:00Z"
 */
export function userLocalTime(utcTime: string) {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const localTime = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: userTimeZone
    }).format(new Date(utcTime));

    return localTime;
}

/**
 * Given a UTC time string, returns a string that describes how long ago the given time was, in a human-readable format
 * (e.g. "3s", "2m", "1h", "4d", "2w", "1y").
 * @param utcTime a time string in the ISO format, e.g. "2024-03-06T14:30:00Z"
 */
export function timeAgo(utcTime: string) {
    const now = new Date();
    const past = new Date(utcTime);
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d`;
    const weeks = Math.floor(days / 7);
    if (weeks < 52) return `${weeks}w`;
    const years = Math.floor(weeks / 52);

    return `${years}y`;
}

export function randomUrl() {
    let five = '';
    let rand = '';
    const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
    const randomfivedigits = letters[Math.floor(Math.random() * letters.length)];
    let i = 5;
    for(i > 0; i<5; i++) {
        const l = randomfivedigits;
        rand = five.concat(l)
    }
    const url = `${rand}-${rand}-${rand}-${rand}`
    return url;
}

