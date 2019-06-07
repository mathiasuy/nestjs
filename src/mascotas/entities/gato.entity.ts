import { Mascota } from "./mascota.entity";
import { Column, ChildEntity } from "typeorm";
import { type } from "os";

@ChildEntity()
export class Gato extends Mascota{

    @Column()
    private pelaje : string;

    @Column(type => Mascota)
    mascota : Mascota;

    /**
     * Getter $pelaje
     * @return {string}
     */
	public get $pelaje(): string {
		return this.pelaje;
	}

    /** 
     * Setter $pelaje
     * @param {string} value
     */
	public set $pelaje(value: string) {
		this.pelaje = value;
	}


    /**
     * Devuelve la cantidad de racion para el perro
     */
    public get $racion(){
        return this.$edad * 2;
    }

}
