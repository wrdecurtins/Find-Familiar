module.exports = {
    HOST: "localhost",
    USER: "will",
    PASSWORD: "j",
    DB: "test",
    dialect: "mysql",
    port: 3307,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};