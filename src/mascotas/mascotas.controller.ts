import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota-dto';

@Controller('mascotas')
export class MascotasController {

    list

    @Post()
    create (@Body() createMascotaDTO : CreateMascotaDto) {
        return "Mascota creada";
    }

    @Get(':id')
    getAll (@Body() updateMascotaDTO : UpdatemascotaDTO){
        return "Mascota actualizada";
    }

    @Delete(':id')
    delete(){
        return "Mascota eliminada";
    }

    
}
