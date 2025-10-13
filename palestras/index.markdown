---
layout: page
title: Palestras
permalink: /palestras/
---

<section class="atividades">
    {% for palestra in site.data[site.ano].palestras %}
    <div class="atividade">
        <div class="row container" id="{{ palestra[0] }}">
            <div class="atividade-foto col-md-3 col-12">
                <img src="{{ site.baseurl }}/img/{{ site.ano }}/docentes/{{ palestra[1].id_responsavel }}.jpg">
            </div>
            <div class="atividade-infos col-md-9 col-12">
                <div class="atividade-titulo">
                    {{ palestra[1].titulo }}
                </div>
                <div class="atividade-responsavel">
                    {{ palestra[1].responsavel }}
                </div>
                <div class="atividade-resumo">
                    <span>
                        {{ palestra[1].resumo }}
                    </span>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</section>