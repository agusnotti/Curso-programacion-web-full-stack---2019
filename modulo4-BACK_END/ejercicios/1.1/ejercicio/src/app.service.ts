import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private nombre: string;

  public constructor(){
    this.nombre= 'agus';
  }
  getHello(): string {
    return 'Hello ' + this.nombre + '!';
  }
}
