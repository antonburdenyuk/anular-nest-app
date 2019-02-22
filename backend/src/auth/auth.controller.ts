import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get()
    getUsers() {
        return [
            {
                name: 'Anton',
                id: 1
            }
        ]
    }
}
