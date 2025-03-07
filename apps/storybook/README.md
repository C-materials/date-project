This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 개발 환경 설정

### Node.js 및 pnpm 버전 관리

이 프로젝트는 Node.js 20.16.0 버전과 pnpm 9.10.0 버전을 사용합니다. 루트 디렉토리의 `.nvmrc` 파일과 package.json의 `packageManager` 필드를 통해 버전을 관리합니다.

corepack을 사용하여 자동으로 올바른 pnpm 버전을 사용할 수 있습니다:

```bash
# corepack 활성화
corepack enable

# 프로젝트 루트 디렉토리로 이동 후:
cd ../..
pnpm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Storybook

## Chromatic 배포

이 프로젝트는 [Chromatic](https://www.chromatic.com/)을 사용하여 스토리북을 배포합니다. GitHub Actions를 통해 자동으로 배포가 이루어집니다.

### CI/CD 설정

GitHub Actions를 통해 다음과 같은 시점에 자동으로 Chromatic에 배포됩니다:

1. `main` 브랜치에 푸시할 때
2. `main` 브랜치에 대한 풀 리퀘스트가 생성될 때

### GitHub Secrets 설정

Chromatic 배포를 위해 GitHub 저장소에 다음 시크릿을 설정해야 합니다:

- `CHROMATIC_PROJECT_TOKEN`: Chromatic 프로젝트 토큰

GitHub 저장소의 Settings > Secrets and variables > Actions에서 설정할 수 있습니다.

### 수동 배포

수동으로 Chromatic에 배포하려면 다음 명령어를 실행하세요:

```bash
pnpm --filter storybook chromatic
```

## React 19

이 프로젝트는 React 19를 사용합니다. React 19의 새로운 기능과 변경 사항에 대해 자세히 알아보려면 [React 공식 문서](https://react.dev/blog/2023/03/16/introducing-react-19)를 참조하세요.
