import   FilmeRepositorioInterface from "../../aplicacao/fime-repositorio-interface"
export default class BancoMongoDB implements FilmeRepositorioInterface{
    public dados:Filme[] = []
    constructor(){}
    public salvar(input):Promise<boolean>{
        this.dados.push(input)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(true), 10)
        })
    }
}
type Filme = {
    id:number,
    titulo: string,
    descricao: string,
    foto:string,
}