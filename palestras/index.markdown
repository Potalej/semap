---
layout: page
title: Palestras
permalink: /palestras/
tem_resumo: true
---

<div class="post-resumo">
  <div class="container">
    Confira as palestras confirmadas até agora!
  </div>
</div>

{% include botao_inscricao.html texto="Para participar das palestras, inscreva-se através deste formulário!" %}

{% assign palestras = site.data[site.ano].palestras %}
{% assign coloquio = site.data[site.ano].coloquio %}
{% assign estudantes = site.data[site.ano].estudantes %}
{% assign coloquinho = site.data[site.ano].coloquinho %}

{% assign pessoas = site.data[site.ano].pessoas %}
{% assign programacao = site.data[site.ano].programacao %}

<section class="atividades container">
    {% for palestra in palestras %}
        {% assign id = palestra[1].id_responsavel %}
        {% if pessoas[id].confirmou %}
            {% 
                include card_palestra.html 
                palestra=palestra 
                classe="palestra-palestra" 
                texto="Palestra" 
            %}
        {% endif %}
    {% endfor %}
    {% for palestra in coloquio %}
        {% assign id = palestra[1].id_responsavel %}
        {% if pessoas[id].confirmou %}
            {% 
                include card_palestra.html 
                palestra=palestra 
                classe="palestra-coloquio" 
                texto="Colóquio do IME" 
            %}
        {% endif %}
    {% endfor %}
    {% for palestra in coloquinho %}
        {% assign id = palestra[1].id_responsavel %}
        {% if pessoas[id].confirmou %}
            {% 
                include card_palestra.html 
                palestra=palestra 
                classe="palestra-coloquinho" 
                texto="Coloquinho" 
            %}
        {% endif %}
    {% endfor %}
    {% for palestra in estudantes %}
        {% assign id = palestra[1].id_responsavel %}
        {% if pessoas[id].confirmou %}
            {% 
                include card_palestra.html 
                palestra=palestra 
                classe="palestra-estudante" 
                texto="Estudante" 
            %}
        {% endif %}
    {% endfor %}
</section>