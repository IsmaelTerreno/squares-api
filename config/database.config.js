const APP_DB_USER = process.env.APP_DB_USER || "";
const APP_DB_PASS = process.env.APP_DB_PASS || "";
module.exports = {
    url: `mongodb+srv://${encodeURIComponent(APP_DB_USER)}:${encodeURIComponent(APP_DB_PASS)}@cluster0-cs0aw.mongodb.net/test?retryWrites=true`
};
