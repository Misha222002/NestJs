import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Урок по продвинотому BACKEND")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("MISHA IVANOV")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
}

start();
