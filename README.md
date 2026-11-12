# Formatura IFSul

Programa para Windows 10 ou superior que organiza formaturas e aberturas de eventos do câmpus: cadastro e documentos em PDF e DOCX.

**Manual de uso:** https://elderbernardiifsul.github.io/formatura-ifsul-releases/ — passo a passo com imagens, da instalação ao arquivamento. Cada release também traz o `Manual-FormaturaIFSul-X.Y.Z.html`, que abre sem internet.

## Instalar

1. Em **Releases** (à direita), baixe o `FormaturaIFSul-Setup-X.Y.Z.exe` mais recente. O [passo a passo com imagens](https://elderbernardiifsul.github.io/formatura-ifsul-releases/#instalar) mostra cada tela.
2. Abra o arquivo. O instalador ainda não tem assinatura digital e pode mostrar o aviso **"O Windows protegeu o computador"**. Depois de confirmar que o arquivo veio deste repositório, use **Mais informações → Executar assim mesmo**.
3. Não precisa de senha de administrador. O programa fica em `%LocalAppData%\Programs\Formatura IFSul`, com atalho no Menu Iniciar.

Na primeira vez, o programa pede uma pasta de trabalho (sugere `Documentos\Formaturas IFSul`) e o perfil do câmpus.

## Atualizar

O programa avisa quando há versão nova e se atualiza com um clique. Modelos personalizados, perfil e cerimônias ficam preservados na pasta de trabalho. Ao abrir uma pasta antiga, o contrato de campos é atualizado com backup; novos tipos e modelos ausentes podem ser acrescentados sem substituir os personalizados.

### Correções na versão 0.1.5

Contagens no singular corrigidas ("1 documento", "1 formando"), telas do manual atualizadas e notas de atualização extraídas da tag anotada da release.

### Abertura de eventos na versão 0.1.3

Em **Formaturas e eventos → Nova cerimônia**, escolha **Abertura de eventos**. Preencha identificação, mesa e pronunciamentos, programação e opções. O protocolo pode ser pré-visualizado e exportado em PDF e DOCX, sem cadastrar cursos, formandos ou juramento.

A ordem das falas é independente da composição da mesa. Hinos, registro de presenças e declaração formal são opcionais. A próxima atividade pode começar imediatamente ou ser anunciada com horário e local após um intervalo. Confira o roteiro e o tempo dos atos antes do evento.

Pastas de trabalho anteriores recebem o novo tipo e os arquivos ausentes automaticamente ao abrir. O registro anterior é preservado em `.bak`; modelos já personalizados não são substituídos.

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
