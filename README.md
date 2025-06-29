# BP DeFi DApp

[English version below | 英文在下方]

## 项目简介

BP DApp 支持用户发行BP代币、钱包交互、转账，[并计划实现BP抵押借ETH的Aave风格借贷功能](https://github.com/Bestposs1ble/defi)。适合区块链初学者和开发者学习与实践。

## 功能特色

- 🚀 一键发行BP（BestPossible）ERC-20代币
- 🔗 支持MetaMask钱包连接与交互
- 💸 BP代币转账
- 🏦 计划支持BP抵押借ETH（[Aave风格](https://github.com/Bestposs1ble/defi)） 
- 🧑‍💻 代码开源，易于二次开发

## 快速开始

1. 克隆本项目
2. 安装依赖：`npm install`
3. 启动本地Ganache测试网络
4. 部署合约：`npx hardhat run scripts/deploy.js --network localhost`
5. 打开 `index.html`，连接MetaMask体验DApp

## 技术栈

- Solidity（智能合约）
- Hardhat（开发与部署）
- Ethers.js（前端合约交互）
- Tailwind CSS（前端样式）

## 贡献与交流

欢迎提Issue、PR，或在Discussions区交流想法！

---

# BP DeFi DApp

## About

BP DeFi DApp is an Ethereum-based decentralized finance (DeFi) application. Users can issue BP tokens, interact with wallets, transfer tokens, and (in the future) use BP as collateral to borrow ETH in an Aave-like lending system. This project is suitable for blockchain beginners and developers to learn and practice.

## Features

- 🚀 One-click BP (BestPossible) ERC-20 token deployment
- 🔗 MetaMask wallet connection and interaction
- 💸 BP token transfer
- 🏦 BP as collateral to borrow ETH ([Aave style, coming soon](https://github.com/Bestposs1ble/defi))
- 🧑‍💻 Open source and easy to extend

## Quick Start

1. Clone this repo
2. Install dependencies: `npm install`
3. Start local Ganache testnet
4. Deploy contracts: `npx hardhat run scripts/deploy.js --network localhost`
5. Open `index.html` and connect MetaMask to experience the DApp

## Tech Stack

- Solidity (Smart Contracts)
- Hardhat (Dev & Deploy)
- Ethers.js (Frontend interaction)
- Tailwind CSS (Frontend style)

## Contribution

Feel free to open issues, pull requests, or join the discussion!

---

![screenshot](https://github.com/user-attachments/assets/c9fb9837-9bea-41a3-9c5b-b0ac895c5712)

教程：https://bestpossible.space/article/26
通过本地ganache网络，部署基础的erc-20合约，发行自己的代币，再导入metamask中体验转账功能。![image](https://github.com/user-attachments/assets/c9fb9837-9bea-41a3-9c5b-b0ac895c5712)
通过js完成前端与合约交互，实现简单查询余额和转账功能![image](https://github.com/user-attachments/assets/00276be5-08ce-48b9-995e-a5972482ede6)
