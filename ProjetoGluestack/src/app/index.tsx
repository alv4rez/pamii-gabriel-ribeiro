import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // Código HTML simplificado com o seu Gluestack para carregar em qualquer lugar
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login App - Gluestack UI</title>
        <script src="https://unpkg.com" crossorigin></script>
        <script src="https://unpkg.com" crossorigin></script>
        <script src="https://unpkg.com"></script>
        <link rel="preconnect" href="https://googleapis.com">
        <link rel="preconnect" href="https://gstatic.com" crossorigin>
        <link href="https://googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; background-color: #F7FBFB; }
        </style>
    </head>
    <body>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
            <h1 style="color: #6C47FF; margin-bottom: 10px;">ProjetoGluestack</h1>
            <p style="color: #444; font-size: 18px;">Sua página HTML foi integrada com sucesso!</p>
        </div>
    </body>
    </html>
  `;

  // SE ESTIVER NO COMPUTADOR (WEB): Usa um iframe padrão do navegador
  if (Platform.OS === 'web') {
    return (
      <iframe 
        srcDoc={htmlContent}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Gluestack Web"
      />
    );
  }

  // SE ESTIVER NO CELULAR (ANDROID/IOS): Usa o WebView nativo
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <WebView 
        originWhitelist={['*']}
        source={{ html: htmlContent }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  webview: {
    flex: 1,
  },
});
