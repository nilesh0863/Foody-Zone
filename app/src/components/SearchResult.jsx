import React from "react";
import styled from "styled-components";
import {BASE_URL} from "../App";

function SearchResult({foods}) {
    function Card({ food }) {
        const { name, image, price, text } = food; // Destructure props correctly
        return (
          <CardContainer>
            <div>
              <img src={BASE_URL + image} alt="food" />
            </div>
            <div className="food_info">
              <div>
                <h3 className="food-name">{name}</h3>
                <p>{text}</p>
              </div>
              <button>${price.toFixed(2)}</button>
            </div>
          </CardContainer>
        );
      }
  
  return (
    <Container>
      <FoodCards>
        {
            foods?.map((food,i)=>{
                return <Card key = {i} food={food}/>
            })
        }
      </FoodCards>
    </Container>
  );
}

export default SearchResult;

const Container = styled.div`
  min-height: calc(100vh - 150px);
  background-image: url("./src/assets/jimmy.png");
  /* background-color: aliceblue; */
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
const CardContainer = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  background-color: transparent;
  border: 2px solid grey;
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  padding: 8px;
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 20px;
      font-weight: 700;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
      background-color: red;
      border: none;
      border-radius: 4px;
      color: white;
      width: 50px;
      height: 30px;
      padding: 4px;
    }
  }
`;
