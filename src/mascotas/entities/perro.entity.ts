import { Mascota } from "./mascota.entity";
import { Entity, Column, ChildEntity } from "typeorm";
import { type } from "os";

@ChildEntity()
export class Perro extends Mascota{

    @Column()
    private collar : string;

    @Column(type => Mascota)
    mascota : Mascota;

    /**
     * Getter $collar
     * @return {string}
     */
	public get $collar(): string {
		return this.collar;
	}

    /**
     * Setter $collar
     * @param {string} value
     */
	public set $collar(value: string) {
		this.collar = value;
	}

    /**
     * Devuelve la cantidad de racion para el perro
     */
    public get $racion(){
        return this.$edad * 5;
    }

}
