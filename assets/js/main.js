/**
 * Curso de introdução à biblioteca jquery & ajax
 * Digital Innovation One 2021
 * Profº: Rafael Galleani
 * Autor: Marcelo Jr.
 */

/* Aula 1 | Utilizando JQuery & AJAX parte 2 */

/* Forma manual 

// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	$.ajax({
		url: "https://viacep.com.br/ws/14800-390/json/", 
		type: "GET", 
		success: function(response){
			console.log(response);
		}
	})
}
*/

/* Forma dinâmica */

/* Sem usar a biblioteca jquery */

/*
// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+ cep + "/json/";
	
	// faz uma requisição AJAX utilizando o Webservice dos correios e ibge
	$.ajax({
		url: url, 
		type: "GET", 
		success: function(response){
			console.log(response);

			// exibe as informações no browser
			document.getElementById("logradouro").innerHTML = response.logradouro;
			document.getElementById("bairro").innerHTML = response.bairro;
			document.getElementById("localidade").innerHTML = response.localidade;
			document.getElementById("uf").innerHTML = response.uf;
		}
	})
} */

/* Utilizando a biblioteca jquery */

// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	$(".barra-progresso").show();
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+ cep + "/json/";
					
	// faz uma requisição AJAX utilizando o Webservice dos correios e ibge
	$.ajax({
		url: url, 
		type: "GET", 
		success: function(response){
			console.log(response);
				
			// exibe as informações no browser
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$("#numeroCEP").html("Informações do CEP: " + response.cep);
			$(".cep").show();
			$(".barra-progresso").hide();	
		}
	})
}

// oculta o conteudo
$(function() {
	$(".cep").hide();
	$(".barra-progresso").hide();
});