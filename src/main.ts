import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { WinstonModule } from "nest-winston";
import { winstonConfig } from "../logger/winston.config";
import { AllExceptionsFilter } from "../filters/all-exeptions.filter";

async function start() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  app.use(cookieParser());
  // app.useGlobalFilters(new AllExceptionsFilter());
  const config = new DocumentBuilder()
    .setTitle("Book store")
    .setDescription("Books")
    .setVersion("1.0")
    .addTag("TypeOrm, Swagger")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
start();
