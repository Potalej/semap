---
layout: page
title: Sobre
permalink: /sobre/
---

<section class="container inicio-informacoes">

<h2>A logo: Fractais de Newton</h2>

<p>
Existem diversos métodos numéricos para encontrar raízes de polinômios, e talvez o mais conhecido seja o Método de Newton. Dada uma função \(f\), o método é definido pela iteração:
</p>

$$
z_{n+1} = z_n - \dfrac{f(z_n)}{f'(z_n)}.
$$

<p>
Quando tomamos uma região do plano complexo e aplicamos o método de Newton para cada ponto da região, pontos que convergem para uma mesma raiz formam bacias de atração, e as fronteiras dessas bacias são fractais.
</p>

<div class="row justify-content-center">
    <div class="col col-7 col-sm-4 col-md-2">
        <figure class="figure text-center d-flex flex-column w-100">
            <img src="{{ site.base_url }}/img/2026/identidade_visual/fractais_3grau.png" class="figure-img img-fluid rounded" alt="Fractal de Newton">
            <figcaption class="figure-caption">
                \( p(z) = z^3 - 1 \)
            </figcaption>
        </figure>
    </div>
    <div class="col col-7 col-sm-4 col-md-2">
        <figure class="figure text-center d-flex flex-column w-100">
            <img src="{{ site.base_url }}/img/2026/identidade_visual/fractais_5grau.png" class="figure-img img-fluid rounded" alt="Fractal de Newton">
            <figcaption class="figure-caption">
                \( p(z) = z^5 - z^4 + z^3 + 1 \)
            </figcaption>
        </figure>
    </div>
</div>

<p>
Como todo resultado computacional, é preciso escolher uma discretização para gerar visualizações dos fractais. A logo destaca isso, tendo uma discretização com tamanhos de passo maiores.
</p>

<div class="row justify-content-center">
    <div class="col col-7 col-sm-4 col-md-2">
        <figure class="figure text-center">
        <img src="{{ site.base_url }}/img/2026/identidade_visual/logo_sem_bordo_sem_bg.png" class="figure-img img-fluid rounded" alt="Fractal de Newton">
        <figcaption class="figure-caption">
            Fractal associado a
            \( p(z) = z^3 - 1 \).
        </figcaption>
        </figure>
    </div>
</div>

<p>
Para mais detalhes, recomendamos o vídeo “Newton’s fractal (which Newton knew nothing about)”, de Grant Sanderson (3Blue1Brown), que possui legenda em português:
</p>

<div class="d-flex justify-content-center">
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/-RdOwhmqP5s?si=uTvx15ubeV4DzBvO" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
</div>

<!--  -->
<hr>
<!--  -->

<h2>O mascote: Semapinho</h2>

<div class="row justify-content-center align-items-center">
    <div class="col col-12 col-lg-10">
        <p>
            O Semapinho é o mascote da SeMAP, e não poderia ser outra coisa senão um pato: o que melhor descreve a matemática aplicada do que a versatilidade da ave que anda, nada e voa?
        </p>
        <p>
            Mas, antes disso, o Semapinho é também uma homenagem. No fim de 2022, estudantes do Bacharelado em Matemática Aplicada e Computacional (BMAC), através do Centro Acadêmico dos estudantes do IME-USP, o CAMat, entrevistaram o professor Manuel Valentim de Pera Garcia, carinhosamente apelidado de Mané, que <a href="https://memorial.ime.usp.br/homenageados/14">infelizmente nos deixou em 2025</a>. Em um dos diversos assuntos da entrevista, Mané fala sobre a criação do BMAC e, a respeito da ideia inicial do curso noturno ter um trabalho de formatura e o diurno (BMA) não, diz:
        </p>
        <blockquote>
            Nós já éramos o patinho feio, o BMA, desse jeito íamos ficar o patinho horroroso.
        </blockquote>
        <p>
            <a href="https://camat.ime.usp.br/boletime_post/2023/01/03/entrevista-mane.html" target="_blank">A entrevista completa pode ser encontrada aqui</a>. Fica nossa homenagem ao nosso inesquecível Mané.
        </p>
        <p>
            Assim, nasceu o Semapinho.
        </p>
    </div>
    <div class="col col-4 col-lg-2">
        <img src="{{ site.url }}/img/semapinho/semapinho_pintado.png">
    </div>
</div>

</section>