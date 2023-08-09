const entrada = require("readline-sync");
let saldo: number = 100;
let teste: boolean = false;


function opc1(){
        let saque = parseFloat(entrada.question("Digite o valor de saque: "));

            if(saque <= saldo){
                let senha = entrada.question("Digite sua senha:  ");
                if(senha == 99999)
                    saldo = saldo - saque;
                else
                    console.log("Senha incorreta");
            }else
                 console.log("Valor Indisponivel");
}

function opc2(){
    //let opc2 = parseFloat(entrada.question("Retornar a tela principal(1) ou Sair (2): "));

        let deposito = parseFloat(entrada.question("Digite o valor de deposito: "));

        if(deposito > 0 ){
        let senha = entrada.question("Digite sua senha: ");

        if(senha == 99999 ){
            saldo = saldo + deposito;            
}
        else
        console.log("Senha incorreta");
}
}

function opc3(){
    //let opc2 = parseFloat(entrada.question("Retornar a tela principal(1) ou Sair (2): "));

        let sair = entrada.question("Sair digite 3:  ");
        let inicio = entrada.question('Voltar para inicio digite 4:  ');
}

    for (let i = 0; i < 3; i++){  

    let login = entrada.question("Digite seu usuario: ");
    let senha: number = entrada.question("Digite sua senha: ");

    if (login == "eduardo" && senha == 99999){
            teste = true
            i = 3;

        }
    }

    while (teste){

        console.log("saldo atual: " + saldo);

        console.log(" Saque opcao 1");
        console.log(" Deposito opcao 2");
        console.log(" Sair opcao 3");
    
        let opcao = parseFloat (entrada.question(""));
        
        switch (opcao) {
            case 1:
                opc1();
                break;
            case 2:
                opc2();
                break
            case 3:
                teste = false;
                break;
            default:
                teste = true;
                break;
        }
    }