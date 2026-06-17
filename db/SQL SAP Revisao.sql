/* Cria o banco de dados */
CREATE DATABASE atividade_single_page;

/* Seleciona o banco que será utilizado */
USE atividade_single_page;

/* --------------Criar Tabela de Produtos-------------- */

CREATE TABLE produtos(

/* identificador único*/
id INT auto_increment primary key,
/*Nome do Produto*/
nome varchar(100),
/* categoria */
categoria varchar(100),
/*descricao*/
descricao TEXT
);

/* Mostrar os campos da tabela */
describe produtos;

/*selecionar todos os registros*/
select * from produtos;

/*Exibe algumas colunas*/
select nome,categoria from produtos;

/*Buscar apenas produtos de uma categoria*/
select * from produtos where categoria='Perifericos';

/*Ordenar produtos por nome*/
select * from produtos order by nome;

/*Em ordem decrescente*/
select * from produtos order by nome DESC;

/*Mostrar apenas os 5 primeiro ordenados */
select * from produtos  order by nome ASC limit 5;

/*conta quantos registros existem*/
select count(*) as total from produtos;

/* Adiciona uma nova coluna chamada imagem */
ALTER TABLE produtos
ADD COLUMN imagem VARCHAR(255);

/*-------------------------------------------------------*/
/* Atualiza a imagem do produto por ID */

/* Mouse Gamer */
UPDATE produtos
SET imagem = 'imagens/mouse-gamer.jpg'
WHERE id = 1;

/* Teclado Mecânico */
UPDATE produtos
SET imagem = 'imagens/teclado-mecanico.jpg'
WHERE id = 2;

/* Monitor 24 Polegadas */
UPDATE produtos
SET imagem = 'imagens/monitor-24-polegadas.jpg'
WHERE id = 3;

/* Notebook Core i5 */
UPDATE produtos
SET imagem = 'imagens/notebook-core-i5.jpg'
WHERE id = 4;

/* SSD 480GB */
UPDATE produtos
SET imagem = 'imagens/ssd-480gb.jpg'
WHERE id = 5;

/* HD Externo 1TB */
UPDATE produtos
SET imagem = 'imagens/hd-externo-1tb.jpg'
WHERE id = 6;

/* Webcam Full HD */
UPDATE produtos
SET imagem = 'imagens/webcam-full-hd.jpg'
WHERE id = 7;

/* Headset Gamer */
UPDATE produtos
SET imagem = 'imagens/headset-gamer.jpg'
WHERE id = 8;

/* Caixa de Som Bluetooth */
UPDATE produtos
SET imagem = 'imagens/caixa-som-bluetooth.jpg'
WHERE id = 9;

/* Impressora 3D Ender 3 */
UPDATE produtos
SET imagem = 'imagens/impressora-3d-ender3.jpg'
WHERE id = 10;

/* Filamento PLA */
UPDATE produtos
SET imagem = 'imagens/filamento-pla.jpg'
WHERE id = 11;

/* Placa Arduino Uno */
UPDATE produtos
SET imagem = 'imagens/arduino-uno.jpg'
WHERE id = 12;

/* Sensor Ultrassônico */
UPDATE produtos
SET imagem = 'imagens/sensor-ultrassonico.jpg'
WHERE id = 13;

/* Módulo Bluetooth HC05 */
UPDATE produtos
SET imagem = 'imagens/modulo-bluetooth-hc05.jpg'
WHERE id = 14;

/* Fonte 12V 5A */
UPDATE produtos
SET imagem = 'imagens/fonte-12v-5a.jpg'
WHERE id = 15;

/* Raspberry Pi 4 */
UPDATE produtos
SET imagem = 'imagens/raspberry-pi-4.jpg'
WHERE id = 16;

/* Switch 8 Portas */
UPDATE produtos
SET imagem = 'imagens/switch-8-portas.jpg'
WHERE id = 17;

/* Roteador WiFi */
UPDATE produtos
SET imagem = 'imagens/roteador-wifi.jpg'
WHERE id = 18;

/* Projetor Multimídia */
UPDATE produtos
SET imagem = 'imagens/projetor-multimidia.jpg'
WHERE id = 19;

/* Tablet Educacional */
UPDATE produtos
SET imagem = 'imagens/tablet-educacional.jpg'
WHERE id = 20;


/* ADICIONAR CAMPO DETALHES */ 

/* Altera a tabela produtos Adiciona a coluna detalhes */ 
ALTER TABLE produtos 
ADD COLUMN detalhes TEXT;


/*Inserindo Descrições Completas*/
/* Atualiza os detalhes do produto de ID 1 */ 
UPDATE produtos 
SET detalhes = 'Mouse Gamer RGB desenvolvido para jogos de alta performance. 
Possui sensor óptico de alta precisão, iluminação RGB configurável, 6 botões programáveis e conexão USB. 
É indicado para jogos FPS, MOBA, produtividade e uso profissional.' 
WHERE id = 1;

