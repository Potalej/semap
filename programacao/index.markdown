---
layout: page
title: Programação
permalink: /programacao/
tem_resumo: true
---

<div class="post-resumo">
  <div class="container">
    {{ site.data[site.ano].infos.programacao_resumo }}
  </div>
</div>

<div class="post-content">
<section class="wrapper programacaoSecao">
<div id="programacaoCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="60000">
  <div class="carousel-inner">
    {% for dia in site.data[site.ano].programacao %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <!-- TOPO COM BOTÕES E TÍTULO -->
      <div class="carousel-cabecalho d-flex justify-content-between align-items-center mb-3 px-3">
        <!-- Botão anterior -->
        <button class="btn btn-sm btn-outline-primary" type="button" data-bs-target="#programacaoCarousel" data-bs-slide="prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <!-- Título centralizado -->
        <h5 class="carousel-dia mb-0 text-center flex-grow-1">{{ dia[0] }}</h5>
        <!-- Botão próximo -->
        <button class="btn btn-sm btn-outline-primary" type="button" data-bs-target="#programacaoCarousel" data-bs-slide="next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <!-- CONTEÚDO DOS EVENTOS -->
      <table class="programacao_tabela">
        <tbody>
            <tr>
                <th>Hora</th>
                <th>Evento</th>
            </tr>
            {% for evento in dia[1] %}
            <tr>
                <th>
                    {% assign inicio = evento.comeca %}
                    {% assign inicio_round = evento.comeca | floor %}
                    {% if inicio == inicio_round %}
                        {{ inicio }}:00
                    {% else %}
                        {{ inicio_round }}:30
                    {% endif %}
                </th>
                {% if evento.tem_modal %}
                    {% assign evento_id = evento.tipo | append: '_' | append: evento.id %}
                    <!-- <a href="{{ site.baseurl }}/{{ evento.tipo }}s#{{ evento.id }}"> -->
                    {% include modal.html modal_id=evento_id evento=evento %}
                    <td class="evento evento-{{ evento.tipo }}" data-bs-toggle="modal" data-bs-target="#modal_{{ evento.tipo }}_{{ evento.id}}">
                {% else %}
                  <td class="evento evento-{{ evento.tipo }}">
                {% endif %}
                  {% case evento.tipo %}
                    {% when "comer" %}
                      <i class="fa-solid fa-mug-hot"></i>
                    {% when "credenciamento" %}
                      <i class="fa-solid fa-id-card"></i>
                    {% when "minicurso" %}
                      <i class="fa-solid fa-graduation-cap"></i>
                    {% when "palestra" %}
                      <i class="fa-solid fa-person-chalkboard"></i>
                  {% endcase %}
                    {{ evento.nome }}
                  {% if evento.tem_modal %}
                    <i class="fa-solid fa-circle-info"></i>
                  {% endif %}
                </td>
            </tr>
            {% endfor %}
        </tbody>
      </table>
    </div>
    {% endfor %}
  </div>
</div>
</section>
</div>