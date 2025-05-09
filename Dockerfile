FROM node:20-bullseye

WORKDIR /workspaces

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm    

RUN echo "\nalias ll='ls -la --color'\n" >> /root/.bashrc

# 開発用ポートを公開
EXPOSE 5100