/* Atualiza os detalhes do produto de ID 2 */
UPDATE produtos
SET detalhes = 'Teclado Mecânico Gamer com switches de alta durabilidade.
Conta com iluminação RGB personalizável, teclas anti-ghosting
e estrutura resistente para uso intenso.
Ideal para jogos e digitação profissional.'
WHERE id = 2;

UPDATE produtos
SET detalhes = 'Headset Gamer com som estéreo de alta qualidade.
Possui microfone ajustável com redução de ruído,
almofadas confortáveis e conexão P2 ou USB.
Perfeito para jogos online e chamadas de voz.'
WHERE id = 3;

UPDATE produtos
SET detalhes = 'Monitor Full HD de 24 polegadas com excelente qualidade de imagem.
Conta com taxa de atualização elevada, entradas HDMI e VGA
e design moderno com bordas finas.
Ideal para trabalho, estudos e entretenimento.'
WHERE id = 4;

UPDATE produtos

SET detalhes = '
Notebook equipado com processador moderno e armazenamento SSD.
Oferece desempenho eficiente para tarefas do dia a dia,
estudos, navegação na internet e trabalho remoto.
Possui tela de alta definição e bateria de longa duração.
'

WHERE id = 5;

UPDATE produtos

SET detalhes = '
Cadeira Gamer ergonômica desenvolvida para máximo conforto.
Possui ajuste de altura, apoio para braços,
encosto reclinável e acabamento premium.
Ideal para longas sessões de uso.
'

WHERE id = 6;

UPDATE produtos

SET detalhes = '
Webcam Full HD com excelente qualidade de vídeo.
Conta com microfone integrado, foco automático
e conexão USB de fácil instalação.
Indicada para reuniões, aulas e transmissões online.
'

WHERE id = 7;

UPDATE produtos

SET detalhes = '
Caixa de Som Bluetooth com áudio potente e design compacto.
Possui bateria recarregável, conexão sem fio
e compatibilidade com diversos dispositivos.
Ideal para uso doméstico e portátil.
'

WHERE id = 8;

UPDATE produtos

SET detalhes = '
SSD de alta velocidade para armazenamento eficiente.
Proporciona inicialização rápida do sistema,
maior desempenho em aplicativos e transferência ágil de arquivos.
Compatível com desktops e notebooks.
'

WHERE id = 9;

UPDATE produtos

SET detalhes = '
HD Externo portátil com ampla capacidade de armazenamento.
Ideal para backup de arquivos, fotos, vídeos e documentos.
Possui conexão USB de alta velocidade e fácil transporte.
'

WHERE id = 10;

UPDATE produtos

SET detalhes = '
Impressora Multifuncional com funções de impressão,
cópia e digitalização em um único equipamento.
Oferece excelente qualidade e economia de tinta.
Indicada para uso residencial e corporativo.
'

WHERE id = 11;

UPDATE produtos

SET detalhes = '
Roteador Wi-Fi de alta performance para redes domésticas.
Possui amplo alcance de sinal, múltiplas antenas
e suporte para diversos dispositivos conectados.
Ideal para streaming e jogos online.
'

WHERE id = 12;

UPDATE produtos

SET detalhes = '
Smartwatch com monitoramento de atividades físicas e saúde.
Conta com notificações inteligentes, tela sensível ao toque
e bateria de longa duração.
Compatível com Android e iOS.
'

WHERE id = 13;

UPDATE produtos

SET detalhes = '
Tablet com tela de alta resolução e desempenho eficiente.
Ideal para estudos, leitura, navegação na internet
e consumo de conteúdo multimídia.
Possui armazenamento interno expansível.
'

WHERE id = 14;

UPDATE produtos

SET detalhes = '
Microfone Condensador com excelente captação de áudio.
Indicado para gravações, podcasts, transmissões ao vivo
e reuniões online.
Possui conexão prática e alta qualidade sonora.
'

WHERE id = 15;

UPDATE produtos

SET detalhes = '
Placa de Vídeo dedicada para alto desempenho gráfico.
Ideal para jogos modernos, edição de vídeo
e aplicações profissionais.
Oferece excelente qualidade visual e processamento avançado.
'

WHERE id = 16;

UPDATE produtos

SET detalhes = '
Memória RAM de alta velocidade para melhorar o desempenho do sistema.
Proporciona maior fluidez em multitarefas,
jogos e aplicações exigentes.
Compatível com diversas plataformas.
'

WHERE id = 17;

UPDATE produtos

SET detalhes = '
Processador de última geração com excelente desempenho.
Projetado para executar múltiplas tarefas com eficiência,
oferecendo velocidade e estabilidade.
Ideal para computadores modernos.
'

WHERE id = 18;

UPDATE produtos

SET detalhes = '
Fonte de Alimentação com alta eficiência energética.
Possui proteção contra surtos, sobrecarga e curto-circuito,
garantindo segurança para os componentes do computador.
'

WHERE id = 19;

UPDATE produtos

SET detalhes = '
Gabinete Gamer com design moderno e excelente ventilação.
Conta com espaço para múltiplos componentes,
painel lateral em vidro temperado e suporte para iluminação RGB.
Ideal para montagem de PCs de alto desempenho.
'

WHERE id = 20;

