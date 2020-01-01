import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ConcesionariaService } from './concesionaria.service';
import Vehiculo from './Vehiculo';

@Controller('vehiculos')
export class ConcesionariaController {
    constructor(private concesionariaService: ConcesionariaService) {}

    @Get()
    public getVehiculos(): Vehiculo[] {
        return this.concesionariaService.getVehiculos();
    }

    @Get(':index')
    public getProducto(@Param('index') index): Vehiculo {
        return this.concesionariaService.getVehiculo(parseInt(index));
    }

    @Post()
    public create(@Body() vehiculo: any): string {
        return this.concesionariaService.create(vehiculo);
    }

    @Delete(':index')
    public deleteVehiculo(@Param('index') index): boolean {
        return this.concesionariaService.deleteVehiculo(parseInt(index));
    }

    @Put(':index')
    public editVehiculo(@Param('index') index, @Body() vehiculo: any): boolean {
        return this.concesionariaService.editVehiculo(parseInt(index), vehiculo);
    }

}