import { CreatedRoleDto } from "./dto/crate-role.dto";
import { RolesService } from "./roles.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() dto: CreatedRoleDto) {
    return this.rolesService.createdRole(dto);
  }
  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
