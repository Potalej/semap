---
layout: page
title: Minicursos
permalink: /minicursos/
---

<h1>Minicursos</h1>

<section class="atividades">
    {% for minicurso in site.data.minicursos %}
    <div class="atividade row">
        <div class="atividade-foto col-md-3 col-12">
            <img src="{{ site.base_url }}/img/docentes/{{ minicurso.id_docente }}.jpg">
        </div>
        <div class="atividade-infos col-md-9 col-12">
            <div class="atividade-titulo">
                {{ minicurso.titulo }} | {{ minicurso.docente }}
            </div>
            <div class="atividade-resumo">
                <span>
                    {{ minicurso.resumo }}
                </span>
            </div>
        </div>
    </div>
    {% endfor %}
</section>