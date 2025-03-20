import { TecnologiaProvider } from './tecnologia.provider';
import { Tecnologia } from "@core"
import { Controller, Get } from "@nestjs/common"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly repositorio: TecnologiaProvider) {}
	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.repositorio.obterTodas()
	}

	@Get("destaques")
	async obterDestaques(): Promise<Tecnologia[]> {
		return this.repositorio.obterDestaques()
	}
}
