---
trigger: model_decision
description: Guia de estilização de código para componentes React
---

## 🎯 Guia de Estilização para Componentes React

### 📁 Estrutura de Arquivos

* Um componente por pasta:

```
Button/
  ├── index.tsx
  ├── styles.ts
  └── types.ts
```

* Use `index.tsx` como entrypoint.

---

### 🧩 Nomeação

* Componentes: `PascalCase` → `UserCard`
* Funções/variáveis: `camelCase` → `handleClick`
* Arquivos: `PascalCase` ou `kebab-case` (mantenha padrão consistente)

---

### 🏗️ Estrutura do Componente

Ordem recomendada:

```tsx
import ...
import ...

type Props = { ... }

export function Component({ ... }: Props) {
  // hooks
  // estados
  // handlers

  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

---

### 🎨 Estilização

Escolha **um padrão e mantenha consistência**:

#### Opção 1: CSS Modules

```tsx
import styles from './styles.module.css'

<div className={styles.container} />
```

#### Opção 2: Styled Components

```tsx
const Container = styled.div`
  display: flex;
`
```

#### Opção 3: Tailwind (preferido para produtividade)

```tsx
<div className="flex items-center gap-2" />
```

---

### 🔁 Props

* Tipar sempre
* Desestruturar na assinatura
* Evitar props genéricas (`any`)

```tsx
type ButtonProps = {
  label: string
  onClick: () => void
}
```

---

### 🧠 Hooks

* Sempre no topo do componente
* Nunca dentro de condicionais
* Prefixo obrigatório: `use`

---

### 🧼 Boas Práticas

* Componentes pequenos e reutilizáveis
* Evite lógica pesada no JSX
* Extraia funções auxiliares
* Use early return:

```tsx
if (!data) return null
```

---

### 📦 Separação de Responsabilidade

* UI → componente
* Lógica → hooks customizados

```tsx
const { data } = useUser()
```

---

### ⚡ Performance

* Use `React.memo` quando necessário
* Use `useCallback` e `useMemo` com critério

---

### 🚫 Evite

* CSS global desnecessário
* Props drilling excessivo
* Componentes gigantes (>150 linhas)