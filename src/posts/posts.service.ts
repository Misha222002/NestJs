import { FilesService } from "./../files/files.service";
import { Injectable } from "@nestjs/common";
import { createPostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private filesService: FilesService
  ) {}

  async create(dto: createPostDto, image: any) {
    const filename = await this.filesService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: filename });
    return post;
  }
}
