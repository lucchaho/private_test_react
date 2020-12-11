import React, { useState, useEffect } from 'react';
import { ballsSelector, axReplaceBalls } from '../store/reducer/ballsSlice';
import { starsSelector, axReplaceStars } from '../store/reducer/starsSlice';
import SelectedItem from '../components/SelectedItem'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function GridView() {  
  const [data, setData] = useState([]);
  const listBalls = Array.from({length: 50}, (_, i) => i + 1)
  const listStars = Array.from({length: 12}, (_, i) => i + 1)
  const balls = useSelector(ballsSelector);
  const stars = useSelector(starsSelector);
  const dispatch = useDispatch();

  const handleBallSelectionChange = ({number, selected}) => {
    let pushToBalls = []
    if (selected) {
        pushToBalls = [...balls, number]
    } else {
        pushToBalls = balls.filter((value) => value !== number) 
    } 
    dispatch(axReplaceBalls(pushToBalls))
  }

  const handleStarSelectionChange = ({number, selected}) => {
    let pushToStars = []
    if (selected) {
        pushToStars = [...stars, number]
    } else {
        pushToStars = stars.filter((value) => value !== number) 
    } 
    dispatch(axReplaceStars(pushToStars))
  }

  const listBallsItems = () => {
    return listBalls.map((number) => (
        <SelectedItem key={number} number={number} selected={balls.includes(number)} onSelectionChange={handleBallSelectionChange} />
    ))
  }

  const listStarsItems = () => {
    return listStars.map((number) => (
        <SelectedItem key={number} number={number} selected={stars.includes(number)} onSelectionChange={handleStarSelectionChange} />
    ))
  }

  const getCost = () => {
        let cost = `Invalide`
        const pattern = [balls.length, stars.length]
        data.forEach((value) => {
            if (value.hasOwnProperty('pattern') && JSON.stringify(pattern) === JSON.stringify(value.pattern)) {
                cost = `${value.cost.value} ${value.cost.currency}`
            }
        })
        return cost
  }
  
  useEffect(() => {
    axios.get('https://www.fdj.fr/apigw/rtg/rest/euromillions').then((response) => {
            setData(response.data.multiples)
        }
    );
  });
  
  return (
    <div>
        <h5>Numero:</h5>
        {listBallsItems()}
        <h5>Etoiles:</h5>
        {listStarsItems()}
        <h5>Mise Totale:</h5>
        {getCost()}
    </div>
  );
}

export default GridView;
