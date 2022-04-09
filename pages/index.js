import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bulma/css/bulma.css";
import Web3 from 'web3';

export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress]= useState()
  const connectWalletHandler = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);

      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log('Please insall Metamask')
    }
  }
  return (
    <div>
      <Head>
        <title>Lottery Dapp</title>
        <meta name="description" content="An Ethereum Lottery Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
              <h1>Ether Lottery</h1>
            </div>
            <div className="navbar-end">
              <button className="button is-link" onClick={connectWalletHandler}>
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-thirds">
                <section className="mt-5">
                  <p>Enter the lottery by sending 0.01 Ether</p>
                  <button className="button is-link is-large is-light mt-3">
                    Enter
                  </button>
                </section>
                <section className="mt-6">
                  <p>
                    <b>Admin only: Pick Winner</b>
                  </p>
                  <button className="button is-primary is-large is-light mt-3">
                    Pick Winner
                  </button>
                </section>
              </div>
              <div className="column is-one-third">
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery history</h2>
                        <div className="history-entry">
                          <div>
                            Lottery #1 Winner:
                            <div>
                              <a
                                href="https://etherscan.io/address/0xb46A1474eA09220e358B1d3ca84776D1c249f110"
                                target="_blank"
                              >
                                {setAddress}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players (1)</h2>
                        <div className="history-entry">
                          <div>
                            <a
                              href="https://etherscan.io/address/0xb46A1474eA09220e358B1d3ca84776D1c249f110"
                              target="_blank"
                            >
                              0xb46A1474eA09220e358B1d3ca84776D1c249f110
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Pot</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 SPT Development</p>
      </footer>
    </div>
  );
}
