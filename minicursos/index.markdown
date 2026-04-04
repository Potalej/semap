---
layout: page
title: Minicursos
permalink: /minicursos/
tem_resumo: true
---

<div class="post-resumo">
  <div class="container">
    Confira os minicursos que serão oferecidos entre os dias 6 e 8 de maio na SeMAP!
  </div>
</div>

{% assign pessoas = site.data[site.ano].pessoas %}
{% assign minicursos = site.data[site.ano].minicursos %}

{% include botao_inscricao.html texto="Para participar dos minicursos, inscreva-se através deste formulário!" %}

<section class="atividades container">
    {% for minicurso in minicursos %}
        {% assign idr = minicurso[1].id_responsavel %}
        <div class="row gy-3 justify-content-center">
            <div class="col-1 card-atividade-lateral card-atividade-lateral-minicurso">
                <div>Minicurso</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
                <div class="row justify-content-center">
                    <div class="card-atividade-img col-xl-3">
                        <img src="{{ site.baseurl }}/img/{{ site.ano }}/pessoas/{{ idr }}.jpg" 
                        class="img-fluid rounded-start" 
                        alt="Fotografia da pessoa apresentadora da palestra." 
                        onerror="this.src='{{ site.baseurl }}/img/{{ site.ano }}/pessoas/vazio.jpg'"
                        />
                    </div>
                    <div class="col-xl-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ minicurso[1].titulo }}</h5>
                            <p class="card-text">{{ pessoas[idr].nome }} ({{ pessoas[idr].filiacao }})</p> 
                            <div class="row">
                                <div class="col-8 col-sm-7">
                                    <p class="card-text">
                                    {% assign partes = minicurso[1].quando | split: 'às ' %}
                                        <i class="fa-regular fa-clock"></i> {{ partes[1] }}
                                        <br>
                                        <i class="fa-solid fa-location-dot"></i> 
                                        {{ minicurso[1].onde }}
                                    </p>
                                    <a href="{{ site.baseurl }}/minicursos/{{ site.ano }}/{{ idr }}" class="btn btn-primary">Mais informações</a>
                                </div>
                                <div class="col-4 col-sm-5 atividade-col-semapinho">
                                    {% if pessoas[id].semapinho != "" %}
                                        <img src="{{ site.baseurl }}/img/{{ site.ano }}/semapinhos/{{ pessoas[idr].semapinho }}.png">
                                    {% endif %}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% endfor %}
</section>