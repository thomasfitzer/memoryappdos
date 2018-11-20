import React, { Component } from 'react';
import TeamCard from "./components/TeamCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import teams from "./teamlist.json";
import './App.css';
//Function to shuffle the images.
function shuffleTeams(array) {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    state = {
        teams,
        currentScore: 0,
        topScore: 0,
        goodBad: "",
        clicked: []
    };
//Function to deal with the clicking of the mouse.
    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
        
    };
    //Function to increase the score.
    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            goodBad: ""
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        } else if (newScore === 12) {
            this.setState({goodBad: "Hooray for everything, you won!"});
        }
        this.handleShuffle();
    };
    //Function to reset the game when a player loses.
    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            goodBad: "Zounds!",
            clicked: []
        });
        this.handleShuffle()
    };
//Shuffles the images
    handleShuffle = () => {
        let shuffledTeams = shuffleTeams(teams);
        this.setState({ teams: shuffledTeams });
    };
//Actually renders the page.
    render() {
        return (
            <Wrapper>
                <Nav
                title="Classic NHL Clicky Game"
                score={this.state.currentScore}
                topScore={this.state.topScore}
                goodBad={this.state.goodBad}
                />

                <Title>
                    Click on each jersey, but don't click any duplicates!
                </Title>

                <Container>
                    
                        {this.state.teams.map(team => (
                            //Louis helped me edit this so it would put the cards into rows.
                            <TeamCard
                            key={team.id}
                            handleClick={this.handleClick}
                            handleIncrement={this.handleIncrement}
                            handleReset={this.handleReset}
                            handleShuffle={this.handleShuffle}
                            id={team.id}
                            image={team.image}
                            />
                           
                        ))}
                    
                </Container>


            
            </Wrapper>
        )
    }
}

export default App;


