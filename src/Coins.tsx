import React, { useEffect, useState } from "react";
import styled from "styled-components";
const CoinList = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  width:70%;
  column-gap:1em;
  row-gap:1em;
  margin:auto;  
  margin-top:15em;

`
const Item = styled.div`
  height:15em;
  width:100%;
  background-color:white;
  justify-content:center;
  align-items:center;
  margin:auto;
  color:black;
`

interface ICoins{
  id: string;
  is_active: string;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}
function Coins(){

  const [coins, setCoins] = useState<ICoins[]>();
  useEffect(()=>{
   (async () => {
     const response =await fetch("https://api.coinpaprika.com/v1/coins");
     const json = await response.json();
     setCoins(json.slice(0,100));
   })();
  },[])
  console.log(coins)

  return(
    <>
    <h1>월요일 오전 9시</h1>
    <CoinList>
      {coins?.map((coin)=>
        <Item key={coin.id}>
          <h1>{coin.name}</h1>
        </Item>
      )}


    </CoinList>
    </>

  )
}
export default Coins;