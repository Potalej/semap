---
layout: page
title: Programação
permalink: /programacao/
---

<section class="wrapper">
<div id="programacaoCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
  <div class="carousel-inner">
    {% for dia in site.data.programacao %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <!-- TOPO COM BOTÕES E TÍTULO -->
      <div class="d-flex justify-content-between align-items-center mb-3 px-3">
        <!-- Botão anterior -->
        <button class="btn btn-sm btn-outline-primary" type="button" data-bs-target="#programacaoCarousel" data-bs-slide="prev">
          ←
        </button>
        <!-- Título centralizado -->
        <h5 class="mb-0 text-center flex-grow-1">{{ dia[0] }}</h5>
        <!-- Botão próximo -->
        <button class="btn btn-sm btn-outline-primary" type="button" data-bs-target="#programacaoCarousel" data-bs-slide="next">
          →
        </button>
      </div>
      <!-- CONTEÚDO DOS EVENTOS -->
        <table>
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
                <td class="evento-{{ evento.tipo }}">
                    {% if evento.tipo == "comer" %}
                        <i class="fa-solid fa-mug-hot"></i>
                    {% endif %}
                    {{ evento.nome }}
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