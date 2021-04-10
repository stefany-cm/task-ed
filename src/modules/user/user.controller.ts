import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async allUser() {
        console.log('llegfa sl controlador')
        const data = await this.userService.getAllUser();
        return {
            message: 'Sirve',
            data
        }
    }
}
