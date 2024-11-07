import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props){
        super(props);
        const initialLikesCounter = 100;
        this.state = ({counter:initialLikesCounter, clicked:false});
        this.handleClick = this.handleClick.bind(this);
        this.likedCounter = new LikeCounter();
        this.llk = new Liked();
    }

    handleClick(e){
        if (!this.state.clicked){
            this.setState({counter:this.state.counter+1});    
            this.likedCounter.increaseCounter();
        }
        else{
            this.setState({counter:this.state.counter-1});
            this.likedCounter.decreaseCounter();
        }
        this.setState({clicked: !this.state.clicked});
        // this.llk.liked = this.llk.liked(this.llk.liked===true?false:true);
        this.llk.toggleLiked();
        alert(this.likedCounter.fetchCounter()+" : "+this.llk.fetchLiked());
    }

    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button className="like-button" 
                    onClick={this.handleClick}>
                    <Liked />|<LikeCounter /></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}

export class LikeCounter extends Component{
    constructor(props){
        super(props);    
        const initialLikesCounter = 100   
        this.state = {counter: initialLikesCounter};
    }

    increaseCounter(){
        this.setState({
            counter: this.state.counter+1
        })
    }

    decreaseCounter(){
        this.setState({
            counter: this.state.counter-1
        })
    }

    fetchCounter(){
        return this.state.counter;
    }

    render(){
        return(
            <>
            <span>{this.state.counter}</span>
            </>
        )
    }
}

export class Liked extends Component{
    constructor(props){
        super(props);
        this.state = ({liked: false});
    }

    toggleLiked(){
        this.setState({
            liked: !this.state.liked
        })
    }

    fetchLiked(){
        return this.state.liked;
    }
    // set liked(llk){
    //     this.liked = llk;
    // }
    render(){
        return(
            <>
            {this.state.liked===true?"Liked":"Not Liked"}
            </>
        )
    }
}




// import { Component } from 'react';
// const initialCnt=100;
// export default class LikeButton extends Component {
//     constructor(props){
//         super(props);
//         this.state = {counter:initialCnt, click: true};
//         this.handleClick = this.handleClick.bind(this);
//         this.liked = new LikeCounter(initialCnt);
//     }

//     handleClick(e){
//         if (this.state.click){
//             this.setState({
//                 counter: this.state.counter-1,
//                 click: !this.state.click
//             })
//             this.liked.cnt = this.state.counter-1;
//         }else{
//             this.setState({
//                 counter: this.state.counter+1,
//                 click: !this.state.click
//             })
//             this.liked.cnt = this.state.counter+1;
//         }
//     }
//     render() {
//         return (
//             <>
//                 <div>
//                     <button className="like-button" onClick={this.handleClick}>like|{this.liked.cnt}</button>
//                     <span>{this.state.click && this.liked.cnt}</span>
//                 </div>
//                 <style>{`
//                     .like-button {
//                         font-size: 1rem;
//                         padding: 5px 10px;
//                         color:  #585858;
//                     }
//                    .liked {
//                         font-weight: bold;
//                         color: #1565c0;
//                    }
//                 `}</style>
//             </>
//         );
//     }
// }
// class LikeCounter{
//     constructor(counter){
//         this.counter = counter;
//     }

//     get cnt(){
//         return this.counter;
//     }

//     set cnt(counter){
//         this.counter = counter;
//     }
// }