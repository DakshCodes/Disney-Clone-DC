import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from '../app/MovieData.json'


 const Originals = () => {
   const Movietype = "original";
   
   return (
      <Container>
         <h4>Orignal</h4>
         <Content>
            {
               Movie.map((item,key) => {
                  return (Movietype===item.type&&(
                     <Wrap key={key}>
                     {item.id}
                        <Link to={'/detail/'+item.id}>
                           <img src={item?.cardImg} alt="" />
                        </Link>
                     </Wrap>));

               })
            }
         </Content>
      </Container>
   );
};


const Container=styled.div`
padding:0 10px 26px;
h4{
   font-size:26px
}
`;
const Content = styled.div`
  display:grid;
  grid-gap:25px;
  gap:25px;
  grid-template-columns:repeat(4,minmax(0,1fr));

  @media(width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
`;


const Wrap=styled.div`
   padding-top:56.25%;
   cursor:pointer;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   border:1px solid rgba(249,249,249,0.1);
   transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.95);
   overflow:hidden;
   position:relative;

   img{
    inset:0px;
    height:100%;
    display:block;
    opacity:1;
    object-fit:cover;
    position:absolute;
    transition:opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;

   }   

   &:hover{
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transform:scale(1.05);
      border-color:rgba(249,249,249,0.1);
   }
`;






export default Originals;
