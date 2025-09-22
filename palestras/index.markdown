---
layout: page
title: Palestras
permalink: /palestras/
---

<h1>Palestras</h1>

<section class="atividades">
    {% for palestra in site.data.palestras %}
    <div class="atividade row" id="{{ palestra.id_palestra }}">
        <div class="atividade-foto col-md-3 col-12">
            <img src="{{ site.base_url }}/img/docentes/{{ palestra.id_docente }}.jpg">
        </div>
        <div class="atividade-infos col-md-9 col-12">
            <div class="atividade-titulo">
                {{ palestra.titulo }} | {{ palestra.docente }}
            </div>
            <div class="atividade-resumo">
                <span>
                    {{ palestra.resumo }}
                </span>
            </div>
        </div>
    </div>
    {% endfor %}
</section>