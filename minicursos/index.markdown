---
layout: page
title: Minicursos
permalink: /minicursos/
---

<section class="atividades">
    {% for minicurso in site.data[site.ano].minicursos %}
    <div class="atividade">
        <div class="row container">
            <div class="atividade-foto col-md-3 col-12">
                <img src="{{ site.baseurl }}/img/docentes/{{ minicurso[1].id_responsavel }}.jpg">
            </div>
            <div class="atividade-infos col-md-9 col-12">
                <div class="atividade-titulo">
                    {{ minicurso[1].titulo }}
                </div>
                <div class="atividade-responsavel">
                    {{ minicurso[1].responsavel }}
                </div>
                <div class="atividade-resumo">
                    <span>
                        {{ minicurso[1].resumo }}
                    </span>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</section>