// contagem de caracteres e palavras do exemmplo que está fixo na página

var frase = $(".frase").text();  
var numPalavras = frase.split(" ").length; // divide o espaço e pega a quantidade de partes no array
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras); // troca o texto pelo valor do numPalavras


//função para pegar a quantidade de palavras e caracteres digitados no textarea.

var campo = $(".campo-digitacao");
campo.on("input", function(){     // input é o evento para quando digito dados no campo, a cada tecla e atualiza
	var conteudo = campo.val(); //o ".val()" pega o valor da string digitada no campo

	var qtdPalavras = conteudo.split(/\S+/).length-1; // o ".split(/\S+/)" vai dividir com base na expressão regular equivalente a espaço só que desconsidera vários espaços seguidos. E o .length vai pegar a quantidade de partes, ou seja, qual o tamanho do array gerado. Subtrai -1
	$("#contador-palavras").text(qtdPalavras); // pega a tag span do ID citado e seta o texto da quantidade de palavras

	var qtdCaracteres = conteudo.length; // como o conteúdo é uma string, é só pegar o tamanho da string digitada usando o .length
	$("#contador-caracteres").text(qtdCaracteres) // pega a tag span do ID citado e seta o texto da quantidade de caracteres da string digitada 

});


// função para fazer contagem regressiva, imprimir tempo e travar a digitação do texto quando estourar tempo
var tempoRestante = $("#tempo-digitacao").text(); // tag li equivalente ao tempo
campo.on("focus", function(){    //função disparada pelo evento focus: pega tanto o click quanto o tab. Mais completa
	var cronometroID = setInterval( function(){     // o set interval é uma função do javasprict puro usada para contar intervalo, exige 2 parâmetros: a função para executar algo ; e o intervalo a ser contado (ex. 1000 = 1seg.) e ela faz o que está dentro. todo setInterval retonra seu próprio ID
		tempoRestante--;         //faz decremento em -1 do valor total do tempo
		$("#tempo-digitacao").text(tempoRestante); //set o valor do tempo restante já em decremento;
		if (tempoRestante < 1) {  // ao zerar o tempo desabilita o campo pra edição
			campo.attr("disabled", true);  // A função .attr() é usada no jquery para alterar atributos de um elemento. pode só pegar o attr ou trocar (igual ao.text()).
									 //só o 1º parâmetro "disabled" ele iria pegar, então, 0 2º como "true" coloca e como "false" retira.
			clearInterval(cronometroID); // a função clearInterval() limpa/pára o tempo que está rodando, requer o parâmetro id da função setInterval. Sendo que toda setInterval() retorna seu próprio ID. Daí basta armazenar em um var e informar qual para o clear pará-lo/limpar									 
		}
		

	}, 1000);
});