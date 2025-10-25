---
layout: page
title: Palestras
permalink: /palestras/
---

<div class="accordion" id="accordion">
    <div class="accordion-item border-0">
        <div class="accordion-header">
            <div class="collapsed post-resumo rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProfessores" aria-expanded="false" aria-controls="collapseProfessores">
                <i class="fa-solid fa-caret-right"></i> Palestras de professores
            </div>
        </div>
        <div id="collapseProfessores" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body p-0">
                <section class="atividades">
                    <div class="row">
                        {% for palestra in site.data[site.ano].palestras %}
                            {% include palestra.html palestra=palestra %}
                        {% endfor %}
                        {% for palestra in site.data[site.ano].coloquio %}
                            {% include palestra.html palestra=palestra classe="palestra-coloquio" %}
                        {% endfor %}
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div class="accordion-item border-0">
        <div class="accordion-header">
            <div class="collapsed post-resumo rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEstudantes" aria-expanded="false" aria-controls="collapseEstudantes">
                <i class="fa-solid fa-caret-right"></i> Palestras de estudantes
            </div>
        </div>
        <div id="collapseEstudantes" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <section class="atividades">
                    <div class="row">
                        {% for palestra in site.data[site.ano].estudantes %}
                            {% include palestra.html palestra=palestra %}
                        {% endfor %}
                        {% for palestra in site.data[site.ano].coloquinho %}
                            {% include palestra.html palestra=palestra classe="palestra-coloquinho" %}
                        {% endfor %}
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>