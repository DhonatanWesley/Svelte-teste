import { writable } from 'svelte/store';

const Produtos = writable([
    {id: '0',  codigo: 'DW000', nome: 'Agua com gás Crystal 500ml',                               un: 'UN', valor: 3.10,      src: 'https://www.drogariaminasbrasil.com.br/media/product/e35/agua-mineral-crystal-natural-com-gas-500ml-e28.jpg'},
    {id: '1',  codigo: 'DW001', nome: 'Sprite Lemon Fresh 510ml - Limao',                         un: 'UN', valor: 4.50,      src: 'https://www.drogariaminasbrasil.com.br/media/product/e7a/refrigerante-sprite-lemon-fresh-510ml-2ca.jpg'},
    {id: '2',  codigo: 'DW002', nome: 'Caneta BIC Cristal Azul',                                  un: 'CX', valor: 40.69,     src: 'https://commerceplus.com.br/uploads/produto_fotos/20200122165954_bicazul.jpg'},
    {id: '3',  codigo: 'DW003', nome: 'Caneta BIC Bold Preta',                                    un: 'CX', valor: 33.89,     src: 'https://farmaciaindiana.vteximg.com.br/arquivos/ids/214056/70330181120.jpg?v=636906725361830000'},
    {id: '4',  codigo: 'DW004', nome: 'Smartphone Iphone 13 GOLD',                                un: 'UN', valor: 5500.00,   src: 'https://m.media-amazon.com/images/I/619m8rLBQSL._AC_SX522_.jpg'},
    {id: '5',  codigo: 'DW005', nome: 'Smartphone Iphone 13 SPACE GRAY',                          un: 'UN', valor: 6000.00,   src: 'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1925070974'},
    {id: '6',  codigo: 'DW006', nome: 'Smartphone Iphone XR Preto',                               un: 'UN', valor: 3100.00,   src: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1469097635'},
    {id: '7',  codigo: 'DW007', nome: 'Guitarra Michael GM750n Gold Top',                         un: 'UN', valor: 1850.00,   src: 'https://http2.mlstatic.com/D_NQ_NP_805538-MLB43401924093_092020-O.jpg'},
    {id: '8',  codigo: 'DW008', nome: 'Monitor Gamer Curvo 29 Polegadas',                         un: 'UN', valor: 4600.00,   src: 'https://images.kabum.com.br/produtos/fotos/157553/monitor-lg-led-29-ultrawide-ips-hdmi-displayport-hdr-com-vesa-e-alto-falante-amd-radeon-freesync-29wl500_1620660434_g.jpg'},
    {id: '9',  codigo: 'DW009', nome: 'Macbook Pro 15 2022 Chip M1 32Gb Ran 512Gb HD Space Gray', un: 'UN', valor: 37900.00,  src: 'https://appledicas.com/wp-content/uploads/2020/11/Apple_new-macbookpro-wallpaper-screen_11102020_big.jpg.large_.jpg'},
    {id: '10', codigo: 'DW010', nome: 'Bicicleta Avance Inception Aro 29',                        un: 'UN', valor: 1479.99,   src: 'https://images.tcdn.com.br/img/img_prod/863891/bicicleta_aro_29_avance_21v_cambio_importado_freio_a_disco_mecanico_251_1_20201125164257.jpg'},
    {id: '11', codigo: 'DW011', nome: 'Patinete Elétrico Xiaomi Essential 250W',                  un: 'UN', valor: 2700.00,   src: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1517458054'},
    {id: '12', codigo: 'DW012', nome: 'Mouse Usb Gamer T-wolf V1 RGB',                            un: 'UN', valor: 20.00,     src: 'https://cf.shopee.com.br/file/474ad3f28c0fc3c20bcf878c2438805c'},
    {id: '13', codigo: 'DW013', nome: 'Volkswsagen Jetta GLI 2.0 Turbo 230 CV',                   un: 'UN', valor: 144000.00, src: 'https://revistacarro.com.br/wp-content/uploads/2019/06/Jetta-3.jpg'},
    {id: '14', codigo: 'DW014', nome: 'Funko Pop Marvel: Doctor Stranger',                        un: 'UN', valor: 172.22,    src: 'https://m.media-amazon.com/images/I/71H82d8IfnL._AC_SL1500_.jpg'}
]);

export default Produtos;