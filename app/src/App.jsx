import styled from "styled-components";
import "./app.css";
import SearchResult from "./components/SearchResult";
import logo from './assets/logo.svg'
import { useState, useEffect } from "react";
export const BASE_URL = "https://foodyzone-backend.onrender.com/";
const App = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [selectedBtn,setSelectedBtn] = useState("all");
  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const inJason = await response.json();
        setData(inJason);
        setFilteredData(inJason);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    }
    fetchData();
  },[])
  const searchFood = (e) =>{
    const searchValue = e.target.value;
    console.log(searchValue);
    if(searchValue == ""){
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>{
      return food.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredData(filter);
  }

  const filterFood = (type) =>{
    if(type == "All"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }else{
      const filter = data?.filter((food) =>{
        return food.type.toLowerCase().includes(type.toLowerCase());
      });
      setFilteredData(filter);
      setSelectedBtn(type);
    }

  }

  const Button = ({ value }) => {
    return <button onClick = {()=>filterFood(value)} className="filter-btn">{value}</button>;
  };

  if(error) return <div>{error}</div>;
  if(loading) return <div>Loading...</div>
  return (
    <>
      <Container>
        <TopContainer>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <input type="text" onChange = {searchFood} placeholder="Search Food.." />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button value={"All"} />
          <Button value={"Breakfast"} />
          <Button value={"Lunch"} />
          <Button value={"Dinner"} />
        </FilterContainer>
      </Container>
      <SearchResult foods = {filteredData}/>
    </>
  );
};

export default App;

const Container = styled.div``;
const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #323334;
  padding: 30px 50px;
  height: 20px;
  input {
    border: 1px solid red;
    color: white;
    background-color: #323334;
    width: 200px;
    height: 30px;
    outline: none;
  }
  @media (0 < width < 600px) {
    flex-direction:column;
    justify-content: center;
    text-align:center;
    height: 50px;
    gap:15px;
  }
`;
const FilterContainer = styled.div`
  background-color: #323334;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  .filter-btn {
    background-color: #ff4f4f;
    border: none;
    border-radius: 4px;
    color: white;
    width: 80px;
    height: 30px;
    padding: 4px;
    &:hover{
      background-color: #ff0000;
      cursor: pointer;
    }
  }

`;
