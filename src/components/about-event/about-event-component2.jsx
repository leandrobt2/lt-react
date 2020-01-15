import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ImageHelper from '../../helper/image-helper';

class AboutEventComponent2 extends React.Component {

    isNotMobile() {
        return matchMedia("(min-width: 768px) and (min-height: 500px)").matches;
    }

    imageUrl1 = null;
    imageUrl2 = null;

    constructor() {
        super();
        this.imageUrl1 = new ImageHelper().getRandonImages(1, 'portrait', 'm')[0].url;
        this.imageUrl2 = new ImageHelper().getRandonImages(1, 'portrait', 'm')[0].url;
    }

    render() {
        return (
            <div>
                <section className="about-our-event" id="aboutEventComponent">
                    <div className="container">
                        <div className="row about-our-event-body">
                            <div className="about-our-event-left col-md-8 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <div className="about-our-event-left-body">
                                    <h2>RECRIAÇÃO HISTÓRICA, O PROJETO E SEUS FUNDADORES. </h2>
                                    <p>
                                        Em diversos lugares do mundo a recriação histórica é elevada a patamares inimagináveis, onde os recriadores se reúnem para troca de conhecimentos voltados para tudo o que o período recriado pode abranger, seja no preparo da comida, técnicas para produção de itens, jogos, lutas, carpintaria, arte e costumes. <br />
                                        No Brasil existem diversos grupos onde cada um em sua respectiva cidade pratica o recriacionismo histórico, e de tempos em tempos se reúnem, momento no qual todos deixam de lado preocupações com o trabalho, estresses no transito, computadores e televisores, para entrarem em uma imersão onde o simples passa a ser redescoberto como sendo algo essencial em nossas vidas.
                                </p>
                                    <p>
                                        Importante informar que o ato de recriar exige embasamento histórico em achados arqueológicos e pesquisas, o que da uma diretriz ao grupo, que pode estar escolhendo qualquer período da história para recriar, no nosso caso, recriamos um assentamento da era viking (sec.8 ao 11).
                                    </p>

                                    <p>
                                        Nossa história começou por intermédio do nosso fundador Paulo, que já praticava a recriação histórica desde 2009 e foi estudando maneiras de iniciar este projeto.  <br />
                                        Tudo foi desenhado, terras foram visitadas e materiais foram orçados mesmo antes de termos condições de realizarmos algo.
                                        No momento certo Paulo largou o emprego e com os recursos acumulados resolveu tirar o projeto do papel.
                                        Contudo, o projeto tornou-se muito maior, pois bons amigos (mais que isso, verdadeiros irmãos!) abraçaram desde o começo a ideia e juntaram-se na realização deste sonho, são eles: Rafael, Leandro e Agostinho.
                                    </p>
                                    <p>
                                        Apenas utilizando recursos próprios e realizando forças tarefas, estamos erguendo juntos, estrutura após estrutura; e assim seguiremos, unidos, pois o que estamos fazendo hoje não será para uso apenas dos que aqui estão lendo essa mensagem, mas também para seus filhos e netos, e após muitas estruturas já estiverem sendo substituídas por outras, nossos feitos estarão registrados em forma de pedras rúnicas espalhadas pela nossa Vila Viking.
                                    </p>
                                </div>
                            </div>{
                                this.isNotMobile() &&
                                <div className="about-our-event-right col-sm-4 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                    <img src={this.imageUrl1}></img>
                                </div>
                            }
                        </div>
                    </div>
                </section>

                <section className="our-featured-speaker" id="section-2">
                    <div className="container">

                        <div className="row our-featured-speaker-body">
                            {
                                this.isNotMobile() &&
                                <div className="our-featured-speaker-left col-md-6 wow fadeInRight animated" data-wow-offset="120" data-wow-duration="1.5s">
                                    <img src={this.imageUrl2}></img>
                                </div>
                            }
                            <div className="our-featured-speaker-right col-md-6 wow fadeInLeft animated" data-wow-offset="120" data-wow-duration="1.5s">
                                <h2>UM POUCO MAIS... </h2>
                                <p>
                                    Poucos em nosso país sabem, mas o trabalho de recriação histórica é bem comum em todo o mundo e abrange diversos períodos da história, por exemplo, existem recriadores do Império Romano, Celtas e até da Primeira e Segunda Guerra Mundial, sem necessidade de ligação direta, tanto de localização geográfica como de apresentação de características físicas semelhantes às do povo do período que está sendo recriado, no nosso caso, a era viking (sec.8 ao sec.11 DC).
                                </p>
                                <p>
                                    Quando falamos da recriação histórica, abrangemos desde atividades do cotidiano como alimentação, cultivo, produção de itens e vestimentas, até treinamentos, jogos, musicas e batalhas.
                                    Em meio essas atividades os envolvidos tem a oportunidade de não apenas sentirem na pele como seria viver no período, aprendendo sobre a história e costumes, como também conseguem desconectarem-se da rotina, quase sempre estressante das cidades grandes, deixando de lado o trânsito, seus computadores, celulares e vídeo games.
                                </p>

                                <p>
                                    Em nosso projeto contamos com o apoio de diversos artesãos e grupos de recriação histórica, brasileiros e estrangeiros, dentre estes muitos estudiosos e inclusive historiadores, tudo isso para trazermos um ambiente não apenas bonito, mas acima de tudo com um bom embasamento histórico.
                                </p>
                                <p>
                                    Nosso espaço está sendo feito sim para festejarmos e curtirmos muito juntos, mas principalmente visando o compartilhamento de experiências e conhecimentos com todos que vierem a passarem um tempo conosco.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutEventComponent2;