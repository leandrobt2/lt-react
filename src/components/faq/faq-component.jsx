import React from 'react';
import ImageHelper from '../../helper/image-helper';
//import faqImg from '../../assets/image/grid-image/3.jpg';

class FaqComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            faqs: [
                // {
                //     id: 1,
                //     question: "Qual previsão de Inauguração?",
                //     answer: "Ainda não temos como afirmar uma data devido aos tipos de estruturas que estamos construindo, como são estruturas históricas nunca antes feitas por nós, algumas levam mais tempo que as outras, mas avisaremos com antecedência"
                // },
                {
                    id: 2,
                    question: "Será espaço apenas para eventos?",
                    answer: "Eventos são apenas uma parte do que pretendemos realizar no espaço, faremos também encontros menores destinados a atividades específicas e mais focadas; realizaremos palestras sobre diversos tipos de assuntos da era viking; e a longo prazo disponibilizaremos cabanas históricas para quem quiser passar alguns dias vivendo na vila, etc."
                },
                {
                    id: 3,
                    question: "Vamos locar para casamentos na temática?",
                    answer: "Sem duvida! E também daremos todo o apoio possível para o casal ter um dia mais que especial."
                },
                {
                    id: 4,
                    question: "Aceitam locar para sessão de fotos e gravações?",
                    answer: "Aceitamos sim, tanto para grandes gravações, como para trabalhos menores e mais pessoais. Permanecemos também com pessoal caracterizado para participação nas fotos e gravações, pedimos apenas que informem com antecedência caso seja necessário um numero muito grande de pessoas."
                },
                {
                    id: 5,
                    question: "Vocês possuem, e se sim, qual o cronograma de atividades?",
                    answer: "Em cada encontro ou eventos, as atividades poderão variar, sendo que muita coisa vai acontecer naturalmente e com a participação dos presentes, logo, nunca será um dia igual ao outro."
                },
                {
                    id: 6,
                    question: "Há local para camping?",
                    answer: "Abriremos o espaço para camping em encontros específicos, priorizando sempre o publico que tem interesse em aprenderem e vivenciarem a proposta do espaço, ou seja, curtirem alguns dias vivendo como se estivessem em uma vila da era viking."
                },
                {
                    id: 7,
                    question: "Há chalés para Passarmos uma temporada?",
                    answer: "Em nosso projeto uma das etapas é a construção de chalés (cabanas históricas) para acomodarmos aqueles que querem passar mais de um dia no espaço, claro, isso sendo devidamente agendado, especialmente porque não vamos dispor de muitas cabanas, preservando a privacidade das pessoas e mantendo a paz no espaço."
                },
                // {
                //     id: 8,
                //     question: "Aceitam parceiros? ",
                //     answer: "Aceitamos sim, mas para isso acontecer precisamos conhecer tanto o trabalho dos parceiros, como todos os envolvidos pessoalmente. Em caso de interesse em parcerias visando comercialização de produtos, disponibilizaremos cabanas e tendas para isso, priorizando trabalhos que condizem com a proposta do espaço."
                // },
                {
                    id: 9,
                    question: "Como posso fazer para participar da construção e/ou outras atividades?",
                    answer: "Fiquem atentos na pagina, pois anunciaremos encontros para isso, com limite de convidados, dessa forma todos os interessados poderão ajudar na obra e outras funções no espaço, para tanto, procuraremos realizar um revezamento de pessoas."
                },
                {
                    id: 10,
                    question: "Quais são as regras que devo seguir ao participar de um evento na vila?",
                    answer: "Proibido uso de descartáveis (copos, pratos, talheres, canudos ou qualquer outro objeto feito de plástico que venham a serem descartados); \
                    Armamentos de ferro (espadas, machados, lanças) só serão permitidos entrarem se não tiverem fio de corte; \
                    Combates ou mesmo treinamentos com uso de armamentos feitos de ferro necessitam de proteções por parte dos envolvidos (ex.: gambeson, luvas, cota de malha, elmo) e serão realizados sob supervisão dos recriadores; \
                    É proibido qualquer tipo de brincadeira utilizando fogo, especialmente dentro ou próximo das cabanas; \
                    Dentro das cabanas o fogo sempre permanecerá baixo e nunca ficará sozinho quando em uso; \
                    Pedimos para os frequentadores evitarem assuntos relacionados a política, futebol ou qualquer coisa que possa gerar desconforto ou quebra da imersão; \
                    Proibido qualquer tipo de pregação religiosa de forma impositiva, em nosso assentamento todos são bem vindos independente do que acreditam ou seguem, prevalecendo sempre o respeito; \
                    É de responsabilidade de todos a conservação do espaço, tendo em vista que não se trata apenas de um local para festas, a Vila Viking será para sempre a nossa casa 😉"
                },
                {
                    id:11,
                    question:"Como é a alimentação em nossos encontros?",
                    answer:"A alimentação durante a era viking era bem rica, mudando de acordo com a região (tipo de solo e recursos naturais). \
                    Sendo composta principalmente por leite e seus derivados como queijo e manteiga, carne de porco, peixes, carne de caça, ensopados, ovos, frutas, cogumelos, chicória, cenouras, nabos, alface, pães, mel, nozes, cerveja, vinho, cidras... \
                    Logo, sempre que realizarmos nossos encontros faremos receitas utilizando os mesmos recursos do período, com algumas adaptações quando necessário."
                }
            ]
        };
    }
    render() {
        return (
            <section className="collapse-area" id="faqId">
                <div className="container">
                    <div className="row">
                        <div className="collapse-left col-sm-12 col-md-4 col-lg-4 hidden-xs hidden-sm wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s">
                            <img src={new ImageHelper().getRandonImages(1, 'portrait', 'm')[0].url} alt="" className="" />
                        </div>

                        <div className="collapse-right col-sm-12 col-md-offset-1 col-md-7 col-lg-offset-1 col-lg-7">

                            <h2 className="wow fadeInDown animated" data-wow-offset="10" data-wow-duration="1.5s">FAQ - Perguntas frequentes</h2>
                            <div className="panel-group" id="accordion">
                                {
                                    this.state.faqs.map(faq => { return this.renderQuestion(faq.id, faq.question, faq.answer); })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }

    renderQuestion(panelId, question, anwser) {
        let panelElementId = 'panel' + panelId;
        let collapseElementId = 'collapsePanel' + panelId;
        let collapseElementHref = '#' + collapseElementId;

        return (
            <div className="panel panel-default wow fadeInUp animated" data-wow-offset="10" data-wow-duration="1.5s" id={panelElementId} key={panelElementId}>
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={collapseElementHref} className="collapsed">
                            {question}
                            <span className="bar hidden-xs"></span>
                        </a>

                    </h4>
                </div>
                <div id={collapseElementId} className="panel-collapse collapse">
                    <div className="panel-body">
                        {anwser}
                    </div>

                </div>
            </div>
        );
    }
}

export default FaqComponent;