'use strict';
//const e = React.createElement;
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLiked:false};
  }
  componentDidMount()
  {
    console.log(this.state.isLiked);
  }

  componentDidUpdate()
  {
    console.log(this.state.isLiked);
  }

  render() {
   //Resuable component #1
    const Message = (props) => <div className={props.type}>{props.msg}</div>
    //Resuable component #2
    const LiComp = (props) =>  <li>{props.item}</li>
    //Create component#3 which will list any array
    const ListArr = function(props)
    {
      const elements = props.arrObj;
      const items = [];
      
      for(const[index,value] of elements.entries())
      {
        items.push(<LiComp key={index} item={value} />)
      }
      
       return (
              <div className={props.type}>
                <h2>{props.title}</h2>
                <ol>{items}</ol>
                <span>{props.likeBtn}</span>
               </div>
       )
    }
    //Component #4
    const LikeButton = (props) => 
    { 
     const btnHtml = (this.state.isLiked) ? 'Thank you!,You like '+props.type : 'Like';
     return(
      <button id={'btn-'+props.type} style={{background:'red',color:'white',cursor:'pointer'}} onClick={ () => this.setState({isLiked:true})} >
        { btnHtml }
      </button>
      )
    }
    //   Data model
    const myFavFruits = ['Mango','Watermelon','Apple','Muskmelon','Chikku'];
    const myFavSweets = ['Kaju katli','Laddo','Jelebi','Gulab Jammun','Chakka','Shrikhand','Basundi'];
    
    return (
      <div className="container">
         <Message type="greet" msg="Welcome to my first React web app build using web component" />
    <ListArr type="fruits" title="My all time fav fruits" arrObj={myFavFruits} likeBtn={<LikeButton type="fruits" />} />
         <ListArr type="sweets" title="My all time fav sweets" arrObj={myFavSweets} likeBtn={<LikeButton type="sweets" />} />
      </div>
    )
  }
}
// select dom element where you want to init your component
const domContainer = document.querySelector('#my_component');
ReactDOM.render(<MyComponent />,domContainer);