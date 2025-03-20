import { Controller, Get, Param } from "@nestjs/common"
import { ProjetoProvider } from "./projeto.provider"
import { Projeto } from "@core"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repositorio: ProjetoProvider) {}
	@Get()
	async obterTodos(): Promise<Projeto[]> {
		return this.repositorio.obterTodos()
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repositorio.obterPorId(Number(id))
	}
}
