# rn-shoes-app

`rn-shoes-app` é um aplicativo simples de loja de sapatos desenvolvido com React Native usando [Expo](https://expo.dev/). O projeto inclui recursos como deep linking e notificações push utilizando OneSignal.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Configuração](#configuração)
- [Configuração de Deep Linking](#configuração-de-deep-linking)
- [Notificações Push com OneSignal](#notificações-push-com-onesignal)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

- **Listagem de Produtos**: Exibe uma lista de sapatos disponíveis para compra.
- **Detalhes do Produto**: Mostra informações detalhadas sobre cada sapato.
- **Adicionar ao Carrinho**: Os usuários podem adicionar sapatos ao carrinho e prosseguir para o checkout.
- **Deep Linking**: Permite abrir o app diretamente em produtos ou seções específicas usando URLs personalizadas.
- **Notificações Push**: Os usuários recebem atualizações sobre ofertas e novos lançamentos via notificações push com OneSignal.

## Instalação

Para começar com o projeto, clone o repositório e instale as dependências necessárias.

```bash
git clone https://github.com/yourusername/rn-shoes-app.git
cd rn-shoes-app
npm install
```

## Configuração do OneSignal

Para o correto funcionamento do OneSignal no projeto, é necessário fornecer as chaves de API específicas para Android e iOS. Siga os passos abaixo para configurar o OneSignal no arquivo `app.tsx` do projeto.

### 1. Obtenha suas chaves de API

- Acesse o painel do OneSignal: [https://onesignal.com](https://onesignal.com).
- No painel do seu aplicativo, vá até as configurações de plataforma.
- Copie as chaves `ANDROID_APP_KEY` para Android e `IOS_APP_KEY` para iOS.

### 2. Adicione as chaves no arquivo `app.tsx`

No arquivo `app.tsx` do projeto, adicione as chaves da seguinte forma:

```javascript
import OneSignal from "react-native-onesignal";
import { Platform } from "react-native";

// Substitua pelas suas chaves de API do OneSignal para Android e iOS
const onSignalId =
  Platform.OS === "android" ? "YOUR_ANDROID_APP_KEY" : "YOUR_IOS_APP_KEY";

OneSignal.initialize(onSignalId);
OneSignal.Notifications.requestPermission(true);
```
