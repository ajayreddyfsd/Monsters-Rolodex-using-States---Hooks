import { Component } from "react";
import './card-list-styles.css'
import Card from "../card/card-component";


const CardList = ({displayMonsters}) => {

  return <div className="card-list">
                    {
          displayMonsters.map((monster) => {
            return <Card key={monster.id} monster={monster}></Card>
          })
        }
        </div>

}

export default CardList;