import { Body, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Controller, Post } from "@nestjs/common";
import { createPostDto } from "./dto/create-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("posts")
export class PostsController {
  constructor(private PostsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPost(@Body() dto: createPostDto, @UploadedFile() image) {
    return this.PostsService.create(dto, image);
  }
}
