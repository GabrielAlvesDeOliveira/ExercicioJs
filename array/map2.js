const carrinho = [
    '{"nome": "Borracha", "preco": 4.35}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = prod => prod.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)