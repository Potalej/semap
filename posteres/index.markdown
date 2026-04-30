---
layout: page
title: Pôsteres
permalink: /posteres/
tem_resumo: true
---

<!-- <div class="post-resumo">
  <div class="container">
    {{ site.data[site.ano].infos.posteres_resumo }}
  </div>
</div> -->

<!-- <div class="post-content container d-flex justify-content-center sessao-posteres"> -->

<!-- <a class="botao-formulario-posteres" href="{{ site.data[site.ano].infos.posteres_formulario }}" target="_blank">
  <div class="row justify-content-md-center">
    <div class="col-4">
      <img src="{{ site.url }}/img/list-check-solid-full.svg">
    </div>
    <div class="col-8">
      Para apresentar uma palestra ou participar da sessão de pôsteres, clique aqui e preencha o formulário!
    </div>
  </div>
</a> -->

<!-- <div>
  <p>
    Período de submissão de trabalhos encerrado!<br>Em breve serão divulgados os resultados.
  </p>
  <p>
  Agradecemos a todos que submeteram seus trabalhos!
  </p>
  <img src="{{ site.baseurl }}/img/semapinho/semaposter.png" alt="Semapinho pôsteres" />
</div>

</div> -->

{% assign posteres = site.data[site.ano].posteres %}

<div class="post-resumo">
  <div class="container">
    Confira os títulos e resumos dos pôsteres apresentados na SeMAP!
  </div>
</div>

<div class="post-content container">

<div class="row justify-content-center">
  <div class="col-12 col-md-8">
    <br>
    <h2>Sumário</h2>
    <ul>
    {% for poster in posteres %}
      <li>
        <a href="#item_{{ forloop.index }}">{{ poster.autoria }}</a>
      </li>
    {% endfor %}
    </ul>
  </div>
  <div class="col-4 col-md-4 d-flex align-items-center">
    <img src="{{ site.baseurl }}/img/semapinho/semaposter.png" alt="Semapinho pôsteres" /><br>
  </div>
</div>
<hr>
<h2>Resumos</h2>
<div class="accordion posteres" id="accordion">
{% for poster in posteres %}
  <div class="accordion-item mb-3" id="item_{{ forloop.index }}">
    <div class="accordion-header card" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_{{ forloop.index }}" aria-expanded="true" aria-controls="collapse_{{ forloop.index }}">
      <button class="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_{{ forloop.index }}" aria-expanded="false" aria-controls="collapse_{{ forloop.index }}">
        <div>
          <span class="poster-titulo"><b>Título:</b> {{ poster.titulo }}</span>
          <br>
          <span class="poster-autoria">
          <b>{{ poster.autoria }}<sup>1</sup></b>
          {% if poster.coautoria %}
            {% for coautor in poster.coautoria %}
              , {{ coautor[0] }}<sup>{{ coautor[1] }}</sup>
            {% endfor %}
          {% endif %}
          <br>
          {% for afiliacao in poster.afiliacoes %}
            {% if forloop.index > 1 %},{% endif %} <sup>{{ forloop.index }}</sup>{{ afiliacao }}
          {% endfor %}
          </span>
        </div>
      </button>
    </div>
    <div id="collapse_{{ forloop.index }}" class="accordion-collapse collapse" data-bs-parent="#accordion">
      <div class="accordion-body">
        <b>Resumo:</b> {{ poster.resumo }}
      </div>
    </div>
  </div>
    <hr>
{% endfor %}
</div>
</div>.