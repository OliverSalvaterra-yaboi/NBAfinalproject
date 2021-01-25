import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component{

  state = {conference: '', teamName: '', rank: null, record: '', imageUrl: ''};

  nba = [
        {conference: 'Western', teamName:'Lakers', rank: 1, record: '11-3', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png'},
        {conference: 'Western', teamName:'Clippers', rank: 2, record: '9-4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png'},
        {conference: 'Western', teamName:'Jazz', rank: 3, record: '8-4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/1200px-Utah_Jazz_logo_%282016%29.svg.png'},
        {conference: 'Western', teamName:'Suns', rank: 4, record: '7-4', imageUrl: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/phx.png'},
        {conference: 'Western', teamName:'Trail Blazers', rank: 5, record: '7-5', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png'},
        {conference: 'Western', teamName:'Mavericks', rank: 6, record: '6-5', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png'},
        {conference: 'Western', teamName:'Spurs', rank: 7, record: '7-6', imageUrl: 'https://nbata.com/user/themes/nbata/images/heroes/9165376530_119cdfcac7_b.jpg'},
        {conference: 'Western', teamName:'Nuggets', rank: 8, record: '6-6', imageUrl: 'https://www.gimmesomeoven.com/wp-content/uploads/2014/08/Baked-Parmesan-Chicken-Nuggets-31-260x195.jpg'},
        {conference: 'Eastern', teamName:'Celtics', rank: 1, record: '8-3', imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fboston-celtics_416x416.jpg'},
        {conference: 'Eastern', teamName:'Bucks', rank: 2, record: '9-4', imageUrl: 'https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/11/2020/08/50415E00-PZSIQ-860x484.jpg'},
        {conference: 'Eastern', teamName:'Pacers', rank: 3, record: '8-4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png'},
        {conference: 'Eastern', teamName:'76ers', rank: 4, record: '9-5', imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fphiladelphia-76ers_416x416.jpg'},
        {conference: 'Eastern', teamName:'Nets', rank: 5, record: '8-6', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png'},
        {conference: 'Eastern', teamName:'Magic', rank: 6, record: '6-7', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1200px-Orlando_Magic_logo.svg.png'},
        {conference: 'Eastern', teamName:'Cavaliers', rank: 7, record: '6-7', imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fcleveland-cavaliers_416x416.jpg'},
        {conference: 'Eastern', teamName:'Hawks', rank: 8, record: '5-6', imageUrl: 'https://www.gannett-cdn.com/presto/2020/07/10/PTAL/b99dde0d-75fa-4526-9893-8cdcf3f03d01-RSHA-with-bullhead-catfish_-Albert-Gregory.jpg'}];

  onSearchSub = (term) => {
    console.log('this is the returned term: ' + term);
    console.log(this.nba[1].teamName);

    for(var i = 0; i < 16; i++) {
      if(this.nba[i].teamName === term) {
        this.setState(
          {conference: this.nba[i].conference, 
          teamName: term, 
          rank: this.nba[i].rank, 
          record: this.nba[i].record, 
          imageUrl: this.nba[i].imageUrl});
      }
    }
  }

  render() {
      return(
        <div className = "ui container" style = {{marginTop: '10px'}}>
          <SearchBar onSub = {this.onSearchSub}/>
          <div className = 'display'>
            <div className = 'data'> 
                Conference: {this.state.conference} 
                <br/> Team Name: {this.state.teamName}
                <br/> Rank: {this.state.rank}
                <br/> Record: {this.state.record}
            </div>
                <img src = {this.state.imageUrl} alt = 'nba team logo'/>
          </div>
        </div>
      )
  }
}
  

export default App;