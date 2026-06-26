import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function LoginPage() {
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = {
    bgPage: isDark ? '#0F0D17' : '#F7F6FB',
    bgCard: isDark ? '#1A1726' : '#FFFFFF',
    textPrimary: isDark ? '#F0EDF9' : '#1A1523',
    textSecondary: isDark ? '#A09AAE' : '#6E6A7C',
    border: isDark ? '#2E2A3F' : '#E2E0EA',
    brandPrimary: '#6C47FF',
    inputBg: isDark ? '#231F33' : '#FAFAFA'
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('⚠️ Erro: Por favor, preencha todos os campos antes de entrar.');
      return;
    }

    if (!email.includes('@')) {
      alert('⚠️ Erro: Insira um endereço de e-mail válido.');
      return;
    }

    alert(`🎉 Sucesso! Tentando logar com o e-mail: ${email}`);
  };

  const handleGoogleLogin = () => {
    alert('🌐 Redirecionando para a autenticação segura do Google...');
  };

  const handleGithubLogin = () => {
    alert('🐱 Conectando com a API do GitHub para login...');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.bgPage }]}>
      
      <TouchableOpacity 
        style={[styles.themeToggle, { backgroundColor: theme.bgCard, borderColor: theme.border }]} 
        onPress={() => setIsDark(!isDark)}
      >
        <Text style={{ fontSize: 18 }}>{isDark ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>

      <View style={[styles.card, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
        
        <View style={styles.brandRow}>
          <View style={[styles.brandIcon, { backgroundColor: theme.brandPrimary }]}>
            <Text style={styles.brandIconText}>Siles</Text>
          </View>
          <Text style={[styles.brandName, { color: theme.textPrimary }]}>Faça o seu login</Text>
        </View>

        <Text style={[styles.title, { color: theme.textPrimary }]}>Bem-vindo de volta</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Insira suas credenciais para acessar sua conta gerenciada.
        </Text>

        <View style={styles.form}>
          <Text style={[styles.label, { color: theme.textPrimary }]}>Endereço de E-mail</Text>
          <TextInput 
            style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.textPrimary }]}
            placeholder="exemplo@email.com"
            placeholderTextColor={theme.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.labelRow}>
            <Text style={[styles.label, { color: theme.textPrimary }]}>Senha</Text>
            <TouchableOpacity onPress={() => alert('ℹ️ Uma mensagem de recuperação foi enviada para o seu e-mail cadastrado.')}>
              <Text style={[styles.forgotText, { color: theme.brandPrimary }]}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.textPrimary }]}
            placeholder="••••••••"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity 
            style={[styles.btnPrimary, { backgroundColor: theme.brandPrimary }]}
            onPress={handleLogin}
          >
            <Text style={styles.btnPrimaryText}>Entrar na Conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerRow}>
          <View style={[styles.line, { backgroundColor: theme.border }]} />
          <Text style={[styles.dividerText, { color: theme.textSecondary }]}>OU CONTINUAR COM</Text>
          <View style={[styles.line, { backgroundColor: theme.border }]} />
        </View>

        <TouchableOpacity 
          style={[styles.btnSocial, { borderColor: theme.border }]}
          onPress={handleGoogleLogin}
        >
          <Text style={[styles.btnSocialText, { color: theme.textPrimary }]}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btnSocial, { borderColor: theme.border, marginTop: 10 }]}
          onPress={handleGithubLogin}
        >
          <Text style={[styles.btnSocialText, { color: theme.textPrimary }]}>GitHub</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  themeToggle: { position: 'absolute', top: 40, right: 20, width: 44, height: 44, borderRadius: 12, borderWidth: 1, justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  card: { width: '100%', maxWidth: 400, borderRadius: 20, padding: 30, borderWidth: 1, shadowColor: '#6C47FF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 4 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  brandIcon: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  brandIconText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  brandName: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 6 },
  subtitle: { fontSize: 14, lineHeight: 20, marginBottom: 24 },
  form: { width: '100%' },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  label: { fontSize: 13, fontWeight: '600', marginBottom: 6 },
  forgotText: { fontSize: 13, fontWeight: '600' },
  input: { width: '100%', height: 44, borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, fontSize: 14 },
  btnPrimary: { width: '100%', height: 48, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 24 },
  btnPrimaryText: { color: '#FFF', fontWeight: '600', fontSize: 15 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  line: { flex: 1, height: 1 },
  dividerText: { fontSize: 11, fontWeight: 'bold', paddingHorizontal: 10 },
  btnSocial: { width: '100%', height: 44, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },
  btnSocialText: { fontWeight: '600', fontSize: 14 }
});
