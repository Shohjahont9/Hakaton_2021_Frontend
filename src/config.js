const protocol = "http:";
const port = ":2021";

/* DEVELOPMENT */
const host = "192.168.2.70";

/* PRODUCTION */
// const host = window.location.host;

export const apiUrl = `${protocol}//${host}${port}`;
