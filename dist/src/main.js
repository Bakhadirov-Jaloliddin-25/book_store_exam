"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const nest_winston_1 = require("nest-winston");
const winston_config_1 = require("../logger/winston.config");
async function start() {
    const PORT = process.env.PORT || 3001;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger(winston_config_1.winstonConfig),
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Book store")
        .setDescription("Books")
        .setVersion("1.0")
        .addTag("TypeOrm, Swagger")
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, documentFactory);
    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map