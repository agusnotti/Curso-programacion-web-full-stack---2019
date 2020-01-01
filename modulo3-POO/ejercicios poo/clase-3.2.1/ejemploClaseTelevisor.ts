class Televisor{
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number
    
    prenderApagar(): void {
    if (this.estaPrendido)
    this.estaPrendido = false
    else
    this.estaPrendido = true
    }
    subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
    this.volumenActual = this.volumenActual - 1
    }
    subirCanal(): void {
    this.canalActual = this.canalActual + 1
    }
    bajarCanal(): void {
    this.canalActual = this.canalActual - 1
    }
    elegirCanal(canal: number): void {
    this.canalActual = canal;
    }
}