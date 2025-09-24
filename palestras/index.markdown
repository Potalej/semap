---
layout: page
title: Palestras
permalink: /palestras/
---

<section class="atividades">
    {% for palestra in site.data.palestras %}
    <div class="atividade row" id="{{ palestra.id }}">
        <div class="atividade-foto col-md-3 col-12">
            <img src="{{ site.baseurl }}/img/docentes/{{ palestra.id_docente }}.jpg">
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