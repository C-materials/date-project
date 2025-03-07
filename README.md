# Date Project (가제)

## 개발 환경 설정

### Node.js 버전 관리

이 프로젝트는 Node.js 버전 관리를 위해 `.nvmrc` 파일을 사용합니다. 현재 프로젝트는 Node.js 20.16.0 버전을 사용합니다.

nvm(Node Version Manager)이 설치되어 있다면 다음 명령어로 올바른 Node.js 버전을 설정할 수 있습니다:

```bash
nvm use
```

nvm이 설치되어 있지 않다면 [nvm 설치 가이드](https://github.com/nvm-sh/nvm#installing-and-updating)를 참조하세요.

### pnpm 패키지 관리

이 프로젝트는 패키지 관리를 위해 pnpm을 사용하며, package.json의 `packageManager` 필드를 통해 pnpm 버전(9.10.0)을 관리합니다. Node.js 18 이상에서 제공되는 corepack을 사용하면 별도의 pnpm 설치 없이 프로젝트에 맞는 버전을 자동으로 사용할 수 있습니다.

corepack 활성화:

```bash
corepack enable
```

corepack을 활성화하면 package.json의 `packageManager` 필드에 지정된 pnpm 버전(9.10.0)이 자동으로 사용됩니다. 수동으로 설정하려면:

```bash
corepack prepare pnpm@9.10.0 --activate
```

### Git 훅 설정

이 프로젝트는 husky를 사용하여 Git 훅을 관리하고, lint-staged를 통해 커밋 전 코드 품질 검사를 수행합니다.

- **pre-commit**: 커밋 전에 변경된 파일에 대해 린트 및 포맷 검사를 수행합니다.

```bash
# Git 훅이 설정되지 않은 경우 실행
pnpm prepare
```

lint-staged 설정은 다음과 같습니다:

- JavaScript/TypeScript 파일: ESLint 및 Prettier 적용
- JSON/CSS/MD 파일: Prettier 적용

### 프로젝트 설정

의존성 설치:

```bash
pnpm install
```

개발 서버 실행:

```bash
pnpm dev
```

## 모노레포 구조

이 프로젝트는 Turborepo를 사용한 모노레포로 구성되어 있으며, pnpm workspace를 통해 패키지를 관리합니다. 주요 디렉토리 구조는 다음과 같습니다:

- `apps/`: 애플리케이션 코드가 있는 디렉토리
  - `storybook/`: 컴포넌트 문서화를 위한 스토리북
  - 기타 애플리케이션
- `packages/`: 공유 패키지가 있는 디렉토리

## 기타 정보
