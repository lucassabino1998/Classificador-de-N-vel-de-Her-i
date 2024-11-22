const nomeDoHeroi = ' lucas';
const nivelDoHeroi = 10.001;
const mensagemHeroi= 'O heroi de nome ';
const qualNivel = 'esta no nivel ';
if (nivelDoHeroi<=1.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'FERRO');
}else if (nivelDoHeroi>=1.001&& nivelDoHeroi<=2.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'BRONZE');
}else if (nivelDoHeroi>=2.001&& nivelDoHeroi<=5.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'PRATA');
}else if (nivelDoHeroi>=5.001&& nivelDoHeroi<=7.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'OURO');
}else if (nivelDoHeroi>=7.001&& nivelDoHeroi<=8.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'PLATINA');
}else if (nivelDoHeroi>=8.001&& nivelDoHeroi<=9.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'ASCENDENTE');
}else if (nivelDoHeroi>=9.001&& nivelDoHeroi<=10.000){
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'IMORTAL');
}else{
    console.log(mensagemHeroi+nomeDoHeroi+qualNivel+'RADIANTE');
}