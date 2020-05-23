import React, { useState, useEffect, useContext } from "react";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import Web3 from "web3";
import BeatLoader from "react-spinners/BeatLoader";

const BuyForm = () => {

  const { account, dalpManager } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [calculating, setCalulating] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);

  const calculateMintAmount = async val => {
    console.log(isNaN(val), 'isNaN')
    if (!val || !dalpManager || isNaN(val)) {
      return setMintAmount(0);
    }
    setCalulating(true);
    try {
      const response = await dalpManager.methods.calculateMintAmount(Web3.utils.toWei(val, "ether")).call();
      console.log("Calculate Mint Amount:", response);
      setMintAmount(response);
      setCalulating(false);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    //console.log("amount changed", amount);
    calculateMintAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const onChange = async ev => {
    setAmount(ev.target.value);
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    setSubmitting(true);

    const amountToSend = Web3.utils.toWei(amount, "ether");
    console.log("Wei", amountToSend);
    console.log("From", account);

    try {
      const response = await dalpManager.methods.mint().send({
        value: amountToSend,
        from: account
      });
      setSubmitting(false);
      setAmount("");
      console.log(response);
    } catch(err) {
      console.error(err);

      setSubmitting(false);
    }
  };

  return (
    <Card title="Buy DALP">
      <div className="card-body">

        <p>Mint DALP tokens by staking your ETH. We'll calculate how many DALP tokens you can expect to mint.</p>

        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={amount}
            className="form-control form-control-lg"
            placeholder="ETH Amount"
            type="text"
            disabled={submitting}
          />
          {submitting ? (
            <button
              type="button"
              className="btn btn-primary btn-block mt-2"
              disabled
            >
              Investing...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary btn-block btn-lg mt-2">
              Invest {amount} ETH
            </button>
          )}
        </form>
        <ul className="list-group mt-2">
          <li className="list-group-item d-flex justify-content-between align-items-center">
              DALP Tokens
              {
                calculating ? (
                  <BeatLoader size={12} />
                ) : (
                  <span>
                  { mintAmount }
                  </span>
                )
              }
          </li>
        </ul>
      </div>
    </Card>
  );
};

BuyForm.defaultProps = {
  amount: 0
};

export default BuyForm;