"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonConfig = void 0;
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
exports.winstonConfig = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.timestamp(), winston.format.simple(), nest_winston_1.utilities.format.nestLike("MyApp", { colors: true })),
        }),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({
            filename: "logs/combined.log",
        }),
    ],
};
//# sourceMappingURL=winston.config.js.map