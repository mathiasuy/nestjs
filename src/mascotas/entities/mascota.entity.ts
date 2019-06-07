import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export abstract class Mascota {
    @PrimaryGeneratedColumn()
    private id : number;

    @Column()
    private nombre : string;

    @Column()
    private edad : number;

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $nombre
     * @return {string}
     */
	public get $nombre(): string {
		return this.nombre;
	}

    /**
     * Getter $edad
     * @return {number}
     */
	public get $edad(): number {
		return this.edad;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $nombre
     * @param {string} value
     */
	public set $nombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter $edad
     * @param {number} value
     */
	public set $edad(value: number) {
		this.edad = value;
    }
    
    abstract get $racion();
    
}
