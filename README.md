# 🦷 Lege Clinic - Odontologia Premium

Site moderno e elegante para clínica odontológica desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Estrutura do Projeto

```
├── index.html          # Página Inicial
├── sobre.html          # Página Sobre a Clínica
├── trabalhos.html      # Galeria de Procedimentos
├── contato.html        # Página de Contato
├── style.css           # Estilos Globais
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## ✨ Características Principais

### Design Premium
- ✅ Estética minimalista com tons neutros e brancos
- ✅ Bastante espaço em branco (whitespace)
- ✅ Tipografia refinada e profissional
- ✅ Glassmorphism e efeitos modernos
- ✅ Sombras suaves e delicadas

### Animações e Efeitos
- ✅ Scroll cinematográfico suave
- ✅ Animações de blobs degradados
- ✅ Efeitos de parallax
- ✅ Transições suaves em hover
- ✅ Reveal animations ao descer

### Interatividade
- ✅ Menu mobile responsivo
- ✅ Filtro de galeria antes/depois
- ✅ Slider interativo before/after (touch-friendly)
- ✅ Navegação smooth
- ✅ Botão scroll to top automático

### Responsividade
- ✅ Mobile-first design
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Menu hamburger em dispositivos pequenos
- ✅ Imagens otimizadas

## 🎨 Paleta de Cores

```
Primária:        #0f172a (Azul Escuro)
Secundária:      #1e293b (Cinza Escuro)
Accent:          #3b82f6 (Azul Vibrante)
Background:      #f8fafc (Branco/Cinza Claro)
```

## 📄 Páginas

### 1. **Página Inicial (index.html)**
- Hero section elegante com blobs animados
- Preview de serviços
- Seção de diferenciais
- Depoimentos de pacientes
- CTA call-to-action

### 2. **Página Sobre (sobre.html)**
- História da clínica
- Missão, Visão e Valores
- Equipe especializada com fotos
- Razões para escolher
- Estatísticas e números

### 3. **Página Trabalhos (trabalhos.html)**
- Galeria com filtros por categoria
- Cards antes/depois interativos
- Slider before/after com hover
- Descrição detalhada de procedimentos
- Timeline do processo

### 4. **Página Contato (contato.html)**
- Formulário de contato
- Informações de contato
- Mapa Google Maps integrado
- Links para WhatsApp e redes sociais
- Botão scroll to top

## 🚀 Como Usar

### 1. Abrir o site
Simplesmente abra qualquer arquivo HTML em seu navegador:
```bash
# Usando live server (recomendado)
# VS Code: Instale a extensão Live Server
# Clique com botão direito em index.html > Open with Live Server

# Ou abra diretamente no navegador
open index.html
```

### 2. Personalizar Informações

**Em todos os arquivos HTML, procure e substitua:**
- `Lege Clinic` → Seu nome de clínica
- `Av. Premium, 123 - São Paulo` → Seu endereço
- `(11) 99999-9999` → Seu telefone
- `contato@legeclinic.com` → Seu email
- `https://wa.me/5511999999999` → Link WhatsApp correto

### 3. Personalizar Cores

No arquivo `style.css`, altere as cores no início:
```css
:root {
    --primary-color: #0f172a;
    --secondary-color: #1e293b;
    --accent-color: #3b82f6;
    --accent-light: #60a5fa;
    /* ... outras cores ... */
}
```

### 4. Trocar Imagens

Todas as imagens usam URLs do Unsplash. Para suas próprias imagens:
1. Substitua as URLs `src="https://images.unsplash.com/..."` por caminhos locais
2. Coloque as imagens em uma pasta `/images`
3. Referencie como `src="images/sua-imagem.jpg"`

## 📱 Funcionalidades JavaScript

### Já Inclusos:
- ✅ Menu hamburger responsivo
- ✅ Navbar com blur e scroll effect
- ✅ Scroll animations (fade in/slide in)
- ✅ Before/After slider interativo
- ✅ Filtro de galeria
- ✅ Counter de números animados
- ✅ Scroll to top button
- ✅ Smooth scroll para âncoras
- ✅ Form validation básico
- ✅ Parallax effect nos blobs

