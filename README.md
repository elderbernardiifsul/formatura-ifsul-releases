# Formatura IFSul

Programa para Windows 10 ou superior que organiza as cerimônias de formatura do câmpus: cadastro, protocolo, atas, termos, convite — em PDF e DOCX.

## Instalar

1. Em **Releases** (à direita), baixe o `FormaturaIFSul-Setup-X.Y.Z.exe` mais recente.
2. Abra o arquivo. O instalador ainda não tem assinatura digital e pode mostrar o aviso **"O Windows protegeu o computador"**. Depois de confirmar que o arquivo veio deste repositório, use **Mais informações → Executar assim mesmo**.
3. Não precisa de senha de administrador. O programa fica em `%LocalAppData%\Programs\Formatura IFSul`, com atalho no Menu Iniciar.

Na primeira vez, o programa pede uma pasta de trabalho (sugere `Documentos\Formaturas IFSul`) e o perfil do câmpus.

## Atualizar

O programa avisa quando há versão nova e se atualiza sozinho com um clique. Os seus modelos, o cânone, o perfil e as formaturas ficam na pasta de trabalho e **não são alterados** por uma atualização.

### Aplicar as correções de textos da versão 0.1.2

As 14 falhas conhecidas de flexão de gênero, divergência entre falas e protocolos e capitalização do EMI foram corrigidas nos modelos padrão.

Pastas de trabalho novas já recebem esses modelos. Em uma pasta existente, abra **Modelos → Restaurar padrão** para cada arquivo abaixo, revise a comparação e confirme:

- `fala_depex.md`, `fala_diretor.md`, `fala_reitoria.md`;
- `protocolo_emi.md`, `protocolo_gabinete.md`, `protocolo_graduacao.md`;
- `termo_colacao.md`.

A restauração guarda o arquivo anterior em `.bak`. Se você personalizou algum modelo, preserve suas alterações ao revisar a comparação. Depois, gere novamente os documentos das formaturas em aberto. Os documentos de cerimônias arquivadas permanecem como registro histórico.

O contrato de campos é atualizado automaticamente ao abrir a pasta; isso não substitui os modelos personalizados. As decisões sobre os textos também estão registradas no cânone padrão da versão 0.1.2.

## Validação da primeira versão

A versão 0.1.1 inicia a distribuição após a revisão E2E da interface. Antes do uso numa cerimônia, confira os documentos gerados.
A validação interativa de instalação e atualização entre versões numa máquina Windows do usuário
está em andamento. Os exemplos incluídos no instalador são fictícios.

## Código

O código-fonte fica em repositório privado do Gabinete da Direção-Geral. Este repositório só publica os instaladores.
