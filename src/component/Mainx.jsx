import styled from "styled-components";
import List from "./List";

const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    margin-top: 80px;

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img{
            width: 300px;
            height: 200px;
            object-fit: cover;
            margin: 10px;
        }
    }
`

const Text = styled.div`
    text-align: center;
`

function Mainx (props) {

    return(
        <Main>
            <Text>
                <h2>상품 </h2>
            </Text>
            <ul>
            {
                props.product.map((list, index) => {
                return(
                    <List product={props.product[index]} key={index}/>
                );
                })
            }
            </ul>
        </Main>
    );
}

export default Mainx;