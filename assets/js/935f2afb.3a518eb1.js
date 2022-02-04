"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome!","href":"/","docId":"intro"},{"type":"category","label":"Intro to Gear","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Glossary","href":"/gear/glossary","docId":"gear/glossary"},{"type":"link","label":"Substrate","href":"/gear/introduction","docId":"gear/introduction"},{"type":"category","label":"Gear Network State","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"State Components","href":"/gear/gear-state/state","docId":"gear/gear-state/state"},{"type":"link","label":"State Transition","href":"/gear/gear-state/state-transition","docId":"gear/gear-state/state-transition"}]},{"type":"link","label":"Actor Model","href":"/gear/actor-model","docId":"gear/actor-model"},{"type":"link","label":"Memory Parallelism","href":"/gear/memory-parallelism","docId":"gear/memory-parallelism"},{"type":"link","label":"WebAssembly (WASM)","href":"/gear/WASM","docId":"gear/WASM"}]},{"type":"category","label":"Ecosystem","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Polkadot","href":"/ecosystem/polkadot","docId":"ecosystem/polkadot"},{"type":"link","label":"Substrate","href":"/ecosystem/substrate","docId":"ecosystem/substrate"}]},{"type":"link","label":"Getting Started","href":"/getting-started-in-5-minutes","docId":"getting-started-in-5-minutes"},{"type":"category","label":"Gear IDEA","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"IDEA Overview","href":"/idea/idea-overview","docId":"idea/idea-overview"},{"type":"link","label":"Online IDE","href":"/idea/online-ide","docId":"idea/online-ide"},{"type":"category","label":"Account","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create Account","href":"/idea/account/create-account","docId":"idea/account/create-account"},{"type":"link","label":"SS58 account format","href":"/idea/account/ss58","docId":"idea/account/ss58"},{"type":"link","label":"Receive GRB","href":"/idea/account/gear-bonus","docId":"idea/account/gear-bonus"}]}]},{"type":"category","label":"Gear Node","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setting Up","href":"/node/setting-up","docId":"node/setting-up"},{"type":"link","label":"Dev Net Mode","href":"/node/dev-net","docId":"node/dev-net"},{"type":"link","label":"Multi-Node Mode","href":"/node/multi-node","docId":"node/multi-node"}]},{"type":"category","label":"Developing Smart Contracts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cargo-program Utility","href":"/developing-contracts/cargo-program","docId":"developing-contracts/cargo-program"},{"type":"link","label":"Program State","href":"/developing-contracts/gear-program","docId":"developing-contracts/gear-program"},{"type":"link","label":"Message Format","href":"/developing-contracts/messaging","docId":"developing-contracts/messaging"},{"type":"link","label":"Program testing","href":"/developing-contracts/testing","docId":"developing-contracts/testing"},{"type":"link","label":"Upload Program","href":"/developing-contracts/deploy","docId":"developing-contracts/deploy"},{"type":"link","label":"Send a Message","href":"/developing-contracts/send-a-transaction","docId":"developing-contracts/send-a-transaction"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/developing-contracts/examples/prerequisites","docId":"developing-contracts/examples/prerequisites"},{"type":"link","label":"PING-PONG","href":"/developing-contracts/examples/ping","docId":"developing-contracts/examples/ping"},{"type":"link","label":"ERC-721: NFT","href":"/developing-contracts/examples/erc-721","docId":"developing-contracts/examples/erc-721"},{"type":"link","label":"ERC-20","href":"/developing-contracts/examples/erc20","docId":"developing-contracts/examples/erc20"},{"type":"link","label":"DAO","href":"/developing-contracts/examples/DAO","docId":"developing-contracts/examples/DAO"},{"type":"link","label":"Gear Feeds","href":"/developing-contracts/examples/feeds","docId":"developing-contracts/examples/feeds"}]}]},{"type":"category","label":"Tools","collapsible":true,"collapsed":true,"items":[],"href":"/tools/"},{"type":"category","label":"API for interacting with node","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Connect","href":"/api/connect","docId":"api/connect"},{"type":"link","label":"CLI","href":"/api/cli","docId":"api/cli"},{"type":"link","label":"Examples","href":"/api/examples","docId":"api/examples"}]},{"type":"category","label":"General topics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Web3","href":"/general/web3","docId":"general/web3"},{"type":"link","label":"dApp","href":"/general/dApps","docId":"general/dApps"},{"type":"link","label":"Smart Contracts","href":"/general/contracts","docId":"general/contracts"},{"type":"link","label":"DeFi","href":"/general/defi","docId":"general/defi"},{"type":"link","label":"NFT","href":"/general/nft","docId":"general/nft"},{"type":"link","label":"DAO","href":"/general/dao","docId":"general/dao"}]}]},"docs":{"api/cli":{"id":"api/cli","title":"Ussing CLI","description":"Coming soon...","sidebar":"tutorialSidebar"},"api/connect":{"id":"api/connect","title":"Connect API","description":"The API allows us to interact with the chain and make queries via Javascript. The basic API is implemented on the Substrate layer and is the same for all substrate-based networks.","sidebar":"tutorialSidebar"},"api/examples":{"id":"api/examples","title":"Examples","description":"Here are small code snippets in a question-answer format for start to interact with the main Gear component.","sidebar":"tutorialSidebar"},"developing-contracts/cargo-program":{"id":"developing-contracts/cargo-program","title":"`cargo-program` utility","description":"cargo-program is the Rust\'s cargo expanding utility aimed to simplify Gear programs development.","sidebar":"tutorialSidebar"},"developing-contracts/deploy":{"id":"developing-contracts/deploy","title":"Deploy smart contracts","description":"Following the principles of Actor model for communication, creating a program is just one of the specific types of transactions that contain a WASM file as a payload.","sidebar":"tutorialSidebar"},"developing-contracts/examples/DAO":{"id":"developing-contracts/examples/DAO","title":"Decentralized autonomous organization","description":"The smart-contract is available on GitHub//github.com/gear-tech/apps/tree/master/dao","sidebar":"tutorialSidebar"},"developing-contracts/examples/erc-721":{"id":"developing-contracts/examples/erc-721","title":"ERC-721: NFT","description":"Introduction","sidebar":"tutorialSidebar"},"developing-contracts/examples/erc20":{"id":"developing-contracts/examples/erc20","title":"What is ERC-20?","description":"ERC20 is a standard that\u2019s used for creating and issuing smart contracts on the Ethereum blockchain. It was created by Ethereum developers on behalf of the Ethereum community in 2015, and it was officially recognised in 2017.","sidebar":"tutorialSidebar"},"developing-contracts/examples/feeds":{"id":"developing-contracts/examples/feeds","title":"Introduction","description":"In order to introduce our rapidly growing community to the platform developed by Gear, we\'ve developed a dApplication in order to showcase some of the features that can be implemented using our smart contracts. Specifically, we aimed to build a platform simillar to Twitter: each user can have their own \\"feed\\", \\"feeds\\" can be subscribed to and the landing page contains global & personal \\"feeds\\".","sidebar":"tutorialSidebar"},"developing-contracts/examples/ping":{"id":"developing-contracts/examples/ping","title":"PING-PONG","description":"Gear is very easy to write code for!","sidebar":"tutorialSidebar"},"developing-contracts/examples/prerequisites":{"id":"developing-contracts/examples/prerequisites","title":"Gear Examples","description":"Gear provides a set of examples that can be used for your familiarization with writing programs on Gear or become the basis for your own dApp//github.com/gear-tech/apps.","sidebar":"tutorialSidebar"},"developing-contracts/gear-program":{"id":"developing-contracts/gear-program","title":"Gear program state","description":"The program is the main unit of the Gear component. Program code is stored as an immutable Wasm blob. Each program has a fixed amount of memory which persists between messagehandling (so-called static area).","sidebar":"tutorialSidebar"},"developing-contracts/messaging":{"id":"developing-contracts/messaging","title":"Message communication format","description":"Interaction with each program takes place by messaging.","sidebar":"tutorialSidebar"},"developing-contracts/send-a-transaction":{"id":"developing-contracts/send-a-transaction","title":"Call Smart contracts","description":"Coming soon...","sidebar":"tutorialSidebar"},"developing-contracts/testing":{"id":"developing-contracts/testing","title":"testing","description":"Smart contract testing","sidebar":"tutorialSidebar"},"ecosystem/polkadot":{"id":"ecosystem/polkadot","title":"Polkadot network","description":"Polkadot is a blockchain protocol that connects specific blockchains into one single multinetwork and provides a high level of interoperability and security.","sidebar":"tutorialSidebar"},"ecosystem/substrate":{"id":"ecosystem/substrate","title":"Substrate","description":"Substrate is a modular framework that enables the creation of unique blockchains by composing custom or pre-built components.","sidebar":"tutorialSidebar"},"gear/actor-model":{"id":"gear/actor-model","title":"Actor Model","description":"In concurrent computing systems, \u201cmessage-passing communication\u201d means that programs communicate by exchanging messages. This has its advantages over \u201cshared memory communication\u201d as message passing is easier to understand than shared memory concurrency as it\u2019s more robust and has better performance characteristics.","sidebar":"tutorialSidebar"},"gear/gear-state/state":{"id":"gear/gear-state/state","title":"State components","description":"As any blockchain system, Gear maintains distributed state. Runtime code compiled to WebAssembly becomes part of the blockchain\u2019s storage state.","sidebar":"tutorialSidebar"},"gear/gear-state/state-transition":{"id":"gear/gear-state/state-transition","title":"State transition","description":"Each system follows the rules according to which the state of the system evolves. As the network processes new input data, the state is advanced according to state transition rules. This input data is packed in granular pieces of information called transactions.","sidebar":"tutorialSidebar"},"gear/glossary":{"id":"gear/glossary","title":"Glossary","description":"Account","sidebar":"tutorialSidebar"},"gear/introduction":{"id":"gear/introduction","title":"Substrate","description":"As Gear uses a Substrate framework, the creation of different blockchains for specific applications is simplified. Substrate provides extensive functionality out-of-the-box and allows developers to focus on creating a custom engine on top of the protocol. This covers the most desired requirements for enterprise-ready decentralized projects.","sidebar":"tutorialSidebar"},"gear/memory-parallelism":{"id":"gear/memory-parallelism","title":"Memory parallelism","description":"Individual isolated memory space per program allows parallelization of message processing on a Gear node. Number of parallel processing streams equals the number of CPU cores. Each stream processes messages intended for a defined set of programs. It relates to messages sent from other programs or from outside (user\u2019s transactions).","sidebar":"tutorialSidebar"},"gear/WASM":{"id":"gear/WASM","title":"What is WebAssembly (WASM)","description":"WebAssembly is a way to run applications in programming languages other than JavaScript as web pages. Essentially, WASM is just a virtual machine that runs on all modern browsers, but whereas in the past you were required to use JavaScript to run code in a web page, WASM makes it possible to run code in browsers with programming languages other than JavaScript.","sidebar":"tutorialSidebar"},"general/contracts":{"id":"general/contracts","title":"What are Smart Contracts?","description":"Smart contracts are transactional computer programs that can execute the terms of an agreement automatically without the need for intervention. They were first proposed by Nick Szabo in the early \u201890s, but due to technological constraints they couldn\u2019t function properly. It wasn\u2019t until improvements were made to fundamental blockchain technology that application of smart contracts became possible.","sidebar":"tutorialSidebar"},"general/dao":{"id":"general/dao","title":"What are DAOs?","description":"DAOs are an effective and safe way to work with like-minded people around the globe. Essentially, they\u2019re safe ways to collaborate with strangers and commit funds to a specific cause. You can think of DAOs as magic internet organizations that\u2019re collectively owned and managed by its members.","sidebar":"tutorialSidebar"},"general/dApps":{"id":"general/dApps","title":"What are dApps?","description":"Decentralized Applications, or dApps, are applications that offer similar functionality to traditional applications but the main difference is that they are run on decentralized peer-to-peer networks, such as blockchains. Decentralized applications offer the services that make up the Web3 revolution.","sidebar":"tutorialSidebar"},"general/defi":{"id":"general/defi","title":"What is DeFi?","description":"Decentralized finance is a collection of financial services that are an alternative to the current financial system.","sidebar":"tutorialSidebar"},"general/nft":{"id":"general/nft","title":"What are NFTs?","description":"A Non-Fungible Token (NFT) is a unique type of cryptographic token that enables the tokenization of unique units of data to be stored on a blockchain.","sidebar":"tutorialSidebar"},"general/web3":{"id":"general/web3","title":"What is Web3?","description":"Web 3.0 is a new iteration of the internet that\u2019s powered by new technologies like artificial intelligence, machine learning and most importantly, blockchain technology.","sidebar":"tutorialSidebar"},"getting-started-in-5-minutes":{"id":"getting-started-in-5-minutes","title":"Getting Started","description":"This guide provides a general overview of running smart contracts on the Gear network. It guides you through how to write a smart contract, compile it to WASM and deploy it to the Gear network.","sidebar":"tutorialSidebar"},"idea/account/create-account":{"id":"idea/account/create-account","title":"How to create a Substrate account using the polkadot.js extension","description":"Key information and security","sidebar":"tutorialSidebar"},"idea/account/gear-bonus":{"id":"idea/account/gear-bonus","title":"What is GRB?","description":"While Gear is preparing to launch its Canary Network, we are using Statemine to reward active community members with the Gear Bonus Token (GRB), which in future can be exchanged for native Gear tokens.","sidebar":"tutorialSidebar"},"idea/account/ss58":{"id":"idea/account/ss58","title":"SS58 Address Format","description":"SS58 is a simple address format designed for Substrate based chains. The basic idea is a base-58 encoded value which can identify a specific account on the Substrate chain. For more details about the format, please check https://docs.substrate.io/v3/advanced/ss58/.","sidebar":"tutorialSidebar"},"idea/idea-overview":{"id":"idea/idea-overview","title":"Gear IDEA online","description":"Gear IDEA is a convenient tool that\u2019s purpose is to familiarize users with the Gear platform. It provides smart-contract developers with the easiest and fastest way to write, compile, test and upload smart-contracts to a test network directly in their browser without additional configuration.","sidebar":"tutorialSidebar"},"idea/online-ide":{"id":"idea/online-ide","title":"Gear online Integrated Development Environment (IDE)","description":"Coming soon...","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Intro to Gear","description":"Welcome!","sidebar":"tutorialSidebar"},"node/dev-net":{"id":"node/dev-net","title":"Running Gear node in Dev Net mode","description":"Coming soon...","sidebar":"tutorialSidebar"},"node/multi-node":{"id":"node/multi-node","title":"Creating a Multi-Node local testnet","description":"Coming soon...","sidebar":"tutorialSidebar"},"node/setting-up":{"id":"node/setting-up","title":"Setting Up the local node","description":"Gear node can run in a single Dev Net mode or you can create a Multi-Node local testnet or make your own build of Gear node.","sidebar":"tutorialSidebar"},"tools/tools":{"id":"tools/tools","title":"Tools","description":"Coming soon...","sidebar":"tutorialSidebar"}}}')}}]);