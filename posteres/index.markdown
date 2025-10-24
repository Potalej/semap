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

<div class="post-content">
{% assign forms_link = site.data[site.ano].infos.posteres_formulario %}
{% if forms_link == "" %}
  <br>
  <h3 style="text-align: center">O formulário de inscrição será disponibilizado em breve!</h3>
{% else %}
  <iframe src="{{ forms_link }}" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
{% endif %}
</div>