## 🎯 Seções de Cada Página

### **index.html**
```
Navbar (Fixed)
Hero Section com Blobs Animados
Serviços Preview (4 cards)
Diferenciais (2 colunas)
Depoimentos (3 cards)
CTA Section
Footer
```

### **sobre.html**
```
Navbar
Page Header
História (2 colunas)
MVV Cards (3 cards)
Equipe (4 membros)
Razões (6 cards)
Estatísticas
CTA Section
Footer
```

### **trabalhos.html**
```
Navbar
Page Header
Filtros (6 categorias)
Galeria (9 items com before/after)
Procedimentos (6 cards)
Timeline (4 passos)
CTA Section
Footer
```

### **contato.html**
```
Navbar
Page Header
Formulário + Info (2 colunas)
Mapa Google Maps
CTA WhatsApp
Footer
```

## 🎬 Animações e Efeitos

### Globais
- Fade In Up (entrada de elementos)
- Slide In Left (cards de info)
- Float (ícones flutuantes)
- Scale on Hover (cards)
- Translate on Hover (botões)

### Específicas
- Blob Animation (hero section)
- Parallax Effect (blobs com scroll)
- Before/After Slider (mousemove/touch)
- Number Counter (animação de números)
- Scroll Reveal (ao descer página)

## 🔧 Personalizações Possíveis

### Adicionar Nova Página
1. Crie novo arquivo `nova-pagina.html`
2. Copie a estrutura de outro HTML
3. Adicione link na navbar de todas as páginas
4. Customize o conteúdo

### Mudar Tipografia
No `style.css`, procure:
```css
body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
}
```
Substitua por outra fonte (Google Fonts, etc)

### Adicionar Seção Nova
1. Crie uma `<section class="nome-secao">` em um HTML
2. Estilize no `style.css`
3. Adicione animações se necessário no `script.js`

## 📊 Compatibilidade

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Navegadores Mobile (iOS Safari, Chrome Android)

## ⚡ Performance

- Imagens otimizadas (Unsplash)
- CSS minificado (inline)
- JavaScript sem dependências (vanilla)
- Lazy loading pronto para usar
- Fast animations com transform/opacity

## 🔒 SEO Básico Incluído

- Meta tags (charset, viewport)
- Títulos descritivos em cada página
- Estrutura semântica de HTML
- Alt text em imagens
- Heading hierarchy correto

## 💡 Dicas de Personalização

1. **Logo**: Substitua `✦` e `Lege Clinic` por seu branding
2. **Fotos**: Use fotos profissionais da sua clínica
3. **Cores**: Escolha cores que representem sua marca
4. **Conteúdo**: Escreva sobre seus serviços reais
5. **Redes Sociais**: Atualize links do footer

## 📞 Informações de Contato

Todos os dados estão na footer e em dados.html. Procure e substitua:
- Email: contato@legeclinic.com
- Telefone: (11) 99999-9999
- Endereço: Av. Paulista, 1000
- WhatsApp: Link customizado

## 🚀 Deploy

### Para colocar online:
1. **Netlify**: Drag & drop da pasta
2. **GitHub Pages**: Push para repositório
3. **Hosting tradicional**: FTP de arquivos
4. **Vercel**: Connect com GitHub

## 📝 Licença

Uso livre para projetos pessoais e comerciais.

## ✅ Checklist Antes de Usar

- [ ] Trocou o nome da clínica em todos arquivos
- [ ] Atualizou endereço e telefone
- [ ] Adicionou suas imagens/fotos
- [ ] Personalizou as cores
- [ ] Testou em mobile
- [ ] Verificou links (WhatsApp, redes, etc)
- [ ] Testou formulário de contato
- [ ] Revirou todo o conteúdo

---

**Desenvolvido com ❤️ para clínicas premium**

Site elegante, moderno e pronto para impressionar seus pacientes!
# lege--clinic-odonto
