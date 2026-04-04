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

{% assign palestras = site.data[site.ano].palestras %}
{% assign minicursos = site.data[site.ano].minicursos %}
{% assign coloquio = site.data[site.ano].coloquio %}
{% assign estudantes = site.data[site.ano].estudantes %}
{% assign coloquinho = site.data[site.ano].coloquinho %}

{% assign pessoas = site.data[site.ano].pessoas %}
{% assign dias = "_,Segunda-feira,Terça-feira,Quarta-feira,Quinta-feira,Sexta-feira" | split: "," %}
{% assign datas = "_,4,5,6,7,8" | split: "," %}

{% assign programacao = site.data[site.ano].programacao %}

<div class="post-content">
<section class="container programacaoSecao">
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
      <section class="atividades">
      {% for evento in dia[1] %}
        {% assign inicio = evento.comeca %}
        {% assign inicio_round = evento.comeca | floor %}
        {% case evento.tipo %}
          {% when "palestra" %}
            {% assign palestra = palestras[evento.id] %}
            {% assign classe = "palestra-palestra" %}
            {% assign texto = "Palestra" %}
          {% when "coloquio" %}
            {% assign palestra = coloquio[evento.id] %}
            {% assign classe = "palestra-coloquio" %}
            {% assign texto = "Colóquio do IME" %}
          {% when "estudante" %}
            {% assign palestra = estudantes[evento.id] %}
            {% assign classe = "palestra-estudante" %}
            {% assign texto = "Estudante" %}
          {% when "coloquinho" %}
            {% assign palestra = coloquinho[evento.id] %}
            {% assign classe = "palestra-coloquinho" %}
            {% assign texto = "Coloquinho" %}
          {% when "minicurso" %}
            {% assign palestra = minicursos[evento.id] %}
            {% assign classe = "minicurso" %}
            {% assign texto = "Minicursos" %}
          {% when "comer" %}
            {% assign palestra = nil %}
            {% assign classe = "lanchinho" %}
            {% assign texto = "Lanchinho" %}
          {% when "credenciamento" %}
            {% assign palestra = nil %}
            {% assign classe = "credenciamento" %}
            {% assign texto = "Credenciamento" %}
          {% when "cerimonia" %}
            {% assign palestra = nil %}
            {% assign classe = "cerimonia" %}
            {% assign texto = "Cerimônia" %}
          {% when "posteres" %}
            {% assign palestra = nil %}
            {% assign classe = "posteres" %}
            {% assign texto = "Pôsteres" %}
        {% endcase %}
        {% assign id = palestra.id_responsavel %}
        <div class="row justify-content-center">
          {% if evento.tipo == "palestra" or evento.tipo == "coloquio" or evento.tipo == "estudante" or evento.tipo == "coloquinho" %}
            <!-- Inicio de palestras, coloquio, coloquinho e estudantes -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
              <div class="row justify-content-center">
                <div class="card-atividade-img col-xl-3">
                  <!-- foto da pessoa apresentadora -->
                  <img src="{{ site.baseurl }}/img/{{ site.ano }}/pessoas/{{ id }}.jpg" 
                       class="img-fluid rounded-start" 
                       alt="Fotografia da pessoa apresentadora da palestra." 
                       onerror="this.src='{{ site.baseurl }}/img/{{ site.ano }}/pessoas/vazio.jpg'">
                  <div class="card-atividade-{{ classe }}-icone">
                    <img/>
                  </div>
                </div>
                <div class="card-atividade-conteudo col-xl-8">
                  <div class="card-body">
                    <!-- titulo da palestra -->
                    <h5 class="card-title">{{ palestra.titulo }}</h5>
                    <!-- informacoes sobre a pessoa -->
                    <p class="card-text">
                      {{ pessoas[id].nome }} 
                      {% unless id == "vazio" %}
                        ({{ pessoas[id].filiacao }})
                      {% endunless %}
                    </p>
                    <div class="row">
                      <div class="col-8 col-sm-7">
                        <p class="card-text">
                          {% assign partes = palestra.quando | split: 'às ' %}
                          <i class="fa-regular fa-clock"></i> {{ partes[1] }}
                          <br>
                          <i class="fa-solid fa-location-dot"></i> {{ palestra.onde }}
                        </p>
                        {% unless id == "vazio" %}
                          <a href="{{ site.baseurl }}/palestras/{{ site.ano }}/{{ id }}" class="btn btn-primary">Mais informações</a>
                        {% endunless %}
                      </div>
                      <div class="col-4 col-sm-5 atividade-col-semapinho">
                        {% if pessoas[id].semapinho != "" %}
                          <img src="{{ site.baseurl }}/img/{{ site.ano }}/semapinhos/{{ pessoas[id].semapinho }}.png">
                        {% endif %}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fim de palestras, coloquio, coloquinho e estudantes -->
          {% elsif evento.tipo == "minicurso" %}
            <!-- Inicio de Minicursos -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
              <div>
                <img src="{{ site.baseurl }}/img/semapinho/semacurso.png">
                <span>
                {% if inicio == inicio_round %}
                  {{ inicio }}:00
                {% else %}
                  {{ inicio_round }}:30
                {% endif %}
                <br>
                Minicursos
                </span>
              </div>
              <a href="{{ site.baseurl }}/minicursos" class="btn btn-primary">
              Confira os minicursos que serão ministrados!
              </a>
            </div>
            <!-- Fim de Minicursos -->
          {% elsif evento.tipo == "credenciamento" %}
            <!-- Inicio de Credenciamento -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
              <img src="{{ site.baseurl }}/img/semapinho/carteirinha.png">
              <div>
                <span>
                {% if inicio == inicio_round %}
                  {{ inicio }}:00
                {% else %}
                  {{ inicio_round }}:30
                {% endif %}
                <br>
                Credenciamento
                <br>
                </span>
                <p>
                  <i class="fa-solid fa-location-dot"></i> {{ evento.local }}
                </p>
              </div>
            </div>
            <!-- Fim de Credenciamento -->
          {% elsif evento.tipo == "cerimonia" %}
            <!-- Inicio de Cerimonia de abertura -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
                <img src="{{ site.baseurl }}/img/semapinho/semapinho_pintado.png">
                <div>
                  <span>
                  {% if inicio == inicio_round %}
                    {{ inicio }}:00
                  {% else %}
                    {{ inicio_round }}:30
                  {% endif %}
                  <br>
                  Cerimônia de abertura
                  <br>
                  </span>
                  <p>
                    <i class="fa-solid fa-location-dot"></i> {{ evento.local }}
                  </p>
                </div>
            </div>
            <!-- Fim de Cerimonia de abertura -->
          {% elsif evento.tipo == "comer" %}
            <!-- Inicio de Lancinho -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
              <img src="{{ site.baseurl }}/img/semapinho/semapinho_cafezinho_soluvel_hmmm.png">
              <span>
              {% if inicio == inicio_round %}
                {{ inicio }}:00
              {% else %}
                {{ inicio_round }}:30
              {% endif %}
              <br>
              Coffee-Break
              </span>
            </div>
            <!-- Fim de Lancinho -->
          {% elsif evento.tipo == "posteres" %}
            <!-- Inicio de Sessao de Posteres -->
            <div class="col-1 card-atividade-lateral card-atividade-lateral-{{ classe }}">
              <div>{{ texto }}</div>
            </div>
            <div class="card card-atividade col-11 col-lg-9 card-atividade-{{ classe }}">
              <img src="{{ site.baseurl }}/img/semapinho/semaposter.png" alt="Semapinho pôsteres" />
              <span>
              {% if inicio == inicio_round %}
                {{ inicio }}:00
              {% else %}
                {{ inicio_round }}:30
              {% endif %}
              <br>
              Sessão de Pôsteres
              </span>
            </div>
            <!-- Fim de Sessao de Posteres -->
          {% endif %}
        </div>
      {% endfor %}
      </section>
    </div>
    {% endfor %}
  </div>
</div>
</section>
</div>