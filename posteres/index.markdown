---
layout: page
title: Pôsteres
permalink: /posteres/
tem_resumo: true
---

<div class="post-resumo">
  <div class="container">
    {{ site.data[site.ano].infos.posteres_resumo }}
  </div>
</div>

<div class="post-content container d-flex justify-content-center">

<a class="botao-formulario-posteres" href="{{ site.data[site.ano].infos.posteres_formulario }}" target="_blank">
  <div class="row justify-content-md-center">
    <div class="col-4">
      <img src="{{ site.url }}/img/list-check-solid-full.svg">
    </div>
    <div class="col-8">
      Para apresentar uma palestra ou participar da sessão de pôsteres, clique aqui e preencha o formulário!
    </div>
  </div>
</a>