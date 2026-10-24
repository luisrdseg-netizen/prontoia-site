# ProntoIA

Site estático de produtos digitais para pequenos negócios.

## Desenvolvimento

Python 3: `python3 -m http.server 8000 --bind 0.0.0.0` na raiz do repositório. Não há dependências nem etapa de build.

## Produto

Kit Gestão Fácil IA v2 — R$ 29,90. Cinco abas; controles com 200 linhas preparadas. Saídas de estoque manuais; indicadores acumulados. Imagens do site são ilustrativas.

## Entrega e pagamentos

O arquivo Excel e o ZIP comercial não podem ser enviados para este repositório público. Anexe o ZIP apenas à área de membros protegida da Kiwify e teste o acesso do comprador.

O checkout começa desativado. Em `config.js`, preencha checkoutUrl com o endereço real HTTPS em pay.kiwify.com.br e supportEmail com o e-mail real. Defina salesEnabled como true somente após conferir preço, vendedor, políticas, download e compatibilidade do Excel. Os campos são públicos: nunca inclua senha, token ou segredo.

Antes de habilitar vendas, publique as informações reais do vendedor, suporte e políticas comerciais e conclua a validação de compatibilidade mencionada na página. Não há cobrança nem entrega automática implementada no próprio site; elas dependem da Kiwify.

## Publicação

Em GitHub Settings → Pages, selecione Deploy from a branch, branch main, pasta / (root). Confirme o resultado do deploy e teste o site público em HTTPS. Um push não comprova publicação bem-sucedida.
